class Atm {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }

    //GET THE LOCATION OF ALLPOINT ATM IN A GIVEN LOCATION
    async allpoint(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/utilities/atm/allpoint', jsonData, {
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

    //GET THE LOCATION OF MONEYPASS ATM IN A GIVEN LOCATION
    async moneypass(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/utilities/atm/moneypass', jsonData, {
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

    //GET THE LOCATION OF DIFFERENT ATM IN A GIVEN LOCATION
    async general(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/utilities/atm/general', jsonData, {
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

module.exports = Atm;