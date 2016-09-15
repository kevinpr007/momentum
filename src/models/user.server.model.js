const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')
const mongoDB = require('../config/mongoose.collections.json')
const roles = require('./roles.server.enum')()

const userSchema = new Schema({
  firstName: {type: String, index: 1, required: true},
  lastName: {type: String, index: 1, required: true},
  email: {type: String, match: /.+@.+\..+/, trim: true, required: true, index: true},
  dob: {
    type: Date,
    validate: [
      date => {
        return date < Date.now()
      },
      'Please enter a valid date'
    ]
  },
  password: {
    type: String,
    validate: [
      password => {
        return password && password.length > 6
      }, 'Password should be longer than 6 characters'
    ],
    required: true
  },
  salt: {
    type: String
  },
  resetPasswordToken: {type: String},
  resetPasswordExpires: {type: Date},
  phone: Number,
  roles: {type: String, enum: roles},
  addresses: {
    location: {type: Schema.ObjectId, ref: mongoDB.Model.Location},
    street: String,
    city: String,
    state: String,
    zip: Number
  },
  createdBy: {type: Schema.ObjectId, ref: mongoDB.Model.User},
  createdOn: {type: Date, default: Date.now}
}, {
  collection: mongoDB.Collection.User
})

userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`
})

userSchema.pre('save', function (next) {
  if (this.password) {
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64')
    this.password = this.hashPassword(this.password)
  }
  next()
})

userSchema.methods.hashPassword = function (password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64')
}

userSchema.methods.isValidPassword = function (password) {
  return this.password === this.hashPassword(password)
}

userSchema.set('toJSON', {getters: true, virtuals: true})
mongoose.model(mongoDB.Model.User, userSchema)
