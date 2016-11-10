module.exports = (entity, baseUrl, routes, regex) => {
    return entity.links = [{
      href: `${baseUrl}${routes.get('getUsers').path}/${entity.email}`,
      rel: 'self',
      method: routes.get('getUsers').method
    }]
}