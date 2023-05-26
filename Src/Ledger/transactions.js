class LedgerTransactions {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }

    //CREATE A NEW LEDGER ENTRY
    async create(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/ledger/transaction', jsonData, {
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

    //CREATE A NEW BATCH LEDGER ENTRY
    async batch(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/ledger/transaction/batch', jsonData, {
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
            const response = await this.axios.get(`/ledger/transaction?entity_id=${id}&page=${page}`, {
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

module.exports = LedgerTransactions;