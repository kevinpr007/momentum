const passport = require('passport');

module.exports = () => {
    let userService = require('../services/userService')();

    passport.serializeUser(function (user, cb) {
        cb(null, user.id);
    });

    passport.deserializeUser(function (id, cb) {
        userService.getById(id)
            .then(user => cb(null, user))
            .catch(err => cb(err, null));
    });

    require('./strategies/local')();
    require('./strategies/jwt')();
};