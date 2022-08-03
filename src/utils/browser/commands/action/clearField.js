
/**
 * Clicks on an item. 
 * @param {String} selector CSS selector of the item to click.
 * @param {String} waitForSelector If not null, the selector that should exist after the click.
 * test should allow to complete.
 */
 const getElement = require('./getElement')

module.exports = async function(selector, timeout) {
    const element = await getElement(selector,timeout)
    element.clear();
};