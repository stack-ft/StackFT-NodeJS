class Individual {
    constructor(axiosInstance) {
      this.axios = axiosInstance;
    }
  
    //CREATE A NEW ENTITY
    async create(jsonData) {
      return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.post('/entities/individual', jsonData, {
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

    //GET AN EXISTING ENTITY
    async get(id) {
      return new Promise(async (resolve, reject) => {
      try {
        const response = await this.axios.get(`/entities/individual?entity_id=${id}`, {
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

    //UPDATE AN EXISTING ENTITY
    async update(jsonData, id) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.put(`/entities/individual?entity_id=${id}`, jsonData, {
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

    //VERIFY AN EXISTING ENTITY
    async verify(id) {
        return new Promise(async (resolve, reject) => {
        try {
            const response = await this.axios.post(`/entities/individual/verify?entity_id=${id}`, jsonData, {
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

  module.exports = Individual;