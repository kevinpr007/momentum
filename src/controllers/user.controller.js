let userController = (userService) => {
    let getAllUsers = (req, res) => {
        userService.getAll().then(users => {
            res.json(users);
        }).catch(err => {
                req.log.error(err);
                res.status(500);
                res.json(err);
            });
    };

    let getByUserName = (req, res) => {
        userService.getByEmail(req.params.userName)
            .then(user => res.json(user))
            .catch(err => {
                req.log.info(err);
                res.status(500);
                res.json(err);
            });
    };

    return {
        getAllUsers: getAllUsers,
        getByEmail: getByUserName
    };
};

module.exports = userController;