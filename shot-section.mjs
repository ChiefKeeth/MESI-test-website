// Viewport screenshot at a specific scroll position (or element selector).
// Usage: node shot-section.mjs <url> <scrollY|#selector> <label> [width]
import { createRequire } from 'module';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const puppeteer = require('C:/Users/keeth/AppData/Roaming/npm/node_modules/puppeteer');

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const url    = process.argv[2] || 'http://localhost:3000';
const target = process.argv[3] || '0';
const label  = process.argv[4] || 'section';
const width  = parseInt(process.argv[5] || '1440', 10);

const dir = join(__dirname, 'temporary screenshots');
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
const nums = readdirSync(dir).filter(f => /^screenshot-\d+/.test(f)).map(f => parseInt(f.match(/^screenshot-(\d+)/)[1]));
const filepath = join(dir, `screenshot-${nums.length ? Math.max(...nums) + 1 : 1}-${label}.png`);

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/keeth/.cache/puppeteer/chrome/win64-149.0.7827.22/chrome-win64/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });

await page.evaluate(async (t) => {
  let y = 0;
  if (t.startsWith('#') || t.startsWith('.')) {
    const el = document.querySelector(t);
    if (el) y = el.getBoundingClientRect().top + window.scrollY - 80;
  } else {
    y = parseInt(t, 10) || 0;
  }
  // walk down so reveals fire, then settle at target
  for (let s = 0; s <= y; s += 800) { window.scrollTo(0, s); await new Promise(r => setTimeout(r, 50)); }
  window.scrollTo(0, y);
}, target);
await new Promise(r => setTimeout(r, 1100));

await page.screenshot({ path: filepath });
await browser.close();
console.log(`Saved: ${filepath}`);
