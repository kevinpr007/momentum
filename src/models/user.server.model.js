const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roles = require('./roles.server.enum');

const userSchema = new Schema({
    firstName: {type: String, index: 1, required: true},
    lastName: {type: String, index: 1, required: true},
    email: {type: String, match: /.+@.+\..+/, index: true},
    dob: {
        type: Date, validate: [
            date => {
                return date < Date.now();
            },
            'Please enter a valid date.'
        ]
    },
    userName: {type: String, trim: true, unique: true},
    phone: Number,
    roles: {type: String, enum: roles()},
    addresses: {
        street: String, city: String, state: String, zip: Number
    },
    createdBy: String,
    createdOn: {type: Date, default: Date.now}
}, {collection: 'sp_user'});

userSchema.virtual('fullName').get(() => {
    return `${this.firstName} ${this.lastName}`;
});

userSchema.set('toJSON', {getters: true, virtuals: true});

exports.userSchema = userSchema;