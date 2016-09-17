const Promise = require('bluebird')
const env = require('../../config/env')
const transporter = require('../../config/nodemailer')

module.exports = (user, host) => {
  let template = {
    from: env('EMAIL'),
    to: user.email,
    subject: 'Style Point: Reset your password',
    html: `
        <p>
            You are receiving this because you (or someone else) have requested the reset of the password for your account.
            <br>Please click on the following link, or paste this into your browser to complete the process:<br><br>
            http://${host}/reset-password/${user.resetPasswordToken}<br><br>
            If you did not request this, please ignore this email and your password will remain unchanged.
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
