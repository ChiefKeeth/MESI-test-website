import { createRequire } from 'module';
import { existsSync, mkdirSync } from 'fs';
import { readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const puppeteer = require('C:/Users/Keethon/AppData/Roaming/npm/node_modules/puppeteer');

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const screenshotsDir = join(__dirname, 'temporary screenshots');
if (!existsSync(screenshotsDir)) mkdirSync(screenshotsDir, { recursive: true });

const existing = readdirSync(screenshotsDir).filter(f => /^screenshot-\d+/.test(f));
const nums = existing.map(f => parseInt(f.match(/^screenshot-(\d+)/)[1]));
const nextNum = nums.length ? Math.max(...nums) + 1 : 1;

const filename = label ? `screenshot-${nextNum}-${label}.png` : `screenshot-${nextNum}.png`;
const filepath = join(screenshotsDir, filename);

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/Keethon/.cache/puppeteer/chrome/win64-149.0.7827.22/chrome-win64/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Saved: ${filepath}`);
