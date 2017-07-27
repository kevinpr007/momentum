const config = require('../config')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const {refreshToken} = require('../../services/auth.service')()

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: config.SECRET,
  passReqToCallback: true
}

module.exports = () => {
  const userService = require('../../services/user.service')()

  passport.use(new JwtStrategy(jwtOptions, (req, payload, cb) => {
    const expDate = new Date(parseInt(`${payload.exp}000`))

    userService.getById(payload._doc._id).then(user => {
      if (!user) {
        return cb(null, false, {
          message: 'Unknown user'
        })
      }

      if (2 === 2) { // TODO: validate expDate remaining time.
        return refreshToken(user)
          .then(jwt => {
            req.res.set('X-Updated-JWT', jwt)
            return cb(null, user)
          })
      } else {
        return cb(null, user)
      }
    }).catch(err => cb(err))
  }))
}
