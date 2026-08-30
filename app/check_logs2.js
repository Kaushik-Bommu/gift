import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => {
      console.log('PAGE LOG:', msg.type(), msg.text());
  });
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  console.log('Navigating...');
  await page.goto('http://localhost:5174/universe', { waitUntil: 'networkidle2' });
  
  console.log('Waiting for 5 seconds to catch delayed errors...');
  await new Promise(r => setTimeout(r, 5000));

  await browser.close();
})();
