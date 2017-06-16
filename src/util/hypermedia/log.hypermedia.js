const routes = require('../../routes/routes.config')

module.exports = (log, baseUrl) => {
  log.links = [{
    href: `${baseUrl}${routes.get('getLogs').path}`,
    rel: 'collection',
    method: routes.get('getLogs').method
  }, {
    href: `${baseUrl}${routes.get('getLogs').path}/${log.code}`,
    rel: 'code-filter',
    method: routes.get('getByLogCode').method
  },
  {
    href: `${baseUrl}${routes.get('getLogs').path}/${log.code}`,
    rel: 'status-filter',
    method: routes.get('getByLogStatus').method
  }]

  return log
}
