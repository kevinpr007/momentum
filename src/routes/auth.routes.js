const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()
const emailService = require('../services/email.service')
const routes = require('./routes.config')

module.exports = (router) => {
  const authController = require('../controllers/auth.controller')(authService, userService,
    emailService, router.templateModel)

  router.post(routes.get('auth').path, authController.auth)

  /**
  * @api {get} api/docs Register as a user
  * @apiVersion 0.0.1
  * @apiName register
  * @apiGroup Auth
  *
  * @apiParam {String} email User's email.
  * @apiParam {String} password User's password.
  * @apiParam {String} firstName User's first name.
  * @apiParam {String} lastName User's last name.
  * @apiParam {Object} address Object containing the proceeding properties.
  * @apiParam {String} address1 Address 1 field.
  * @apiParam {String} address2 Address 2 field.
  * @apiParam {String} city City field.
  * @apiParam {String} state State field.
  * @apiParam {String} zipCode Zip code.
  *
  * @apiSuccess {Array} links Available hypermedia links for a specific resource.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "links": [
  *         {
  *           "method": "GET",
  *           "rel": "self",
  *           "href": "http://localhost:8080/api/docs/{user-email}"
  *         }
  *       ],
  *       "token": "JWT eyJhbGciOiJI...",
  *       "email": "john@test.com",
  *       "firstName": "John",
  *       "lastName": "Smith",
  *       "_id": "5890a0d992cfda28fceaa639",
  *       "createdOn": "2017/01/31",
  *       "address": {
  *         "address1": "Street 2",
  *         "address2": "Urb. Test"
  *         "city": "San Juan",
  *         "state": "P.R.",
  *         "zipCode": "00123-2222"
  *       },
  *       "fullName": "John Smith"
  *     }
  *
  * @apiError USER_ALREADY_REGISTERED You get this error when the email all ready exist in the system
  * @apiErrorExample USER_ALREADY_REGISTERED:
  *     HTTP/1.1 422 error Email address is already registered.
  *     {
  *       "message": "That email address is already registered.",
  *       "error": {
  *         "status": 422
  *       }
  *     }
  **/
  router.post(routes.get('register').path, authController.register)
  router.post(routes.get('newPassword').path, authController.newPassword)
  router.get(routes.get('confirmResetPassword').path, authController.confirmResetPassword)
  router.post(routes.get('resetPassword').path, authController.resetPassword)
}
