const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const User = require('../src/models/user.model')
require('../src/config/mongoose')()

let client = new User({
  firstName: 'Juan',
  lastName: 'Del Pueblo',
  email: 'juan@designTest.com',
  password: 'ABcd1234',
  roles: ['User'],
  address: {
    address1: 'St. 123',
    city: 'San Juan',
    state: 'P.R.',
    zipCode: '00123'
  }
})

User.create(client).then(user => {
  console.log(user)
  process.exit()
}).catch(err => {
  console.log(err)
})
