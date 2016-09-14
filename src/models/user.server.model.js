const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const roles = require('./roles.server.enum')();

const userSchema = new Schema({
    firstName: {type: String, index: 1, required: true},
    lastName: {type: String, index: 1, required: true},
    email: {type: String, match: /.+@.+\..+/, trim: true, required: true, index: true},
    dob: {
        type: Date, validate: [
            date => {
                return date < Date.now();
            },
            'Please enter a valid date'
        ]
    },
    password: {
        type: String,
        validate: [
            password => {
                return password && password.length > 6;
            }, 'Password should be longer tahn 6 characters'
        ]
    },
    salt: {
        type: String
    },
    resetPasswordToken: {type: String},
    resetPasswordExpires: {type: Date},
    phone: Number,
    roles: {type: String, enum: roles, required: true},
    addresses: {
        location: {type: Schema.ObjectId, ref: 'Location'},
        street: String,
        city: String,
        state: String,
        zip: Number
    },
    createdBy: {type: Schema.ObjectId, ref: 'User', required: true},
    createdOn: {type: Date, default: Date.now}
}, {
    collection: 'sp_user'
});

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

userSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

userSchema.methods.hashPassword = function (password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

userSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};

userSchema.statics.findUniqueUsername = (username, suffix, callback) => {
    let possibleUsername = username + (suffix || '');

    this.findOne({
        email: possibleUsername
    }, (err, user) => {
        if (!err)
            if (!user)
                callback(possibleUsername);
            else
                return this.findUniqueUsername(username, (suffix || 0) + 1, callback);
        else
            callback(null);
    });
};

userSchema.set('toJSON', {getters: true, virtuals: true});
mongoose.model('User', userSchema);