const Hypermedia = require('../util/hypermedia/hypermedia.config')
const pagedResult = require('../util/pagination/paged-result')
const HttpStatus = require('http-status-codes')
const util = require('../util/util.helpers')

module.exports = userService => {
  /**
   * @desc Returns all users.
   */
  function getAllUsers (req, res, next) {
    const setResponse = users => {
      users = pagedResult(req, users)

      res.status(HttpStatus.OK)
        .json(new Hypermedia(req)
        .setResponse(users, next))
    }

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

      res.status(HttpStatus.OK)
        .json(new Hypermedia(req)
        .setResponse(user, next))
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
