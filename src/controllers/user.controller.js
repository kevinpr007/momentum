const HttpStatus = require('http-status-codes')
const config = require('../config/config')().getVariable()

let userController = userService => {
  let getAllUsers = (req, res, next) => {
    userService.getAll(req.query.page).then(result => {
      result.unshift(Math.ceil(result[0] / req.query.pageSize || parseInt(config.PAGE_SIZE)))
      result.push(req.query.page || 0)
      res.data = result
      next()
    }).catch(next)
  }

  let getByUserEmail = (req, res, next) => {
    userService.getByEmail(req.params.userName)
        .then(user => {
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
