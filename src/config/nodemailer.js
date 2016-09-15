const mailer = require('nodemailer')
const env = require('./env')

module.exports = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: env('EMAIL'),
    pass: env('EMAIL_PASS')
  }
})
