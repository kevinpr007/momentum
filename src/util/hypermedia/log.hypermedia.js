const routes = require('../../routes/routes.config')

module.exports = (entity, baseUrl) => {
  let regex = /\/:\w+/ // TODO: Remove after routes are standardized.
  // TODO: Business Logic
  return entity.links = [{
    href: `${baseUrl}${routes.get('getLogs').path}`,
    rel: 'self',
    method: routes.get('getLogs').method
  },
  {
    href: `${baseUrl}${routes.get('getByLogCode').path}`.replace(regex, `/${entity.code}`),
    rel: 'self',
    method: routes.get('getByLogCode').method
  },
  {
    href: `${baseUrl}${routes.get('getByLogStatus').path}`.replace(regex, `/${entity.status}`),
    rel: 'self',
    method: routes.get('getByLogStatus').method
  }]
}
