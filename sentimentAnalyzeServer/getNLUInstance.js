const dotenv = require('dotenv');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
dotenv.config();


module.exports = function getNLUInstance(){
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;

    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: '2020-08-01',
        authenticator: new IamAuthenticator({
            apikey: `${API_KEY}`
        }),
        serviceUrl: `${API_URL}`
    });
    return naturalLanguageUnderstanding
}
