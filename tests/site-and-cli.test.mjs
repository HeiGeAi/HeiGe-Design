import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import test from 'node:test';
import { chromium } from 'playwright-core';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const browserCandidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const executablePath = browserCandidates.find((candidate) => fs.existsSync(candidate));

test('docs/ site has no escaping or missing local links and publishes all flagship pages', () => {
  const htmlFiles = [
    path.join(DOCS, 'index.html'),
    ...fs.readdirSync(path.join(DOCS, 's')).filter((f) => f.endsWith('.html')).map((f) => path.join(DOCS, 's', f)),
  ];
  const broken = [];
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8');
    for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const target = m[1];
      if (/^(https?:|mailto:|#|javascript:|data:)/.test(target)) continue;
      const resolved = path.resolve(path.dirname(file), target.split(/[?#]/)[0]);
      const rel = path.relative(DOCS, resolved);
      if (rel.startsWith('..') || path.isAbsolute(rel) || !fs.existsSync(resolved)) {
        broken.push(`${path.relative(DOCS, file)} -> ${target}`);
      }
    }
  }
  assert.deepEqual(broken, [], `Found broken or escaping links under docs/: ${broken.join(', ')}`);

  // Every flagship page/deck under systems/ must exist under docs/flagship/
  const systemsDir = path.join(ROOT, 'systems');
  let flagshipCount = 0;
  for (const slug of fs.readdirSync(systemsDir)) {
    for (const file of ['page.html', 'deck.html']) {
      const src = path.join(systemsDir, slug, 'flagship', file);
      if (!fs.existsSync(src)) continue;
      flagshipCount++;
      const pub = path.join(DOCS, 'flagship', slug, file);
      assert.ok(fs.existsSync(pub), `Missing published flagship file: docs/flagship/${slug}/${file}`);
    }
  }
  assert.ok(flagshipCount >= 16, `Expected at least 16 flagship files, found ${flagshipCount}`);
});

test('detail pages define --dw and --dls CSS custom properties used by preview headings', () => {
  const detailFiles = fs.readdirSync(path.join(DOCS, 's')).filter((f) => f.endsWith('.html'));
  assert.equal(detailFiles.length, 50);
  for (const f of detailFiles) {
    const html = fs.readFileSync(path.join(DOCS, 's', f), 'utf8');
    assert.match(html, /--dw:[^;"]+/, `${f} missing --dw variable`);
    assert.match(html, /--dls:[^;"]+/, `${f} missing --dls variable`);
  }
});

test('gallery search hides empty family headers in Chromium', async (t) => {
  if (!executablePath) {
    t.skip('Chrome or Chromium is required for the gallery filter test');
    return;
  }
  const browser = await chromium.launch({ headless: true, executablePath });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.route(/^https?:/, (route) => route.abort());
    await page.goto(pathToFileURL(path.join(DOCS, 'index.html')).href, { waitUntil: 'domcontentloaded' });
    await page.fill('#q', 'forge-anvil');
    const state = await page.evaluate(() => {
      const visibleTiles = [...document.querySelectorAll('.tile')].filter((el) => el.style.display !== 'none');
      const visibleHeads = [...document.querySelectorAll('.famhead')].filter((el) => el.style.display !== 'none');
      return {
        tiles: visibleTiles.map((el) => el.getAttribute('href')),
        heads: visibleHeads.map((el) => el.dataset.family),
      };
    });
    assert.deepEqual(state.tiles, ['s/forge-anvil.html']);
    assert.deepEqual(state.heads, ['凶悍工业']);
    await page.close();
  } finally {
    await browser.close();
  }
});

test('export CLI rejects unknown or missing --format values with nonzero status', () => {
  for (const extra of [['--format', 'nonexistent'], ['--format']]) {
    const res = spawnSync(process.execPath, [path.join(ROOT, 'bin', 'heige-design'), 'export', 'forge-anvil', ...extra], {
      cwd: ROOT,
      encoding: 'utf8',
    });
    assert.notEqual(res.status, 0, `expected nonzero exit for export ${extra.join(' ')}`);
    assert.match(res.stderr, /未知导出格式/);
  }
  const listRes = spawnSync(process.execPath, [path.join(ROOT, 'bin', 'heige-design'), 'export', 'forge-anvil'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  assert.equal(listRes.status, 0, listRes.stderr);
  assert.match(listRes.stdout, /可用格式/);
});
