const Giftcard = require('./giftcard')

class Rewards {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.giftcard = new Giftcard(this.axios);
    }
}

module.exports = Rewards;