let config = require('../config/config')()
config.setVariable(process.env.NODE_ENV)
config = config.getVariable()

/**
 * @pagedResult: It is required that the result parameter contains the total count
 * of records at index 0 and the array of items at index 1.
 */
module.exports = (page = 0, pageSize = parseInt(config.PAGE_SIZE), data) => {
  let totalPages = parseInt((data[0] / pageSize).toFixed())
  return {
    totalPages: totalPages,
    totalCount: data[0],
    data: data[1],
    prevPage: page > 1 ? page - 1 : '',
    nextPage: page < totalPages ? parseInt(page) + 1 : ''
  }
}
