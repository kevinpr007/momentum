const HttpStatus = require('http-status-codes')
const config = require('../config/config')

module.exports = (req, res, next) => {
  const page = parseInt(req.query.page || 0)
  const pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

  if (page === undefined || isNaN(page)) {
    const err = new Error('You must provide a page number')
    err.status = HttpStatus.INTERNAL_SERVER_ERROR
    next(err)
  }

  if (pageSize === undefined || isNaN(pageSize)) {
    const err = new Error('Page size must be a number')
    err.status = HttpStatus.INTERNAL_SERVER_ERROR
    next(err)
  }

  req.query.page = page
  req.query.pageSize = pageSize

  next()
}
