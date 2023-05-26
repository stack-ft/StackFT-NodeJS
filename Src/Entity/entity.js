const Individual = require('./individual')

class Entity {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.individual = new Individual(this.axios)
    }
  }
  
  module.exports = Entity;
