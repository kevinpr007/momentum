const Hypermedia = require('../util/hypermedia/hypermedia.config')
const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/pagination/paged-result')
const getPageValidations = require('../util/pagination/page-validations')
const config = require('../config/config')

module.exports = userService => {
  const getAllUsers = (req, res, next) => {
    const page = parseInt(req.query.page || 0)
    const pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    getPageValidations(page, pageSize)

    userService.getAll(page, pageSize).then(users => {
      users = pagedResult(req, page, pageSize, users)
      res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(users, next))
    }).catch(next)
  }

  const getByUserEmail = (req, res, next) => {
    userService.getByEmail(req.params.userName).then(user => {
      if (!user) {
        const err = new Error('User not found.')
        err.status = HttpStatus.NOT_FOUND
        throw err
      }
      res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(user, next))
    }).catch(next)
  }

  return {
    getAllUsers,
    getByUserEmail
  }
}
