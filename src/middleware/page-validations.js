const HttpStatus = require('http-status-codes')
const config = require('../config/config')
const util = require('../util/util.helpers')

module.exports = (req, res, next) => {
  req.query.page = parseInt(req.query.page || 0)
  req.query.pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

  if (req.query.page === undefined || isNaN(req.query.page)) {
    let message = 'You must provide a page number'
    return util.generateError(message, HttpStatus.BAD_REQUEST)
  }

  if (req.query.pageSize === undefined || isNaN(req.query.pageSize)) {
    let message = 'Page size must be a number'
    return util.generateError(message, HttpStatus.BAD_REQUEST)
  }

  next()
}
