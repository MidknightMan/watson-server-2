const { sendPersonality } = require('../Controller/sendPersonality');
const { sendScrape } = require('../Controller/sendScrape');
const apiRouter = require('express').Router();

apiRouter.route('/personality').post(sendPersonality);
apiRouter.route('/scrape').post(sendScrape);
module.exports = apiRouter;
