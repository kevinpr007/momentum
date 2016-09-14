let authController = (authService) => {
    let userService = require('../services/userService')();

    let login = (req, res) => {
        res.status(200).json({
            token: `JWT ${authService.generateToken(req.user)}`,
            user: req.user
        });
    };

    let register = function (req, res, next) {
        const email = req.body.email;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const password = req.body.password;

        if (!email)
            return res.status(422).send({error: 'You must enter an email address.'});

        if (!firstName || !lastName)
            return res.status(422).send({error: 'You must enter your full name.'});

        if (!password)
            return res.status(422).send({error: 'You must enter a password.'});

        userService.getByEmail(email).then(existingUser => {
            if (existingUser)
                return res.status(422).send({error: 'That email address is already in use.'});

            let user = new User({
                email: email,
                password: password,
                profile: {firstName: firstName, lastName: lastName}
            });

            res.status(201).json({
                token: `JWT ${authService.generateToken(req.user)}`,
                user: req.user
            });
        }).catch(err => next(err));
    };

    return {
        login: login,
        register: register
    };
};

module.exports = authController;