const env = require('../config/env')
const jwt = require('jsonwebtoken')

let authService = () => {
  let generateToken = user => {
    return jwt.sign(user, env('SECRET'), {
      expiresIn: 10800 // 3 hrs.
    })
  }

  return {
    generateToken: generateToken
  }
}

module.exports = authService
