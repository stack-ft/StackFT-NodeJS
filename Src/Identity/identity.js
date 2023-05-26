const Document = require('./document')

class Identity {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.document = new Document(this.axios);
    }
  }
  
  module.exports = Identity;