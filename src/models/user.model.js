const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const mongoDB = require('../config/mongoose.collections.json')
const roles = require('./roles.enum')
const Promise = require('bluebird')

const SALT_FACTOR = 5
const PASSWORD_LENGHT = 6

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    index: true
  },
  lastName: {
    type: String,
    required: true,
    index: true
  },
  email: {
    type: String,
    match: /.+@.+\..+/,
    trim: true,
    lowercase: true,
    required: true,
    index: {
      unique: true
    }
  },
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
        return password && password.length > PASSWORD_LENGHT
      }, `Password should be longer than ${PASSWORD_LENGHT} characters`
    ],
    required: true
  },
  salt: {
    type: String
  },
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  },
  phone: Number,
  roles: [{
    name: {
      type: String,
      enum: roles,
      required: true
    },
    appId: {
      type: Schema.ObjectId,
      ref: mongoDB.Model.Application,
      required: true
    }
  }],
  address: {
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
    }
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: mongoDB.Model.User
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
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

userSchema.methods.isValidPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) {
        reject(err)
      }
      resolve({ user: this, isMatch })
    })
  })
}

userSchema.methods.confirmPasswordValid = function (password, confirmPassword) {
  return new Promise((resolve, reject) => {
    if (password === null || password === undefined ||
      confirmPassword === null || confirmPassword === undefined) {
      reject(new Error('Password and Confirm Password can not be null or undefined'))
    }

    resolve(password === confirmPassword)
  })
}

userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.password
    delete ret.id
    return ret
  }
})

module.exports = mongoose.model(mongoDB.Model.User, userSchema)
