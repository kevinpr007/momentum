const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
    const userService = require('../../services/userService')();

    passport.use(new LocalStrategy((username, password, cb) => {
        userService.getByUserName(username)
            .then(user => {
                if (!user) return cb(null, false, {
                    message: 'Unknown user'
                });
                if (!user.authenticate(password)) return cb(null, false, {
                    message: 'Invalid password'
                });
                return cb(null, user);
            }).catch(err => cb(err));
    }));
};