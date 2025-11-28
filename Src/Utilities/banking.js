class Banking {
    constructor(axiosInstance) {
        this.axios = axiosInstance;
    }

    //PERFORM BANK LOOKUP USING ROUTING NUMBER
    async bankLookup(jsonData) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.axios.post('/utilities/banking/bank-lookup', jsonData, {
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

module.exports = Banking;