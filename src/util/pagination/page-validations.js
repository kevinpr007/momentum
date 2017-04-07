const HttpStatus = require('http-status-codes')
// @TODO: Change to middleware.
module.exports = (page, pageSize) => {
  if (page === undefined || isNaN(page)) {
    let err = new Error('You must provide a page number')
    err.status = HttpStatus.INTERNAL_SERVER_ERROR
    throw err
  }

  if (pageSize === undefined || isNaN(pageSize)) {
    let err = new Error('Page size must be a number')
    err.status = HttpStatus.INTERNAL_SERVER_ERROR
    throw err
  }
}
