const api = require('./../config/axios')

class WebService {
  async getMovie () {
    try {
      await api.get('/movie/2?api_key=' + process.env.AUTHORIZATION_KEY).then(function (response) {
        console.log(response)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports = new WebService()
