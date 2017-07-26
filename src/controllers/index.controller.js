const routes = require('../routes/routes.config')

module.exports = () => {
  const getIndex = (req, res, next) => {
    return res.redirect(routes.get('indexSwagger').path)
  }

  return {
    getIndex
  }
}
