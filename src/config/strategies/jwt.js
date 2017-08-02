const _ = require('lodash')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const Promise = require('bluebird')

const {SECRET, EXP_SECONDS} = require('../config')
const {getById} = require('../../services/user.service')()
const {refreshToken} = require('../../services/auth.service')()
const {getRemainingTime, getDateFromEpoch} = require('../../util/util.helpers')

module.exports = () => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: SECRET,
    passReqToCallback: true
  }

  function jwtHandler (req, payload, cb) {
    const expDate = _.flowRight([getRemainingTime, getDateFromEpoch])

    const setJWTHeader = jwt => req.res.set('X-Updated-JWT', jwt)

    const setUserFromPayload = user => {
      if (!user) {
        return cb(null, false, { message: 'Unknown user' })
      }

      if (expDate(payload.exp) <= parseInt(EXP_SECONDS)) {
        refreshToken(user).then(setJWTHeader)
      }

      return Promise.resolve(cb(null, user))
    }

    return getById(payload._doc._id)
      .then(setUserFromPayload)
      .catch(cb)
  }

  passport.use(new JwtStrategy(jwtOptions, jwtHandler))
}
