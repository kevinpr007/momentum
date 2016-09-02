const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const userSchema = require('../models/user').userSchema;
const Users = mongoose.model('Users', userSchema);

let userService = (db) => {
    let getAll = () => {
        return Users.find();
    };

    return {
        getAll: getAll
    };
};

module.exports = userService;