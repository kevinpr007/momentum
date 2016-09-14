const env = require('../env')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: env('SECRET')
}

module.exports = () => {
  const userService = require('../../services/userService')()

  passport.use(new JwtStrategy(jwtOptions, (payload, cb) => {
    userService.getById(payload.id)
        .then(user => {
          if (!user) {
            return cb(null, false, {
              message: 'Unknown user'
            })
          }
          if (!user.authenticate('')) {
            return cb(null, false, {
              message: 'Invalid password'
            })
          }
          return cb(null, user)
        }).catch(err => cb(err))
  }))
}
