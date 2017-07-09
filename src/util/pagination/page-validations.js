const HttpStatus = require('http-status-codes')
/**
 * TODO:
 * change to middleware
 */
module.exports = (page, pageSize) => {
  if (page === undefined || isNaN(page)) {
    const err = new Error('You must provide a page number')
    err.status = HttpStatus.INTERNAL_SERVER_ERROR
    throw err
  }

  if (pageSize === undefined || isNaN(pageSize)) {
    const err = new Error('Page size must be a number')
    err.status = HttpStatus.INTERNAL_SERVER_ERROR
    throw err
  }
}
