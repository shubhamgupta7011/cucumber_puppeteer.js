const { Given } = require('cucumber');
const openUrl = require('../utils/browser/commands/action/openUrl');

Given('the url {string-env} is opened', async function(url) {
    await openUrl.call(this, url); 
});