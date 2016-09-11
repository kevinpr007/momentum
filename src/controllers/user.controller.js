let userController = (userService) => {
    let getAllUsers = (req, res) => {
        userService.getAll().then(users => res.json(users))
            .catch(err => {
                req.log.info(err);
                res.status(500);
            });
    };

    return {
        getAllUsers: getAllUsers
    };
};

module.exports = userController;