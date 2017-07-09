const HttpStatus = require('http-status-codes')
const _ = require('lodash')

module.exports = roles => (req, res, next) => {
  if (_.intersectionWith(roles, req.user.roles, (role, userRole) => {
      return role.name === userRole.name
    }).length === 0) {
    const err = new Error('Your user does not have the required role(s) to execute this action.')
    err.status = HttpStatus.UNAUTHORIZED
    throw err
  }
  next()
}
