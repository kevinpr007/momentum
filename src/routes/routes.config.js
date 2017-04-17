const GET = 'GET'
const POST = 'POST'

let routeMap = new Map()

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
 */
routeMap.set('getLogs', {
  path: '/api/logs',
  method: GET
})

routeMap.set('getByLogCode', {
  path: '/api/logs/:code(\\d+)',
  method: GET
})

routeMap.set('getByLogStatus', {
  path: '/api/logs/:status',
  method: GET
})

module.exports = routeMap
