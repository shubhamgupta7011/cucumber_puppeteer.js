const Browser = require('../utils/browser');
const commonConfig = require('../config/commom.config');
const envConfig = require('../config/env.config');
const data = require('../data');

class Page {
    browser;
    excel;
  
    constructor() {
      this.browser = new Browser();
    }

    get appUser() {
      const username = process.env.username || '';
      const password = process.env.password || '';
      if (username && password) {
        return {
          username,
          password,
        };
      }
      throw new Error('App user credentials unavailable!!');
    }

    // get siteLanguage() {
    //   return;
    // }
  
    get testEnvironment() {
      return envConfig.env;
    }

    get appURL() {
      return envConfig[envConfig.env].web;
    }

    get apiBaseURL() {
      return envConfig[envConfig.env].api;
    }

    get testData(){
      return data;
    }

    get appTimeout() {
      return commonConfig.TIMEOUT_IN_SECS;
    }
}

module.exports = Page;