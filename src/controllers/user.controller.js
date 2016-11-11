const Hypermedia = require('../util/hypermedia/hypermedia.config')
const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/pagination/paged-result')
const pagValidations = require('../util/pagination/validations')
const config = require('../config/config')()

let userController = userService => {
  let getAllUsers = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    pagValidations(page, pageSize).getValidation()

    userService.getAll(page, pageSize).then(users => {
      users = pagedResult(page, pageSize, users)
      let model = users.data[0].constructor.modelName
      res.status(HttpStatus.OK).json(new Hypermedia(req, model).setResponse(users, next))
    }).catch(next)
  }

  let getByUserEmail = (req, res, next) => {
    userService.getByEmail(req.params.userName).then(user => {
      if (!user) {
        let err = new Error('User not found.')
        err.status = HttpStatus.NOT_FOUND
        throw err
      }
      let model = user.constructor.modelName
      res.status(HttpStatus.OK).json(new Hypermedia(req, model).setResponse(user, next))
    }).catch(next)
  }

  return {
    getAllUsers: getAllUsers,
    getByUserEmail: getByUserEmail
  }
}

module.exports = userController
