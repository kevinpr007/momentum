const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = mongoose.model('User');

let userService = () => {
    let getAll = () => {
        return User.find().exec();
    };

    let getByUserName = (username) => {
        return User.findOne()
            .where('userName', username).exec();
    };

    let getAuthUser = id => {
        return User.findOne({_id: id}, '-password -salt').exec();
    };

    return {
        getAll: getAll,
        getAuthUser: getAuthUser,
        getByUserName: getByUserName
    };
};

module.exports = userService;