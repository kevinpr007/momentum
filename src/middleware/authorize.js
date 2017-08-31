const HttpStatus = require('http-status-codes')
const util = require('../util/util.helpers')
const _ = require('lodash')

module.exports = roles => (req, res, next) => {
  if (_.intersectionWith(roles, req.user.roles, (role, userRole) => {
    return role.name === userRole.name
  }).length === 0) {
    let message = 'Your user does not have the required role(s) to execute this action.'
    return util.generateError(message, HttpStatus.UNAUTHORIZED)
  }
  next()
}
