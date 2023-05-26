
class Web3Wallet {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }

    //CREATE A WEB3 WALLET WITH A SUPPORTED CHAIN
    async create(CHAIN) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post(`/web3/wallet/${CHAIN}`, {
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

module.exports = Web3Wallet;