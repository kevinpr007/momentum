const HttpStatus = require('http-status-codes')

let indexController = () => {
  /**
   * TODO:
   * return swagger main page once implemented.
   */
  let index = (req, res, next) =>
    res.status(HttpStatus.OK).json({
      message: 'success'
    })

  return {
    index
  }
}

module.exports = indexController
