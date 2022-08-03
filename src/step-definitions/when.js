const { When } = require('cucumber');
const openUrl = require('../utils/browser/commands/action/openUrl');

When('I open the url {string-env}', async function(url) {
        await openUrl(url); 
    }    
);