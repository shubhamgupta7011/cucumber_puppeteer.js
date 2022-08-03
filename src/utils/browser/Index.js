
const browserConfig = require('./browser-config');
const apiConfig = require('./api-config');
const commands = require('./commands');

class Browser {
  apiConfig;
  browserConfig;

  constructor() {
    this.browserConfig = browserConfig;
    this.apiConfig = apiConfig;
  }

  /**
   * Use to attach files in dropdown
   * @param selector
   * @param path of the file
   * @param timeout for optional wait
   * @returns {this} for command chaining
   */
  browseFile = (selector,filePath, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT ) => {
    commands.waitForElement(selector,timeout)
    commands.fileUpload(selector,filePath)
    return this;
  }

  /**
   * wait for timeout
   * @param timeout for optional wait
   * @returns {this} for command chaining
   */
  clockWait = (timeout = this.browserConfig.DEFAULT_CLOCK_WAIT ) => {
    commands.waitFor(timeout);
    return this;
  }

  /**
   * Navigate to the url
   * @param {String} url
   * @returns {this} for command chaining
   */
  gotoUrl = (url = '', userAgent, device, second = this.browserConfig.PAGE_LOAD_TIMEOUT) => {
    commands.openUrl(url, userAgent, device, second);
  }

  /**
   * click the element
   * @param {string} selector of element to clicked
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  click = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    const options = { clickCount: 1 }
    commands.clickElement(selector,options,timeout);
    return this;
  }

  /**
   * get element list
   * @param {string} selector of element to clicked
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  getElements = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    return commands.getElements(selector,timeout);
  }

  /**
   * double click on the element
   * @param {string} selector of element to clicked
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  doubleClick = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    const options = { clickCount: 2 }
    commands.clickElement(selector,options,timeout);
    return this;
  }

  /**
   * right click on the element
   * @param {string} selector of element to clicked
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  rightClick = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    const options = { button: "right" }
    commands.clickElement(selector,options,timeout);
    return this;
  }

  /**
   * Check the Checkbox or Radio button
   * @param {string} selector
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  check = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    commands.check(selector, timeout)
    return this;
  }

  /**
   * Un-Check the Checkbox or Radio button
   * @param {string} selector
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  unCheck = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    commands.unCheck(selector, timeout)
    return this;
  }

  /**
   * To clear input field
   * @param {string} selector
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  clearField = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    commands.clearField(selector,timeout);
    return this;
  }

  /**
   * enter value to the input fields
   * @param {string} selector
   * @param {string} value
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  type = (selector, value, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    commands.type(selector, value, timeout);
    return this;
  }

  /**
   * enter value to the input fields
   * @param {any} key
   * @param {string} selector is optional
   * @param {number} timeout is optional
   * @returns {this} for command chaining
   */
  press = (key, selector = undefined, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    commands.keyboardPress(key, selector, timeout);
    return this;
  }

  /**
   * select option in selector 
   * @param {string} selector
   * @param {any} option
   * @param {number} timeout
   * @returns {this} for command chaining
   */
  select = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT,...fieldValue) => {
    commands.select(selector, timeout, ...fieldValue)
    return this;
  }

  /**
   * Check if element should be visible
   * @param {string} selector
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  shouldVisible = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    commands.checkElementVisible(selector,'Yes' ,timeout);
    return this;
  }

  /**
   * check element should not be visible
   * @param {string} selector
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  shouldNotVisible = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT) => {
    commands.checkElementVisible(selector,'No' ,timeout);
    return this;
  }

  /**
   * Check if element exists
   * @param {string} selector
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  shouldExists = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT)  => {
    commands.checkElementExists(selector,'Yes', timeout);
    return this;
  }

  /**
   * Check if element not exists
   * @param {string} selector
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  shouldNotExists = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT)  => {
    commands.checkElementExists(selector,'No',timeout);
    return this;
  }

  /**
   * checkbox should be checked
   * @param {string} selector
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  shouldChecked = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT)  => {
    commands.checkIsChecked(selector,'Yes',timeout)
    return this;
  }

  /**
   * checkbox should not be checked
   * @param {string} selector
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  shouldNotChecked = (selector, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT)  => {
    commands.checkIsChecked(selector,'No',timeout)
    return this;
  }

  /**
   * Check if element having text
   * @param {string} selector
   * @param {string} textValue
   * @param {number} timeout for optional wait
   * @returns {this} for command chaining
   */
  isHavingText = (selector, textValue, timeout = this.browserConfig.ELEMENT_TIMEOUT_SHORT)  => {
    commands.checkContainsText(selector,'Yes',textValue,timeout)
    return this;
  }

  /**
   * Check the title of the page
   * @param {string} title
   * @returns {this} for command chaining
   */
  isHavingTitle = (title)  => {
    commands.checkTitle(title);
    return this;
  }

  /**
   * Check endpoint in the current url
   * @param {string} endpoint
   * @returns {this} for command chaining
   */
  isHavingEndpointInCurrentURL = (endpoint)  => {
    commands.checkUrlContains('Yes', endpoint)
    return this;
  }

  /**
   * To delete the spacific data
   * @param {string} ulr
   * @param {object} request or payload
   * @param {object} require header
   * @returns {object} response
   */
  async deletePayload(url, request, header = this.apiConfig.HEADERS) {
    const axios = require('axios');
    return await axios.delete(url, {
      headers: header,
      data: request
    }).then((response)=>{
     return response.data
    });
  }

  /**
   * To delete the record 
   * @param {string} ulr
   * @param {object} require header
   * @returns {object} response
   */
  async delete(url, header = this.apiConfig.HEADERS) {
    const axios = require('axios');
    return await axios.delete(url, {
      headers: header
    }).then((response)=>{
     return response.data
    });
  }

  /**
   * To get the spacific data
   * @param {string} ulr
   * @param {object} require header
   * @returns {object} response
   */
  async get(url, header = this.apiConfig.HEADERS) {
    const axios = require('axios');
    return await axios.get(url, {
      headers: header
    }).then((response)=>{
     return response.data
    });
  }  

  /**
   * To insert the data
   * @param {string} ulr
   * @param {object} request or payload
   * @param {object} require header
   * @returns {object} response
  */
  async post(url, request, header = this.apiConfig.HEADERS) {
      const axios = require('axios');
      return await axios.post(url, {
        headers: header,
        data: request
      }).then((response)=>{
       return response.data
      });
  }

  /**
   * To insert or update the spacific data
   * @param {string} ulr
   * @param {object} request or payload
   * @param {object} require header
   * @returns {object} response
  */
  async put(url, request, header = this.apiConfig.HEADERS) {
      const axios = require('axios');
      return await axios.put(url, {
        headers: header,
      data: request
      }).then((response)=>{
       return response.data
      });
  } 
}

module.exports = Browser;