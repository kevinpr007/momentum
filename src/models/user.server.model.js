const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first: {type: String, index: 1, required: 'Please provide your first name'},
    last: {type: String, index: 1, required: 'Please provide your last name'},
    dob: Date,
    phone: Number,
    roles: [String],
    addresses: {
        street: String, city: String, state: String, zip: Number
    },
    createdBy: String,
    createdOn: Date
}, {collection: 'sp_user'});

userSchema.methods.fullName = function () {
    return `${this.first} ${this.last}`;
};

mongoose.model('Users', userSchema);