const HttpStatus = require('http-status-codes')

module.exports = () => {
  /**
   * TODO:
   * return swagger main page once implemented.
   */
  const index = (req, res, next) =>
    res.status(HttpStatus.OK).json({
      message: 'success'
    })

  return {
    index
  }
}

module.exports = indexController
