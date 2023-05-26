class LedgerSubscriptions {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }

    //GET ALL SUBSCRIPTIONS FOR AN ENTITY
    async get(id) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.get(`/ledger/subscriptions?entity_id=${id}`, {
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

module.exports = LedgerSubscriptions;