const { createTransport } = require('nodemailer')
const config = require('./config')

module.exports = createTransport({
  service: config.EMAIL_SERVICE,
  auth: {
    user: config.EMAIL,
    pass: config.EMAIL_PASS
  }
})
