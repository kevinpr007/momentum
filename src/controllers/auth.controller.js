const HttpStatus = require('http-status-codes')
const resetPasswordEmail = require('../services/emails/reset-password-confirm')

let authController = authService => {
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
        }).catch(err => {
      req.log.error(err)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({error: err})
        })
  }

  let register = (req, res) => {
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
      return userService.registerUser(user).then(user => {
        res.status(HttpStatus.CREATED).json({
          token: `JWT ${authService.generateToken(user)}`,
          user: user
        })
      })
    }).catch(err => {
      req.log.error(err)
      res.status(HttpStatus.BAD_REQUEST).json({error: err})
    })
  }

  let resetPassword = (req, res) => {
    authService.resetPassword(req.params.token).then(user => {
      if (!user) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY)
            .json({error: 'Your token has expired. Please reset your password again.'})
      }
      user.password = req.body.password
      user.resetPasswordToken = undefined
      user.resetPasswordExpires = undefined
      console.error(typeof user)
      return user.save()
    }).then(user => {
      return resetPasswordEmail(user)
    }).then(data => {
      res.status(HttpStatus.OK).json({data: data})
    }).catch(err => {
      req.log.error(err)
      res.status(HttpStatus.BAD_REQUEST).json({error: err})
    })
  }

  return {
    auth: auth,
    register: register,
    resetPassword: resetPassword
  }
}

module.exports = authController
