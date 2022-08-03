const clickElement = require('./action/clickElement');
const checkAccessibility = require('./check/checkAccessibility');
const checkAttribute = require('./check/checkAttribute');
const checkAttributeContains = require('./check/checkAttributeContains');
const checkContainsText = require('./check/checkContainsText');
const checkCookieExists = require('./check/checkCookieExists');
const checkCookieValue = require('./check/checkCookieValue');
const checkElementEnabled = require('./check/checkElementEnabled');
const checkElementExists = require('./check/checkElementExists');
const checkElementValue = require('./check/checkElementValue');
const checkElementVisible = require('./check/checkElementVisible');
const checkHasFocus = require('./check/checkHasFocus');
const checkIsChecked = require('./check/checkIsChecked');
const checkIsEmpty = require('./check/checkIsEmpty');
const checkScreenshot = require('./check//checkScreenshot');
const checkTitle = require('./check/checkTitle');
const checkTitleContains = require('./check/checkTitleContains');
const checkUrl = require('./check/checkUrl');
const checkUrlContains = require('./check/checkUrlContains');
const fileUpload = require('./action/fileUpload');
const keyboardPress = require('./action/keyboardPress');
const openUrl = require('./action/openUrl');
const scrollToElement = require('./action/scrollToElement');
const waitForElement = require('./action/waitForElement');
const waitFor = require('./action/waitFor');
const getElement = require('./action/getElement');
const getElements = require('./action/getElements');
const check = require('./action/check');
const unCheck = require('./action/unCheck');
const clearField = require('./action/clearField');
const type = require('./action/type');
const select = require('./action/select');

module.exports = {
    clickElement,
    checkAccessibility,
    checkAttribute,
    checkAttributeContains,
    checkContainsText,
    checkCookieExists,
    checkCookieValue,
    checkElementEnabled,
    checkElementExists,
    checkElementValue,
    checkElementVisible,
    checkHasFocus,
    checkIsChecked,
    checkIsEmpty,
    checkScreenshot,
    checkTitle,
    checkTitleContains,
    checkUrl,
    checkUrlContains,
    fileUpload,
    keyboardPress,
    openUrl,
    scrollToElement,
    waitForElement,
    waitFor,
    getElement,
    getElements,
    check,
    unCheck,
    clearField,
    select,
    type
}
