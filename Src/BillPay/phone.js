class PhoneBill{
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }

    //SEE IF A PHONE NETWORK IS SUPPORTED
    async network(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/bill/phone/network', jsonData, {
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

    //PAY A PHONE BILL
    async pay(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/bill/phone/pay', jsonData, {
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

module.exports = PhoneBill;