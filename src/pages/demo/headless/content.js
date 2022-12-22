const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://example.com');
  var a = await page.goto('https://developers.google.com/web/');
  // const hrefElement = await page.$('body');
  // console.info('hrefElement:', hrefElement)
  // await hrefElement.click();


  const aHandle = await page.evaluateHandle(() => document.querySelector('.devsite-footer-sites-list'));
  // const aHandle = await page.evaluateHandle(() => document.body);
  // console.info(' a:',a);
  // console.info( ' aHandle:',aHandle);

  const resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);
  console.log('resultHandle:', await resultHandle.jsonValue());
  // console.log('resultHandle:', resultHandle);
  await resultHandle.dispose();//Releases the object referenced by the handle for garbage collection.
  await browser.close();
})();