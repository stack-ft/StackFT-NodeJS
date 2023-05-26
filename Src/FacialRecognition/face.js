const Iris = require('./iris')

class Face {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.iris = new Iris(this.axios);
    }

    //DETERMINE LIVENESS OF A SELFIE
    async liveness({face}) {
        return new Promise(async (resolve, reject) => {
        try {
            var form = new FormData();
            if (face){
                form.append('face', fs.createReadStream(face));
            }

            const response = await this.axios.post(`/face/liveness`, form, {
                headers: form.getHeaders()
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

module.exports = Face;