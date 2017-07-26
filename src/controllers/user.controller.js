const Hypermedia = require('../util/hypermedia/hypermedia.config')
const pagedResult = require('../util/pagination/paged-result')
const HttpStatus = require('http-status-codes')

module.exports = userService => {
  const getAllUsers = (req, res, next) =>
    userService.getAll(req.query.page, req.query.pageSize).then(users => {
      users = pagedResult(req, users)
      return res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(users, next))
    }).catch(next)

  const getByUserEmail = (req, res, next) =>
    userService.getByEmail(req.params.userName).then(user => {
      if (!user) {
        const err = new Error('User not found.')
        err.status = HttpStatus.NOT_FOUND
        throw err
      }
      return res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(user, next))
    }).catch(next)

  return {
    getAllUsers,
    getByUserEmail
  }
}
