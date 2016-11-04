const HttpStatus = require('http-status-codes')

module.exports = (req, res, next) => {
  try {
    let totalPages = res.data[0]
    let totalCount = res.data[1]
    let data = res.data[2]
    let page = res.data[3]

    return res.status(HttpStatus.OK).json({
      totalPages: totalPages,
      totalCount: totalCount,
      data: data,
      prevPage: page > 1 ? page - 1 : '',
      nextPage: page < totalPages ? parseInt(page) + 1 : ''
    })
  }
  catch (err) {
    next(err)
  }
}
