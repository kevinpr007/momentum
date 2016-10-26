const mailer = require('nodemailer')
const config = require('./config')()

module.exports = mailer.createTransport({
  service: config.getVariable().EMAIL_SERVICE,
  auth: {
    user: config.EMAIL,
    pass: config.EMAIL_PASS
  }
})
