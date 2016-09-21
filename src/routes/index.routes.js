module.exports = router => {
  router.get('/', (request, response) => {
    response.render('index', {
      title: 'Pulsar Technologies',
      year: new Date().getFullYear(),
      devs: 'Ivan Marquez / Kevin Rivera'
    })
  })
}
