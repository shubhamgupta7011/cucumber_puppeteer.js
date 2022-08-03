const waitForElement = require('./waitForElement');
/**
 * Wait for a selector to exist.
 * @param {String} selector The selector to wait for. 
 * @param {Number} seconds The number of seconds to wait.
 */
//  module.exports = async function(selector, seconds) {
//     const options = { timeout: seconds * 1000 };
//     if (selector.startsWith('//') || selector.startsWith('(')) {
//         return await page.waitForXPath(selector, options);  
//     }
//     return await page.waitForSelector(selector, options);
// };

module.exports = async function(selector, seconds) {
    await waitForElement(selector,{ timeout: seconds * 1000 });
    if (selector.startsWith('//') || selector.startsWith('(')) {
        return (await page.$x(selector))[0];
    }
    return await page.$(selector);
};