const Hypermedia = require('../util/hypermedia/hypermedia.config')
const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/pagination/paged-result')
const getPageValidations = require('../util/pagination/page-validations')
const config = require('../config/config')()

let userController = userService => {

  /**
  * @api {get} /users?page={page}&pageSize={pageSize} Get all users
  * @apiVersion 0.0.1
  * @apiName getAllUsers
  * @apiGroup User
  *
  * @apiParam {Number} page Optional page number. Default value: 0
  * @apiParam {Number} pageSize Optional page size. Default value: 10
  *
  * @apiSuccess {String} firstName User's first name.
  * @apiSuccess {String} lastName  User's last name.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "firstname": "John",
  *       "lastname": "Doe"
  *     }
  *
  * @apiError NotFound User not found.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "error": "User not found"
  *     }
  **/
  let getAllUsers = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    getPageValidations(page, pageSize)

    userService.getAll(page, pageSize).then(users => {
      users = pagedResult(req, page, pageSize, users)
      res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(users, next))
    }).catch(next)
  }

  /**
  * @api {get} /users/:email Get user information
  * @apiVersion 0.0.1
  * @apiName getByUserEmail
  * @apiGroup User
  *
  * @apiParam {String} email User's email.
  *
  * @apiSuccess {String} firstName User's first name.
  * @apiSuccess {String} lastName  User's last name.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "firstname": "John",
  *       "lastname": "Doe"
  *     }
  *
  * @apiError NotFound User not found.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "error": "User not found"
  *     }
  **/
  let getByUserEmail = (req, res, next) => {
    userService.getByEmail(req.params.userName).then(user => {
      if (!user) {
        let err = new Error('User not found.')
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

module.exports = userController
