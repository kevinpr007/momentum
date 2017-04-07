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
  * @apiSuccess {Number} totalPages Total amount of pages.
  * @apiSuccess {Number} totalCount  Total amount of records.
  * @apiSuccess {Link} prevPage Link to navigate to collection's previous page.
  * @apiSuccess {Link} nextPage Link to navigate to collection's next page.
  * @apiSuccess {Array} data Array of user objects with hypermedia links.
  * @apiSuccess {Array} links Available hypermedia links for a specific resource.
  * @apiSuccess {Guid} _id User's document id.
  * @apiSuccess {String} firstName User's first name.
  * @apiSuccess {String} lastName User's last name.
  * @apiSuccess {String} email User's email address.
  * @apiSuccess {Number} phone User's phone number.
  * @apiSuccess {String} fullName User's full name.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "totalPages": 2,
  *       "totalCount": 20,
  *       "data": [
  *         {
  *           "links": [
  *             {
  *               "method": "GET",
  *               "rel": "self",
  *               "href": "http://localhost:8080/api/users/amparoanderson@glukgluk.com"
  *             }
  *           ],
  *           "_id": "58532b7e459e871cf01cacee",
  *           "firstName": "Amparo",
  *           "lastName": "Anderson",
  *           "email": "amparoanderson@glukgluk.com",
  *           "phone": 1007841724,
  *           "fullName": "Amparo Anderson"
  *         },
  *         ...
  *       ],
  *       "prevPage": null,
  *       "nextPage": "http://localhost:8080/api/users?page=2"
  *     }
  *
  * @apiError UNAUTHORIZED_TOKEN Unauthorized request (not authenticated or invalid token provided).
  * @apiErrorExample UNAUTHORIZED_TOKEN:
  *     HTTP/1.1 401 Unauthorized
  *     {
  *       "message": "Unauthorized",
  *       "error": {
  *         "status": 401
  *       }
  *     }
  *
  * @apiError UNAUTHORIZED_ROLE User doesn't have the required role(s).
  * @apiErrorExample UNAUTHORIZED_ROLE:
  *     HTTP/1.1 401 Unauthorized
  *     {
  *       "message": "Your user does not have the required role(s) to execute this action.",
  *       "error": {
  *         "status": 401
  *       }
  *     }
  *
  * @apiError INVALID_PAGE_NUMBER Invalid page number provided.
  * @apiErrorExample INVALID_PAGE_NUMBER:
  *     HTTP/1.1 500 Internal Server Error
  *     {
  *       "message": "You must provide a page number.",
  *       "error": {
  *         "status": 500
  *       }
  *     }
  *
  * @apiError INVALID_PAGE_SIZE Invalid page size provided.
  * @apiErrorExample INVALID_PAGE_SIZE:
  *     HTTP/1.1 500 Internal Server Error
  *     {
  *       "message": "Page size must be a number.",
  *       "error": {
  *         "status": 500
  *       }
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
  * @apiSuccess {Array} links Available hypermedia links for a specific resource.
  * @apiSuccess {Guid} _id User's document id.
  * @apiSuccess {String} firstName User's first name.
  * @apiSuccess {String} lastName User's last name.
  * @apiSuccess {String} email User's email address.
  * @apiSuccess {Array} role User's role(s).
  * @apiSuccess {Number} phone User's phone number.
  * @apiSuccess {Number} __v Document's version.
  * @apiSuccess {Date} createdOn Document's created date.
  * @apiSuccess {String} fullName User's full name.
  * @apiSuccess {Object} address user's address object.
  * @apiSuccess {String} address1 User's address line 1.
  * @apiSuccess {String} address2 User's address line 2.
  * @apiSuccess {String} address1 User's address line 1.
  * @apiSuccess {String} city User's city address.
  * @apiSuccess {String} state User's state address.
  * @apiSuccess {String} zipCode User's zip code.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "links": [
  *         {
  *           "method": "GET",
  *           "rel": "self",
  *           "href": "http://localhost:8080/api/users/ivan.marquez@mailinator.com"
  *         }
  *       ],
  *       "_id": "58532b9890969d1c52c66c36",
  *       "email": "ivan.marquez@mailinator.com",
  *       "roles": "Admin",
  *       "firstName": "Ivan",
  *       "lastName": "Marquez",
  *       "phone": 1007841724,
  *       "__v": 0,
  *       "createdOn": "2016-12-15T23:47:36.000Z",
  *       "address": {
  *         "address1": "Street 1",
  *         "address2": "Street 2",
  *         "city": "San Juan",
  *         "state": "P.R.",
  *         "zipCode": "00123-2222"
  *       },
  *       "fullName": "Ivan Marquez"
  *     }
  *
  * @apiError UNAUTHORIZED_TOKEN Unauthorized request (not authenticated or invalid token provided).
  * @apiErrorExample UNAUTHORIZED_TOKEN:
  *     HTTP/1.1 401 Unauthorized
  *     {
  *       "message": "Unauthorized",
  *       "error": {
  *         "status": 401
  *       }
  *     }
  *
  * @apiError UNAUTHORIZED_ROLE User doesn't have the required role(s).
  * @apiErrorExample UNAUTHORIZED_ROLE:
  *     HTTP/1.1 401 Unauthorized
  *     {
  *       "message": "Your user does not have the required role(s) to execute this action.",
  *       "error": {
  *         "status": 401
  *       }
  *     }
  *
  * @apiError NOT_FOUND User not found.
  * @apiErrorExample NOT_FOUND:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "message": "User not found.",
  *       "error": {
  *         "status": 404
  *       }
  *     }
  **/
  router.get(routes.get('getByUserEmail').path, authenticate,
    authorize(['Admin']), userController.getByUserEmail)
}
