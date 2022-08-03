// /**
//  * Wait for a selector to exist.
//  * @param {String} selector The selector to wait for. 
//  * @param {Number} seconds The number of seconds to wait.
//  */
// module.exports = async function(selector, seconds) {
//     const timeout = seconds ? seconds : 30;
//     const options = {timeout: timeout * 1000};
//     await page.waitForSelector(selector, options);
// };

/**
 * Wait for a selector to exist.
 * @param {String} selector The selector to wait for. 
 * @param {Number} seconds The number of seconds to wait.
 * @return {Element} return web element 
 */
 module.exports = async function(selector, options) {
    if (selector.startsWith('//') || selector.startsWith('(')) {
        return await page.waitForXPath(selector, options);  
    }
    return await page.waitForSelector(selector, options);
};