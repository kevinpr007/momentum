const Promise = require('bluebird')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const localOptions = {usernameField: 'email'}

module.exports = () => {
  const userService = require('../../services/user.service')()

  passport.use(new LocalStrategy(localOptions, (email, password, cb) => {
    userService.getByEmail(email)
        .then(user => {
          if (!user) {
            return Promise.resolve(cb(null, false, {
              message: 'Unknown user'
            }))
          }
          return user.isValidPassword(password).then(isMatch => {
            if (isMatch) {
              return Promise.resolve(cb(null, user))
            } else {
              return Promise.resolve(cb(null, false, {
                message: 'Invalid Password'
              }))
            }
          })
        }).catch(err => Promise.resolve(cb(err)))
  }))
}
