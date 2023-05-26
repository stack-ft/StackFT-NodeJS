
const Wallet = require('./wallet')

class Web3 {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.wallet = new Wallet(this.axios);
    }
}

module.exports = Web3;