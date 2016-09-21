module.exports = router => {
  router.get('/', (request, response) => {
    response.render('index', {
      title: 'Style Point',
      year: new Date().getFullYear()
    })
  })
}
