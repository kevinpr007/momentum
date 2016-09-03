const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Users = mongoose.model('Users');

let userService = () => {
    let getAll = () => {
        return Users.find();
    };

    return {
        getAll: getAll
    };
};

module.exports = userService;