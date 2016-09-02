const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    word: {type: String, index: 1, required: true, unique: true},
    first: {type: String, index: 1},
    last: String,
    dob: Date,
    phone: Number,
    roles: [String],
    addresses: {
        street: String, city: String, state: String, zip: Number
    },
    createdBy: String,
    createdOn: Date
}, {collection: 'sp_user'});

userSchema.methods.fullName = function(){
    return `${this.first} ${this.last}`;
};

exports.userSchema = userSchema;