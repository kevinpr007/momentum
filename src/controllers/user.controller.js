const hypermedia = require('../util/hypermedia/hypermedia.config')()
const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/paged-result')
const config = require('../config/config')()

let userController = userService => {
  let getAllUsers = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    if (page == undefined || isNaN(page)) {
      let err = new Error('You must provide a page number')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR
      throw err
    }

    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)
    if (pageSize == undefined || isNaN(pageSize)) {
      let err = new Error('Page size must be a number')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR
      throw err
    }

    userService.getAll(page, pageSize).then(users => {
      users = pagedResult(page, pageSize, users)      
      res.status(HttpStatus.OK).json(hypermedia.setResponse(req, users, next))
    }).catch(next)
  }

  let getByUserEmail = (req, res, next) => {
    userService.getByEmail(req.params.userName).then(user => {
      if (!user) {
        let err = new Error('User not found.')
        err.status = HttpStatus.NOT_FOUND
        throw err
      }      
      res.status(HttpStatus.OK).json(hypermedia.setResponse(req, user, next))
    }).catch(next)
  }

  return {
    getAllUsers: getAllUsers,
    getByUserEmail: getByUserEmail
  }
}

module.exports = userController
