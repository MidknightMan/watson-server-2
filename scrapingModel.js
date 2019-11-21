const puppeteer = require('puppeteer');
const $ = require('cheerio');

async function returnDescription(url) {
  let wordArr = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page
      .goto(url)
      .then(object => {
        // if (!object) {
        //   return cb('error');
        // }
        return page.content();
      })
      .then(html => {
        $('p', html).each(function() {
          let scrape = $(this).text();
          wordArr.push(scrape);
        });
      });
  } catch (error) {
    console.error('error');
    await browser.close();
    return 'error, url not found';
  }
  console.log(wordArr.toString());
  await browser.close();
  if (wordArr.toString() === 'Other reasons this message may be displayed:\n') {
    return 'no data found for place';
  }
  return wordArr.toString();
}

module.exports = returnDescription;
