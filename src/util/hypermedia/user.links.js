module.exports = (entity, baseUrl, routes, regex) => {
  // TODO: Business Logic
  return entity.links = [{
    href: `${baseUrl}${routes.get('getUsers').path}/${entity.email}`,
    rel: 'self',
    method: routes.get('getUsers').method
  }]
}
