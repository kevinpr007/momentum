const passport = require('passport')
const LocalStrategy = require('passport-local')

const localOptions = {
  usernameField: 'email'
}

module.exports = () => {
  const userService = require('../../services/userService')()

  passport.use(new LocalStrategy(localOptions, (email, password, cb) => {
    userService.getByEmail(email)
        .then(user => {
          if (!user) {
            return cb(null, false, {
              message: 'Unknown user'
            })
          }
          if (!user.isValidPassword(password)) {
            return cb(null, false, {
              message: 'Invalid password'
            })
          }
          return cb(null, user)
        }).catch(err => cb(err))
  }))
}
