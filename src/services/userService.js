const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const User = mongoose.model('User')

let userService = () => {
  let getAll = () => {
    return User.find().exec()
  }

    let getByEmail = (email) => {
        return User.findOne()
            .where('email', email).exec();
    };

    let getById = id => {
        return User.findOne({_id: id}, '-password -salt').exec();
    };

    return {
        getAll: getAll,
        getById: getById,
        getByEmail: getByEmail
    };
};

module.exports = userService
