const HttpStatus = require('http-status-codes')

let authController = (authService) => {
  let userService = require('../services/userService')()

  let auth = (req, res) => {
    userService.getByEmail(req.body.email)
        .then(user => {
          if (!user) {
            res.status(HttpStatus.BAD_REQUEST)
                .json({error: 'Authentication failed. User not found.'})
          }
          user.isValidPassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
              res.status(HttpStatus.OK).json({
                token: `JWT ${authService.generateToken(user)}`,
                user: user
              })
            } else {
              res.status(HttpStatus.BAD_REQUEST)
                  .json({error: 'Authentication failed. Wrong password.'})
            }
          })
        })
  }

  let register = function (req, res, next) {
    let user = {
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
    userService.getByEmail(user.email).then(existingUser => {
      if (existingUser) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY)
            .json({error: 'That email address is already registered.'})
      }
      return userService.createUser(user).then(user => {
        res.status(HttpStatus.CREATED).json({
          token: `JWT ${authService.generateToken(user)}`,
          user: user
        })
      })
    }).catch(err => next(err))
  }

  return {
    auth: auth,
    register: register
  }
}

module.exports = authController
