const Promise = require('bluebird')
const passport = require('passport')
const LocalStrategy = require('passport-local')

module.exports = () => {
  const userService = require('../../services/user.service')()

  passport.use(new LocalStrategy((email, password, cb) => {
    userService.getByEmail(email)
        .then(user => {
          if (!user) {
            return Promise.resolve(cb(null, false, {
              message: 'Unknown user'
            }))
          }
          user.isValidPassword(password, (err, isMatch) => {
            if (err) {
              return Promise.resolve(cb(err))
            }
            if (!isMatch) {
              return Promise.resolve(cb(null, false, {
                message: 'Invalid password'
              }))
            }
            return Promise.resolve(cb(null, user))
          })
        }).catch(err => cb(err))
  }))
}
