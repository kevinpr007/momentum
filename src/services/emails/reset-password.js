const Promise = require('bluebird')
const env = require('../../config/env')
const transporter = require('../../config/nodemailer')

module.exports = user => {
  let template = {
    from: env('EMAIL'),
    to: user.email,
    subject: 'Style Point: Password Changed',
    html: `
        <p>
            You are receiving this email because you changed your password.
            <br>
            If you did not request this change, please contact us immediately.          
        </p>
    `
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(template, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
