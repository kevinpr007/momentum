const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoDB = require('../config/mongoose.collections.json');

const roles = require('./roles.server.enum')();

const userSchema = new Schema({
    firstName: {type: String, index: 1, required: true},
    lastName: {type: String, index: 1, required: true},
    email: {type: String, match: /.+@.+\..+/, required: true, index: true},
    dob: {
        type: Date, validate: [
            date => {
                return date < Date.now();
            },
            'Please enter a valid date of birth.'
        ]
    },
    userName: {type: String, trim: true, required: true, unique: true},
    phone: Number,
    roles: {type: String, enum: roles, required: true},
    addresses: {
        location: {type: Schema.ObjectId, ref: mongoDB.Model.Location},
        street: String,
        city: String,
        state: String,
        zip: Number
    },
    createdBy: {type: Schema.ObjectId, ref: mongoDB.Model.User, required: true},
    createdOn: {type: Date, default: Date.now}
}, {
    collection: mongoDB.Collection.User
});

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

userSchema.set('toJSON', {getters: true, virtuals: true});
mongoose.model(mongoDB.Model.User, userSchema);