const HttpStatus = require('http-status-codes')

let authController = (authService) => {
  let userService = require('../services/userService')()

  let login = (req, res) => {
    res.status(HttpStatus.OK).json({
      token: `JWT ${authService.generateToken(req.user)}`,
      user: req.user
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
            .send({error: 'That email address is already in use.'})
      }
      userService.createUser(user).then(user => {
        res.status(HttpStatus.CREATED).json({
          token: `JWT ${authService.generateToken(user)}`,
          user: user
        })
      })
    }).catch(err => next(err))
  }

  let auth = (req, res, next) => {
    userService.getByEmail(req.email)
        .then(user => {
          if (!user) {
            res.status(HttpStatus.NOT_FOUND)
                .json({error: 'Unknown user'})
          }
          if (!user.isValidPassword(req.password)) {
            res.status(HttpStatus.BAD_REQUEST)
                .json({error: 'Invalid password'})
          }
          return user
        }).catch(err => next(err))
  }

  return {
    auth: auth,
    login: login,
    register: register
  }
}

module.exports = authController
