const Hypermedia = require('../util/hypermedia/hypermedia.config')
const pagedResult = require('../util/pagination/paged-result')
const HttpStatus = require('http-status-codes')
const routes = require('../routes/routes.config')

module.exports = () => {
  const getIndex = (req, res, next) => {
    return res.redirect(routes.get('indexSwagger').path)
  }

  return {
    getIndex
  }
}
