class Monitoring {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }

    //LINK AN EXISTING ENTITY TO THE TRANSACTION MONITORING SERVICE
    async link(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/transactions/monitor/entity', jsonData, {
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

    //REPORT A TRANSACTION TO THE TRANSACTION MONITORING SERVICE
    async report(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/transactions/monitor/report', jsonData, {
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

module.exports = Monitoring;