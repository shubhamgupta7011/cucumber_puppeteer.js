/**
 * Presses a key on the keyboard
 * @param {String} key The key to press
 * @param {String} selector The element to focus before pressing the key
 */
const waitForElement = require('./waitForElement')

module.exports = async function(key, selector,seconds) {
    if(selector){
        waitForElement(selector,{ timeout: seconds * 1000 })
        await page.focus(selector);
    }
    await page.keyboard.press(key);
};