const routes = require('../../routes/routes.config')
const slugify = require('slugify')

module.exports = (log, baseUrl) => {
  // TODO: Business Logic
  return log.links = [{
    href: `${baseUrl}${routes.get('getLogs').path}`,
    rel: 'collection',
    method: routes.get('getLogs').method
  }, {
    href: `${baseUrl}${routes.get('getLogs').path}/${log.code}`,
    rel: 'code-filter',
    method: routes.get('getByLogCode').method
  },
  {
    href: `${baseUrl}${routes.get('getLogs').path}/${slugify(log.status || '')}`,
    rel: 'status-filter',
    method: routes.get('getByLogStatus').method
  }]
}
