const Entity = require('./entity')
const Transactions = require('./transactions')
const Subscriptions = require('./subscriptions')
const Income = require('./income')

class Ledger {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.entity = new Entity(this.axios)
      this.transactions = new Transactions(this.axios)
      this.subscriptions = new Subscriptions(this.axios)
      this.income = new Income(this.axios)
    }
  }
  
  module.exports = Ledger;
