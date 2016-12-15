const userService = require('../services/user.service')()
const userController = require('../controllers/user.controller')(userService)
const authenticate = require('passport').authenticate('jwt', {session: false})
const authorize = require('../services/auth.service')().authorize
const routes = require('./routes.config')

module.exports = router => {
  /**
  * @api {get} /users?page={page}&pageSize={pageSize} Get all users
  * @apiVersion 0.0.1
  * @apiName getAllUsers
  * @apiGroup Users
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
  router.get(routes.get('getUsers').path, authenticate,
    authorize(['Admin']), userController.getAllUsers)

  /**
  * @api {get} /users/:email Get user by email
  * @apiVersion 0.0.1
  * @apiName getByUserEmail
  * @apiGroup Users
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
  router.get(routes.get('getByUserEmail').path, authenticate,
    authorize(['Admin']), userController.getByUserEmail)
}
