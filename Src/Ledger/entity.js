
class LedgerEntity {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }

    //LINK AN EXISTING ENTITY TO THE LEDGER SERVICE
    async link(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/ledger/entity', jsonData, {
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

module.exports = LedgerEntity;