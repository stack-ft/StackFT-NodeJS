const Atm = require('./atm')

class Utilities {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.atm = new Atm(this.axios);
    }
}

module.exports = Utilities;