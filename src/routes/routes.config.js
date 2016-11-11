const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'

let routeMap = new Map()

/**
 * @Index routes
 */
routeMap.set('index', {
  path: '/',
  method: GET
})

/**
 * @Authentication routes
 */
routeMap.set('auth', {
  path: '/api/auth',
  method: POST
})

routeMap.set('register', {
  path: '/api/register',
  method: POST
})

routeMap.set('newPassword', {
  path: '/api/complete-reset-password',
  method: POST
})

routeMap.set('confirmResetPassword', {
  path: '/api/confirm-reset-password/:token',
  method: GET
})

routeMap.set('resetPassword', {
  path: '/api/reset-password',
  method: POST
})

/**
 * @User routes
 */
routeMap.set('getUsers', {
  path: '/api/users',
  method: GET
})

routeMap.set('getByUserEmail', {
  path: '/api/users/:userName',
  method: GET
})

/**
 * @Log routes
 * TODO: Check route constraints.
 */
routeMap.set('getLogs', {
  path: '/api/logs',
  method: GET
})

routeMap.set('getByLogCode', {
  path: '/api/logsByCode/:code',
  method: GET
})

routeMap.set('getByLogStatus', {
  path: '/api/logsByStatus/:status',
  method: GET
})

module.exports = routeMap
