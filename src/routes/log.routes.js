const logService = require('../services/log.service')()
const logController = require('../controllers/log.controller')(logService)
const authenticate = require('passport').authenticate('jwt', {session: false})
const authorize = require('../services/auth.service')().authorize
const routes = require('./routes.config')

module.exports = router => {
  /**
  * @api {get} api/logs Get all logs
  * @apiVersion 0.0.1
  * @apiName getLogs
  * @apiGroup Logs
  *
  * @apiParam {Number} page Optional page number. Default value: 0
  * @apiParam {Number} pageSize Optional page size. Default value: 10
  *
  * @apiSuccess {Number} totalPages Total amount of pages.
  * @apiSuccess {Number} totalCount  Total amount of records.
  * @apiSuccess {Link} prevPage Link to navigate to collection's previous page.
  * @apiSuccess {Link} nextPage Link to navigate to collection's next page.
  * @apiSuccess {Array} data Array of resource objects with hypermedia links.
  * @apiSuccess {Array} links Available hypermedia links for a specific resource.
  * @apiSuccess {Guid} _id Log's document id.
  * @apiSuccess {String} message Log's message.
  * @apiSuccess {String} status Log's status.
  * @apiSuccess {String} code Log's code.
  * @apiSuccess {String} getError Code - status - message combination.
  * 
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "totalPages": 2,
  *       "totalCount": 20,
  *       "data": [
  *         {
  *          "links": [
  *            {
  *              "method": "GET",
  *              "rel": "collection",
  *              "href": "http://localhost:8080/api/logs"
  *            },
  *             ...
  *           ],
  *           "_id": "58543ab25ae19d18a4d0c7e7",
  *           "message": "Reprehenderit culpa enim eiusmod fugiat elit.",
  *           "status": "Lorem commodo proident",
  *           "code": "698",
  *           "getError": "698 - Lorem commodo proident - Reprehenderit culpa enim eiusmod fugiat elit."
  *         },
  *         ...
  *       ],
  *       "prevPage": null,
  *       "nextPage": "http://localhost:8080/api/logs?page=2"
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
  router.get(routes.get('getLogs').path, authenticate,
    authorize(['sysAdmin']), logController.getAllLogs)

  /**
  * @api {get} api/logs/:code Get logs by code
  * @apiVersion 0.0.1
  * @apiName getByLogCode
  * @apiGroup Logs
  *
  * @apiParam {Number} page Optional page number. Default value: 0
  * @apiParam {Number} pageSize Optional page size. Default value: 10
  *
  * @apiSuccess {Number} totalPages Total amount of pages.
  * @apiSuccess {Number} totalCount  Total amount of records.
  * @apiSuccess {Link} prevPage Link to navigate to collection's previous page.
  * @apiSuccess {Link} nextPage Link to navigate to collection's next page.
  * @apiSuccess {Array} data Array of resource objects with hypermedia links.
  * @apiSuccess {Array} links Available hypermedia links for a specific resource.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "totalPages": 2,
  *       "totalCount": 20,
  *       "data": [
  *         {
  *          "links": [
  *            {
  *              "method": "GET",
  *              "rel": "collection",
  *              "href": "http://localhost:8080/api/logs"
  *            },
  *             ...
  *           ],
  *           "_id": "58543ab25ae19d18a4d0c7e7",
  *           "stack": "Id officia occaecat consectetur mollit duis sint pariatur adipisicing officia.",
  *           "createdOn": "2016-12-20T00:17:13.344Z",
  *           "message": "Reprehenderit culpa enim eiusmod fugiat elit.",
  *           "status": "Lorem commodo proident",
  *           "code": "698",
  *           "getError": "698 - Lorem commodo proident - Reprehenderit culpa enim eiusmod fugiat elit."
  *         },
  *         ...
  *       ],
  *       "prevPage": null,
  *       "nextPage": "http://localhost:8080/api/logs?page=2"
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
  router.get(routes.get('getByLogCode').path, authenticate,
    authorize(['sysAdmin']), logController.getByCode)
}
