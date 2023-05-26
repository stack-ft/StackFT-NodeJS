const Monitoring = require('./monitoring')
const Enrichment = require('./enrichment')

class Transactions {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.monitoring = new Monitoring(this.axios);
      this.enrichment = new Enrichment(this.axios);
    }
}

module.exports = Transactions;