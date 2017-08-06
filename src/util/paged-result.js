const TOTAL_COUNT_FIELD = 0
const DATA_FIELD = 1

/**
 * @pagedResult: It is required that the result parameter contains the total count
 * of records at index 0 and the array of items at index 1.
 */
module.exports = (req, data) => {
  const REGEX = /(\?(page)=(\d+))/gi
  const host = `${req.protocol}://${req.headers.host}`
  const url = `${req.originalUrl.replace(REGEX, '')}`

  const totalPages = parseInt((data[TOTAL_COUNT_FIELD] / req.query.pageSize).toFixed())

  return {
    totalPages: totalPages,
    totalCount: data[TOTAL_COUNT_FIELD],
    data: data[DATA_FIELD],
    prevPage: req.query.page >= 1
      ? `${host}${url}?page=${parseInt(req.query.page - 1)}` : null,
    nextPage: req.query.page < totalPages
      ? `${host}${url}?page=${parseInt(req.query.page + 1)}` : null
  }
}
