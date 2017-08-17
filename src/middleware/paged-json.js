/**
 * @pagedResult: It is required that the result parameter contains the total count
 * of records at index 0 and the array of items at index 1.
 */
module.exports = (req, res, next) => {
  const regex = /(\?(page)=(\d+))/gi
  const host = `${req.protocol}://${req.headers.host}`
  const url = `${req.originalUrl.replace(regex, '')}`

  res.pagedJson = ([totalCount, data]) => {
    const totalPages = parseInt((totalCount / req.query.pageSize).toFixed())

    return res.json({
      data,
      totalCount,
      totalPages,
      prevPage: req.query.page >= 1
        ? `${host}${url}?page=${parseInt(req.query.page - 1)}` : null,
      nextPage: req.query.page < totalPages
        ? `${host}${url}?page=${parseInt(req.query.page + 1)}` : null
    })
  }

  next()
}
