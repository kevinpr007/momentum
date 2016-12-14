let indexController = (templateModel) => {
  let index = (req, res, next) => {
    res.render('index', templateModel)
  }

  return {
    index
  }
}

module.exports = indexController
