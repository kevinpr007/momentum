let routeMap = new Map()

/**
 * @Index routes
 */
routeMap.set('index', {
  path: '/',
  method: 'GET'
})

/**
 * @Authentication routes
 */
routeMap.set('auth', {
    path: '/auth',
    method: 'POST'
})

routeMap.set('register', {
    path: '/register',
    method: 'POST'
})

routeMap.set('newPassword', {
    path: '/complete-reset-password',
    method: 'POST'
})

routeMap.set('confirmResetPassword', {
    path: '/confirm-reset-password/:token',
    method: 'GET'
})

routeMap.set('resetPassword', {
    path: '/reset-password',
    method: 'POST'
})

/**
 * @User routes
 */
routeMap.set('getUsers', {
    path: '/users',
    method: 'GET'
})

routeMap.set('getByUserEmail', {
    path: '/users/:userName',
    method: 'GET'
})

/**
 * @Log routes
 */
routeMap.set('getLogs', {
    path: '/logs',
    method: 'GET'
})

routeMap.set('getByLogCode', {
    path: '/logs/:code',
    method: 'GET'
})

routeMap.set('getByLogStatus', {
    path: '/logs/:status',
    method: 'GET'
})

module.exports = routeMap
