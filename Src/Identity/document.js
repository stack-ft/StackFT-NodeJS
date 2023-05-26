const FormData = require('form-data');
const fs = require('fs');


class IdentityDocument {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }

    //VERIFY A NEW DOCUMENT
    async verify({face, front, back, document_type, return_image = false}) {
        return new Promise(async (resolve, reject) => {
        try {
            var form = new FormData();
            if (face){
                form.append('face', fs.createReadStream(face));
            }
            if (front){
                form.append('front', fs.createReadStream(front));
            }
            if (back){
                form.append('back', fs.createReadStream(back));
            }

            const response = await this.axios.post(`/identity/document?document_type=${document_type}&return_image=${return_image}`, form, {
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

module.exports = IdentityDocument;