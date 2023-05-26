const Entity = require('./Src/Entity/entity');
const Ledger = require('./Src/Ledger/ledger')
const Identity = require('./Src/Identity/identity')
const Utilities = require('./Src/Utilities/utilities')
const Rewards = require('./Src/Rewards/rewards')
const Bill = require('./Src/BillPay/billpay')
const Face = require('./Src/FacialRecognition/face')
const Transactions = require('./Src/Transactions/transactions')
const Web3 = require('./Src/web3/web3')


class Stack {
    constructor({ apiKey, baseURL = 'https://api.stack-ft.com' }) {
      this.apiKey = apiKey;
      this.baseURL = baseURL;
      this.axios = require('axios').create({
        baseURL: this.baseURL,
        headers: {
          'Authorization': `${this.apiKey}`
        }
      });
      this.entity = new Entity(this.axios);
      this.ledger = new Ledger(this.axios);
      this.identity = new Identity(this.axios);
      this.utilities = new Utilities(this.axios);
      this.rewards = new Rewards(this.axios);
      this.bill = new Bill(this.axios);
      this.face = new Face(this.axios);
      this.transactions = new Transactions(this.axios);
      this.web3 = new Web3(this.axios);
    }
  }
  
  module.exports = Stack;
  