const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = user => {
  return new User({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    address: {
      address1: user.address.address1,
      address2: user.address.address2,
      city: user.address.city,
      state: user.address.state,
      zipCode: user.address.zipCode
    }
  })
}
