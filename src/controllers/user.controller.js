const pagedResult = require('../util/paged-result')
const HttpStatus = require('http-status-codes')
const util = require('../util/util.helpers')

module.exports = userService => {
  /**
   * @desc Returns all users.
   */
  function getAllUsers (req, res, next) {
    const setResponse = users =>
      res.status(HttpStatus.OK).json(pagedResult(req, users))

    const {page, pageSize} = req.query

    return userService.getAll(page, pageSize)
      .then(setResponse)
      .catch(next)
  }

  /**
   * @desc Returns user by email address.
   */
  function getByUserEmail (req, res, next) {
    const setResponse = user => {
      if (!user) {
        let message = 'User not found.'
        return util.generateError(message, HttpStatus.NOT_FOUND)
      }

      return res.status(HttpStatus.OK).json(user)
    }

    return userService.getByEmail(req.params.userName)
      .then(setResponse)
      .catch(next)
  }

  return {
    getAllUsers,
    getByUserEmail
  }
}
