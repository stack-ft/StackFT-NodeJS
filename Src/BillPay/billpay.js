const Phone = require('./phone')

class Billpay {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.phone = new Phone(this.axios);
    }
}

module.exports = Billpay;