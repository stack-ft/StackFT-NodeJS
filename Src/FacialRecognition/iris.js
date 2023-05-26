class Iris {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }

    //CREATE A NEW IRIS PROFILE
    async profile({face}) {
        return new Promise(async (resolve, reject) => {
        try {
            var form = new FormData();
            if (face){
                form.append('face', fs.createReadStream(face));
            }

            const response = await this.axios.post(`/face/iris/profile`, form, {
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

    //AUTHENTICATE AGAINST AN EXISTING IRIS PROFILE
    async auth({face, profile_id}) {
        return new Promise(async (resolve, reject) => {
        try {
            var form = new FormData();
            if (face){
                form.append('face', fs.createReadStream(face));
            }

            const response = await this.axios.post(`/face/iris/auth?profile_id=${profile_id}`, form, {
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

module.exports = Iris;