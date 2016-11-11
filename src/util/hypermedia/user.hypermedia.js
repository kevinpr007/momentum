const routes = require('../../routes/routes.config')

module.exports = (entity, baseUrl) => {
  // TODO: Business Logic
  return entity.links = [{
    href: `${baseUrl}${routes.get('getUsers').path}/${entity.email}`,
    rel: 'self',
    method: routes.get('getUsers').method
  }]
}
