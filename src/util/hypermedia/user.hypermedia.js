const routes = require('../../routes/routes.config')

module.exports = (user, baseUrl) => {
  // TODO: Business Logic
  user.links = [{
    href: `${baseUrl}${routes.get('getUsers').path}`,
    rel: 'collection',
    method: routes.get('getUsers').method
  }, {
    href: `${baseUrl}${routes.get('getUsers').path}/${user.email}`,
    rel: 'self',
    method: routes.get('getUsers').method
  }]

  return user
}
