
const Utilities = require('./Src/Utilities/utilities')

class Stack {
  constructor({ apiKey, baseURL = 'https://api.stack-ft.com', version = 'v1' } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.version = version;
    this.axios = require('axios').create({
      baseURL: this.baseURL + `/${this.version}`,
      headers: {
        'Authorization': `${this.apiKey}`
      }
    });
    this.utilities = new Utilities(this.axios);
  }
}

module.exports = Stack;
