class Stock {
    constructor(axiosInstance) {
        this.axios = axiosInstance;
    }

    //GET REALTIME STOCK PRICING
    async realtimePricing(jsonData) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.axios.post('/utilities/stock/realtime-pricing', jsonData, {
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
    
    //GET LIST OF STOCK SYMBOLS
    async symbols() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.axios.get('/utilities/stock/symbols', {
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

module.exports = Stock;