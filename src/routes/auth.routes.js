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

/**
* @api {post} api/complete-reset-password Complete Reset Password
* @apiVersion 0.0.1
* @apiName newPassword
* @apiGroup Auth
*
* @apiParam {string} token It's the token key received in your email
* @apiParam {string} currentPassword It's the actual password you're using to login
* @apiParam {string} password It's the new password
* @apiParam {string} confirmPassword It's the confirmation of the new password

* @apiSuccess {Object} data Include all the information related to the email sent
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "data": {
*         "accepted": [
*           "email..."
*         ],
*       "rejected": [],
*       "response": "250 2.0.0 OK 1491438881 w23sm5843429uaa.30 - gsmtp",
*       "envelope": {
*         "from": "email system...",
*         "to": [
*           "email..."
*         ]
*       },
*       "messageId": "<e7f7e3ad-4e86-9769-789a-31576bf63c1b@gmail.com>"
*  }
*}
*
* @apiError UNPROCESSABLE_ENTITY Invalid Token
* @apiErrorExample UNPROCESSABLE_ENTITY:
*     HTTP/1.1 422 error Unprocessable Entity
*     {
*       "message": "Invalid token. Please confirm this action through your email.",
*       "error": {
*         "status": 422
*       }
*     }
*
*
* @apiError BAD_REQUEST Bad Request using invalid current password
* @apiErrorExample BAD_REQUEST:
*     HTTP/1.1 400 error Bad Request
*     {
*       "message": "Invalid password. Please validate your current password.",
*       "error": {
*         "status": 400
*       }
*     }
*
*
* @apiError BAD_REQUEST2 Bad Request using new password does not match
* @apiErrorExample BAD_REQUEST:
*     HTTP/1.1 400 error Bad Request 
*     {
*       "message": "Invalid confirmation password. Please validate your new password.",
*       "error": {
*         "status": 400
*       }
*     }
*
**/
  router.post(routes.get('newPassword').path, authController.newPassword)

  /**
  * @api {GET} api/confirm-reset-password/:token Confirmation New Password
  * @apiVersion 0.0.1
  * @apiName confirmResetPassword
  * @apiGroup Auth
  *
  * @apiParam {String} Token This token will be use to validate the account
  *
  * @apiSuccess {HTML} Webpage confirm-reset-password you will get a html page to enter the new password. This will not use in the API.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *
  * @apiError Not_Found You will get this error when token is not provide.
  * @apiErrorExample Not Found:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "message": "Not Found",
  *       "error": {
  *         "status": 404
  *       }
  *     }
  **/
  router.get(routes.get('confirmResetPassword').path, authController.confirmResetPassword)

  /**
  * @api {post} /api/reset-password Reset Password
  * @apiVersion 0.0.1
  * @apiName resetPassword
  * @apiGroup Auth
  *
  * @apiParam {string} email It's the email you want to apply the reset password
  *
  * @apiSuccess {Object} data Include all the information related to the email sent
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "data": {
  *         "accepted": [
  *           "email..."
  *           ],
  *         "rejected": [],
  *         "response": "250 2.0.0 OK 1491436379 c68sm5669107uac.27 - gsmtp",
  *         "envelope": {
  *           "from": "email system...",
  *           "to": [
  *             "email..."
  *           ]
  *         },
  *         "messageId": "<2810ef8e-acaa-d1af-0396-838c6c336840@gmail.com>"
  *       }
  *   }
  *
  * @apiError NOT_FOUND Email not found
  * @apiErrorExample NOT_FOUND:
  *     HTTP/1.1 404 Not Found
  *     {
  *      "message": "Your request could not be processed as entered. User does not exist.",
  *      "error": {
  *        "status": 404
  *      }
  *    }
  *
  **/
  router.post(routes.get('resetPassword').path, authController.resetPassword)
}
