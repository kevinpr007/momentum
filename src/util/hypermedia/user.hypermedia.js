const _ = require('lodash')

let setHypermedia = (req, user) => {
  user.links = []
  user.links.push({
    href: (() => {
      req.originalUrl = req.originalUrl.replace(user.email, '')
      return `${req.protocol}://${req.headers.host}${req.originalUrl}${user.email}`
    })(),
    rel: 'self',
    method: 'GET'
  })
  return user
}

module.exports = (req, res, next) => {
  try {
    if ('data' in res.body) {
      res.body.data = _.each(res.body.data, elem => setHypermedia(req, elem._doc))
    } else {
      res.body = setHypermedia(req, res.body._doc)
    }
    res.json(res.body)
  } catch (err) {
    next(err)
  }
}
