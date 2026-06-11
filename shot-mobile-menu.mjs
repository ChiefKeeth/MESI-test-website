// One-off QA helper: open the mobile menu at 390px and screenshot it.
import { createRequire } from 'module';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const puppeteer = require('C:/Users/keeth/AppData/Roaming/npm/node_modules/puppeteer');
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const dir = join(__dirname, 'temporary screenshots');
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
const nums = readdirSync(dir).filter(f => /^screenshot-\d+/.test(f)).map(f => parseInt(f.match(/^screenshot-(\d+)/)[1]));
const n = nums.length ? Math.max(...nums) + 1 : 1;

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/keeth/.cache/puppeteer/chrome/win64-149.0.7827.22/chrome-win64/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
await page.screenshot({ path: join(dir, `screenshot-${n}-mobile-home.png`) });
await page.tap('.nav-hamburger');
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: join(dir, `screenshot-${n + 1}-mobile-menu-open.png`) });
console.log('Saved', n, 'and', n + 1);
await browser.close();
