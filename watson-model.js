const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const apiKey = require('./keys');

const personalityInsights = new PersonalityInsightsV3({
  authenticator: new IamAuthenticator({
    apikey: apiKey
  }),
  version: '2017-10-13',
  url: 'https://gateway-lon.watsonplatform.net/personality-insights/api'
});

exports.getPersonality = wordPool =>
  personalityInsights
    .profile({
      content: wordPool,
      contentType: 'text/plain',
      consumptionPreferences: true
    })
    .then(response => {
      const formattedData = JSON.stringify(response.result, null, 2);
      console.log(formattedData);
      return formattedData;
    });
