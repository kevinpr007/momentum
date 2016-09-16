const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const mongoDB = require('../config/mongoose.collections.json')
const roles = require('./roles.server.enum')()

const userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, match: /.+@.+\..+/, trim: true, required: true, index: 1},
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
  const user = this
  const SALT_FACTOR = 5

  if (!user.isModified('password')) {
    return next()
  }
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

userSchema.methods.isValidPassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err)
    }
    cb(null, isMatch)
  })
}

userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.password
    return ret
  }
})

mongoose.model(mongoDB.Model.User, userSchema)
