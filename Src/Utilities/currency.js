class Currency {
    constructor(axiosInstance) {
        this.axios = axiosInstance;
    }

    //CONVERT AMOUNT FROM ONE CURRENCY TO ANOTHER
    async convert(jsonData) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.axios.post('/utilities/currency/convert', jsonData, {
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

module.exports = Currency;