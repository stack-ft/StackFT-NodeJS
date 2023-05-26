
class Giftcard {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }

    //GET A GIFTCARD CATALOG
    async catalog() {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.get(`/rewards/catalog`, {
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

    //ORDER A GIFTCARD
    async order(jsonData) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post('/rewards/order', jsonData, {
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

module.exports = Giftcard;