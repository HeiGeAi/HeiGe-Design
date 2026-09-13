import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import test from 'node:test';
import { chromium } from 'playwright-core';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DECK = path.join(ROOT, 'systems', 'forge-anvil', 'flagship', 'deck.html');
const browserCandidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const executablePath = browserCandidates.find((candidate) => fs.existsSync(candidate));

test('forge-anvil deck stays centered and hittable on desktop and mobile', async (t) => {
  if (!executablePath) {
    t.skip('Chrome or Chromium is required for the deck layout test');
    return;
  }
  const browser = await chromium.launch({ headless: true, executablePath });
  try {
    for (const viewport of [{ width: 390, height: 844 }, { width: 1440, height: 900 }]) {
      const page = await browser.newPage({ viewport });
      await page.route(/^https?:/, (route) => route.abort());
      await page.goto(pathToFileURL(DECK).href, { waitUntil: 'domcontentloaded' });
      const layout = await page.evaluate(() => {
        const scaler = document.querySelector('#scaler');
        const stage = document.querySelector('#stage');
        const rect = scaler.getBoundingClientRect();
        const hit = document.elementFromPoint(innerWidth / 2, innerHeight / 2);
        return {
          left: rect.left,
          right: rect.right,
          top: rect.top,
          bottom: rect.bottom,
          centerHitsStage: Boolean(hit && stage.contains(hit)),
        };
      });
      assert.ok(layout.left >= -1, `${viewport.width}px left edge: ${layout.left}`);
      assert.ok(layout.right <= viewport.width + 1, `${viewport.width}px right edge: ${layout.right}`);
      assert.ok(layout.top >= -1, `${viewport.width}px top edge: ${layout.top}`);
      assert.ok(layout.bottom <= viewport.height + 1, `${viewport.width}px bottom edge: ${layout.bottom}`);
      assert.equal(layout.centerHitsStage, true, `${viewport.width}px viewport center must hit the stage`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
});
