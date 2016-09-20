const mailer = require('nodemailer')
const config = require('./config')

module.exports = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.EMAIL,
    pass: config.EMAIL_PASS
  }
})
