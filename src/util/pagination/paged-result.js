let config = require('../../config/config')()
const TOTAL_COUNT_FIELD = 0
const DATA_FIELD = 1

/**
 * @pagedResult: It is required that the result parameter contains the total count
 * of records at index 0 and the array of items at index 1.
 */
module.exports = (page = 0, pageSize = parseInt(config.PAGE_SIZE), data) => {
  let totalPages = parseInt((data[TOTAL_COUNT_FIELD] / pageSize).toFixed())
  return {
    totalPages: totalPages,
    totalCount: data[TOTAL_COUNT_FIELD],
    data: data[DATA_FIELD],
    prevPage: page > 1 ? page - 1 : null,
    nextPage: page < totalPages ? parseInt(page) + 1 : null
  }
}
