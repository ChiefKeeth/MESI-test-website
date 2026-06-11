// One-off QA helper: loads each page and reports console errors + failed requests.
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const puppeteer = require('C:/Users/keeth/AppData/Roaming/npm/node_modules/puppeteer');

const pages = ['/', '/about.html', '/divisions.html', '/contact.html', '/privacy.html', '/terms.html'];
const browser = await puppeteer.launch({
  executablePath: 'C:/Users/keeth/.cache/puppeteer/chrome/win64-149.0.7827.22/chrome-win64/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

for (const path of pages) {
  const page = await browser.newPage();
  const issues = [];
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') issues.push(`[console.${m.type()}] ${m.text()}`); });
  page.on('pageerror', e => issues.push(`[pageerror] ${e.message}`));
  page.on('requestfailed', r => issues.push(`[requestfailed] ${r.url()} — ${r.failure()?.errorText}`));
  page.on('response', r => { if (r.status() >= 400) issues.push(`[http ${r.status()}] ${r.url()}`); });
  await page.goto('http://localhost:3000' + path, { waitUntil: 'networkidle2' });
  await page.evaluate(async () => {
    for (let y = 0; y <= document.body.scrollHeight; y += 900) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); }
  });
  await new Promise(r => setTimeout(r, 600));
  console.log(`\n=== ${path} ===`);
  console.log(issues.length ? issues.join('\n') : 'clean');
  await page.close();
}
await browser.close();
