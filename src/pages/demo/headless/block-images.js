
const puppeteer = require('puppeteer');


function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

(async () => {
  const browser = await puppeteer.launch({
    devtools: true ,
    args: [
      '--proxy-server=http://127.0.0.1:7890',
      // Use proxy for localhost URLs
      // '--proxy-bypass-list=<-loopback>',
    ]
  });
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.resourceType() === 'image') {
      request.abort();
    } else {
      request.continue();
    }
  });
  await page.goto('https://news.google.com/news/');
  await sleep(20000)
  await page.screenshot({path: 'news.png', fullPage: true});
  
  // 保持浏览器打开，直到显式终止进程
  // await browser.waitForTarget(() => false);

  await browser.close();
})();