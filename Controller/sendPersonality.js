const { getPersonality } = require('../watson-model');

exports.sendPersonality = (req, res, next) => {
  console.log('in controller');
  const wordPool = req.body;
  console.log(req.body);
  getPersonality(wordPool.wordpool)
    .then(personality => {
      res.status(200).send({ userP: JSON.parse(personality) });
    })
    .catch(console.log);
};
