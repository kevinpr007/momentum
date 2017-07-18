const config = require('../config')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: config.SECRET
}

module.exports = () => {
  const userService = require('../../services/user.service')()

  passport.use(new JwtStrategy(jwtOptions, (payload, cb) => {
    userService.getById(payload._doc._id).then(user => {
      if (!user) {
        return cb(null, false, {
          message: 'Unknown user'
        })
      } else {
        return cb(null, user)
      }
    }).catch(err => cb(err))
  }))
}
