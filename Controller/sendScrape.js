const returnDescription = require('../scrapingModel');

exports.sendScrape = (req, res, next) => {
  const string = req.body;
  console.log(string.place);
  const formatString = string.place.split(' ').join('_');
  searchUrl = `https://en.wikipedia.org/wiki/${formatString}`;
  returnDescription(searchUrl)
    .then(wordPool => {
      res.status(200).send({ description: wordPool });
    })
    .catch(console.log);
};
