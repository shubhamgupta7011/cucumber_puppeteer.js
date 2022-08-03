// /**
//  * Clicks on an item. 
//  * @param {String} selector CSS selector of the item to click.
//  * @param {String} waitForSelector If not null, the selector that should exist after the click.
//  * test should allow to complete.
//  */
// module.exports = async function(selector, waitForSelector) {
//     // Wait until the given selector exists
//     if(waitForSelector){
//         await Promise.all([
//             page.waitForSelector(waitForSelector),
//             page.click(selector)
//         ]);

//     // Nothing to wait for, just click
//     } else {
//         await page.click(selector);
//     }
// };

const getElement = require('./getElement')

module.exports = async function(selector, options ,timeout) {
    const element = await getElement(selector,timeout)
    element.click(options);
};