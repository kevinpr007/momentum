const mailer = require('nodemailer')
const config = require('./config')

module.exports = mailer.createTransport({
  service: config.EMAIL_SERVICE,
  auth: {
    user: config.EMAIL,
    pass: config.EMAIL_PASS
  }
})
