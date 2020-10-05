const WebService = require('./../services/api')

class ControllerMovie {
  async getIdMovie () {
    await WebService.getMovie()
  }
}
module.exports = new ControllerMovie()
