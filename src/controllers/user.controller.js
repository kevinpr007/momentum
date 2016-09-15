const HttpStatus = require('http-status-codes')

let userController = (userService) => {
  let getAllUsers = (req, res) => {
    userService.getAll().then(users => {
      req.log.info(req.session)
      res.json(users)
    }).catch(err => {
      req.log.error(err)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR)
      res.json(err)
    })
  }

  let getByUserName = (req, res) => {
    userService.getByUserName(req.params.userName)
        .then(user => res.json(user))
        .catch(err => {
          req.log.info(err)
          res.status(HttpStatus.INTERNAL_SERVER_ERROR)
          res.json(err)
        })
  }

  return {
    getAllUsers: getAllUsers,
    getByUserName: getByUserName
  }
}

module.exports = userController
