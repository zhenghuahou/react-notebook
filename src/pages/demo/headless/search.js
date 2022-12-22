// import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://developers.google.com/web/');

  // Type into search box.
  await page.type('.devsite-search-field', 'Headless Chrome');

  // Wait for suggest overlay to appear and click "show all results".
  const allResultsSelector = '.devsite-suggest-all-results';
  const t = await page.waitForSelector(allResultsSelector);
  console.info(' t:',t)
  await page.click(allResultsSelector);

  // Wait for the results page to load and display the results.
  const resultsSelector = '.gsc-results .gs-title';
  const t2 =  await page.waitForSelector(resultsSelector);
  console.info(' t2:',t2)


  // Extract the results from the page.
  const links = await page.evaluate(resultsSelector => {
    console.info('resultsSelector:',resultsSelector);
    return [...document.querySelectorAll(resultsSelector)].map(anchor => {
      const title = anchor.textContent.split('|')[0].trim();
      return `${title} - ${anchor.href}`;
    });
  }, resultsSelector);

  // Print all the files.
  console.log(links.join('\n'));

  await browser.close();
})();