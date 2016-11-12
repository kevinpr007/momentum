const routes = require('../../routes/routes.config')

module.exports = (entity, baseUrl) => {
  // TODO: Business Logic
  return entity.links = [{
    href: `${baseUrl}${routes.get('getLogs').path}`,
    rel: 'collection',
    method: routes.get('getLogs').method
  }, {
    href: `${baseUrl}${routes.get('getLogs').path}/${entity.code}`,
    rel: 'code-filter',
    method: routes.get('getByLogCode').method
  },
  {
    href: `${baseUrl}${routes.get('getLogs').path}/${entity.status}`,
    rel: 'status-filter',
    method: routes.get('getByLogStatus').method
  }]
}
