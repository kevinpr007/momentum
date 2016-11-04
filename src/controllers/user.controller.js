const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/paged-result')
const config = require('../config/config')().getVariable()

let userController = userService => {
  let getAllUsers = (req, res, next) => {
    let page = req.query.page || 0
    let pageSize = req.query.pageSize || parseInt(config.PAGE_SIZE)
    userService.getAll(page, pageSize).then(result => {
      let data = pagedResult(page, pageSize, result)
      return res.status(HttpStatus.OK).json(data)
    }).catch(next)
  }

  let getByUserEmail = (req, res, next) => {
    userService.getByEmail(req.params.userName).then(user => {
      if (!user) {
        let err = new Error('User not found.')
        err.status = HttpStatus.NOT_FOUND
        throw err
      }
      res.status(HttpStatus.OK).json(user)
    }).catch(next)
  }

  return {
    getAllUsers: getAllUsers,
    getByUserEmail: getByUserEmail
  }
}

module.exports = userController
