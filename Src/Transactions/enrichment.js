const Entity = require('./entity')
const Subscriptions = require('./subscriptions')
const Income = require('./income')

class Enrichment {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.entity = new Entity(this.axios)
      this.subscriptions = new Subscriptions(this.axios)
      this.income = new Income(this.axios)
    }

        //ENRICH A TRANSACTION
        async enrich(jsonData) {
            return new Promise(async (resolve, reject) => {
            try {
                const response = await this.axios.post('/transactions/enrichment/enrich', jsonData, {
                    headers: { 'Content-Type': 'application/json' }
                });
                if (response.status == 200 || response.status == 201) {
                resolve(response.data)
                } else {
                reject(response.data)
                }
            } catch (error) {
                reject(error)
            }
            })
        }
    
        //ENRICH A BATCH TRANSACTION
        async batch(jsonData) {
            return new Promise(async (resolve, reject) => {
            try {
                const response = await this.axios.post('/transactions/enrichment/enrich/batch', jsonData, {
                    headers: { 'Content-Type': 'application/json' }
                });
                if (response.status == 200 || response.status == 201) {
                resolve(response.data)
                } else {
                reject(response.data)
                }
            } catch (error) {
                reject(error)
            }
            })
        }
    
        //GET ALL LEDGER ENTRIES FOR AN ENTITY
        async get(id, page = 0) {
            return new Promise(async (resolve, reject) => {
            try {
                const response = await this.axios.get(`/transactions/enrichment/entity/transactions?entity_id=${id}&page=${page}`, {
                    headers: { 'Content-Type': 'application/json' }
                });
                if (response.status == 200 || response.status == 201) {
                resolve(response.data)
                } else {
                reject(response.data)
                }
            } catch (error) {
                reject(error)
            }
            })
        }
  }
  
  module.exports = Enrichment;
