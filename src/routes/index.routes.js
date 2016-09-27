module.exports = (router) => {
  router.get('/', (req, res) => {
    res.render('index', router.templateModel)
  })
}
