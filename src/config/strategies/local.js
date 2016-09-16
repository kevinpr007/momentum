const passport = require('passport')
const LocalStrategy = require('passport-local')

module.exports = () => {
  const userService = require('../../services/userService')()

  passport.use(new LocalStrategy((email, password, cb) => {
    userService.getByEmail(email)
        .then(user => {
          if (!user) {
            return cb(null, false, {
              message: 'Unknown user'
            })
          }
          user.isValidPassword(password, (err, isMatch) => {
            if (err) {
              return cb(err)
            }
            if (!isMatch) {
              return cb(null, false, {
                message: 'Invalid password'
              })
            }
            return cb(null, user)
          })
        }).catch(err => cb(err))
  }))
}
