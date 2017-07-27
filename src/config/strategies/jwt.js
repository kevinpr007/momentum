const config = require('../config')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const Promise = require('bluebird')
const {refreshToken} = require('../../services/auth.service')()
const {getRemainingTime} = require('../../util/util.helpers')

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: config.SECRET,
  passReqToCallback: true
}

module.exports = () => {
  const userService = require('../../services/user.service')()

  passport.use(new JwtStrategy(jwtOptions, (req, payload, cb) => {
    const expDate = new Date(parseInt(`${payload.exp}000`))

    userService.getById(payload._doc._id)
      .then(user => {
        if (!user) {
          return cb(null, false, {
            message: 'Unknown user'
          })
        }

        if (getRemainingTime(expDate) <= config.EXP_SECONDS) {
          return refreshToken(user)
          .then(jwt => {
            req.res.set('X-Updated-JWT', jwt)
            return Promise.resolve(cb(null, user))
          })
        } else {
          return Promise.resolve(cb(null, user))
        }
      }).catch(err => cb(err))
  }))
}
