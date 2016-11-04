const HttpStatus = require('http-status-codes')

module.exports = (req, res, data) => {
  data = {
    total: data[0],
    items: data[1]
  }

  return res.status(HttpStatus.OK).json(data)
}
