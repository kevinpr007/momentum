const HttpStatus = require('http-status-codes')

module.exports = () => {
  const index = (req, res) =>
    res.status(HttpStatus.OK).json({
      message: 'success'
    })

  return {
    index
  }
}
