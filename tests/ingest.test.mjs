import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import yaml from 'js-yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chromeCandidates = [
  process.env.HEIGE_CHROME,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const chrome = chromeCandidates.find((candidate) => fs.existsSync(candidate));

test('ingest emits parseable YAML when a computed font stack contains quoted names', { timeout: 30_000 }, (t) => {
  if (!chrome) {
    t.skip('Chrome or Chromium is required for the ingest integration test');
    return;
  }

  const slug = `ingest-font-stack-test-${process.pid}`;
  const outputDir = path.join(ROOT, 'ingested', slug);
  const html = `<!doctype html><title>Font test</title>
    <style>
      body { font-family: system-ui, sans-serif; }
      h1 { font-family: "Noto Sans SC", "PingFang SC", sans-serif; }
    </style>
    <h1>字体测试</h1><p>正文</p>`;
  const url = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;

  try {
    const result = spawnSync(process.execPath, ['bin/heige-design', 'ingest', url, slug], {
      cwd: ROOT,
      encoding: 'utf8',
      env: { ...process.env, HEIGE_CHROME: chrome },
      timeout: 25_000,
    });
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);

    const designPath = path.join(outputDir, 'DESIGN.md');
    const raw = fs.readFileSync(designPath, 'utf8');
    const frontMatter = raw.match(/^---\n([\s\S]*?)\n---/);
    assert.ok(frontMatter, 'generated DESIGN.md must contain YAML front matter');

    const parsed = yaml.load(frontMatter[1]);
    assert.match(parsed.typography['display-xl'].fontFamily, /Noto Sans SC/);
  } finally {
    fs.rmSync(outputDir, { recursive: true, force: true });
    const ingestedDir = path.dirname(outputDir);
    if (fs.existsSync(ingestedDir) && fs.readdirSync(ingestedDir).length === 0) {
      fs.rmdirSync(ingestedDir);
    }
  }
});

test('ingest rejects a slug that escapes the ingested directory', { timeout: 30_000 }, (t) => {
  if (!chrome) {
    t.skip('Chrome or Chromium is required for the ingest integration test');
    return;
  }

  const escapedName = `ingest-path-traversal-test-${process.pid}`;
  const escapedDir = path.join(ROOT, escapedName);
  const unsafeSlug = `../${escapedName}`;
  const url = 'data:text/html;charset=utf-8,%3Ctitle%3EPath%20test%3C%2Ftitle%3E%3Cp%3Etest%3C%2Fp%3E';

  try {
    const result = spawnSync(process.execPath, ['bin/heige-design', 'ingest', url, unsafeSlug], {
      cwd: ROOT,
      encoding: 'utf8',
      env: { ...process.env, HEIGE_CHROME: chrome },
      timeout: 25_000,
    });

    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /slug 只能包含字母、数字和连字符/);
    assert.equal(fs.existsSync(escapedDir), false);
  } finally {
    fs.rmSync(escapedDir, { recursive: true, force: true });
  }
});

test('ingest serializes source URLs with YAML special characters safely', { timeout: 30_000 }, (t) => {
  if (!chrome) {
    t.skip('Chrome or Chromium is required for the ingest integration test');
    return;
  }

  const slug = `ingest-yaml-url-test-${process.pid}`;
  const outputDir = path.join(ROOT, 'ingested', slug);
  const url = 'data:text/html,<title>key: value</title><style>body{font-family:system-ui}</style><p>test</p>';

  try {
    const result = spawnSync(process.execPath, ['bin/heige-design', 'ingest', url, slug], {
      cwd: ROOT,
      encoding: 'utf8',
      env: { ...process.env, HEIGE_CHROME: chrome },
      timeout: 25_000,
    });
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);

    const raw = fs.readFileSync(path.join(outputDir, 'DESIGN.md'), 'utf8');
    const frontMatter = raw.match(/^---\n([\s\S]*?)\n---/);
    assert.ok(frontMatter);
    const parsed = yaml.load(frontMatter[1]);
    assert.match(parsed.description, /key: value/);
  } finally {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
});

test('ingest rejects a slug directory that is a symlink outside the repository', { timeout: 30_000 }, (t) => {
  if (!chrome) {
    t.skip('Chrome or Chromium is required for the ingest integration test');
    return;
  }

  const slug = `ingest-symlink-test-${process.pid}`;
  const ingestedDir = path.join(ROOT, 'ingested');
  const linkPath = path.join(ingestedDir, slug);
  const externalDir = fs.mkdtempSync(path.join(process.env.TMPDIR || '/tmp', 'heige-design-external-'));
  fs.mkdirSync(ingestedDir, { recursive: true });
  fs.symlinkSync(externalDir, linkPath);

  try {
    const result = spawnSync(
      process.execPath,
      ['bin/heige-design', 'ingest', 'data:text/html,<title>symlink</title><p>test</p>', slug],
      {
        cwd: ROOT,
        encoding: 'utf8',
        env: { ...process.env, HEIGE_CHROME: chrome },
        timeout: 25_000,
      },
    );

    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /输出目录不能是软链接/);
    assert.equal(fs.existsSync(path.join(externalDir, 'DESIGN.md')), false);
  } finally {
    fs.rmSync(linkPath, { force: true });
    fs.rmSync(externalDir, { recursive: true, force: true });
    if (fs.existsSync(ingestedDir) && fs.readdirSync(ingestedDir).length === 0) {
      fs.rmdirSync(ingestedDir);
    }
  }
});
