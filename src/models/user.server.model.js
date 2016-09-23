const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const mongoDB = require('../config/mongoose.collections.json')
const roles = require('./roles.server.enum')()
const config = require('../config/config')

const userSchema = new Schema({
  firstName: {type: String, required: true, index: 4},
  lastName: {type: String, required: true, index: 3},
  email: {type: String, match: /.+@.+\..+/, trim: true, required: true, index: 1, unique: true},
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
        return password && password.length > parseInt(config.PASSWORD_LENGHT)
      }, `Password should be longer than ${config.PASSWORD_LENGHT} characters`
    ],
    required: true
  },
  salt: {
    type: String
  },
  resetPasswordToken: {type: String},
  resetPasswordExpires: {type: Date},
  phone: Number,
  roles: {type: String, enum: roles, index: 2},
  address: {
    address1: {type: String, required: true},
    address2: {type: String},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipCode: {type: String, required: true}
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
  if (!user.isModified('password')) {
    return next()
  }
  bcrypt.genSalt(config.SALT_FACTOR, (err, salt) => {
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
