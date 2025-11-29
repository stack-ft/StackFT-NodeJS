const Atm = require('./atm')
const Banking = require('./banking')
const Currency = require('./currency')
const Stock = require('./stock')

class Utilities {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.atm = new Atm(this.axios);
      this.banking = new Banking(this.axios);
      this.currency = new Currency(this.axios);
      this.stock = new Stock(this.axios);
    }
}

module.exports = Utilities;