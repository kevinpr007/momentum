const Promise = require('bluebird')
const config = require('../../config/config')
const transporter = require('../../config/nodemailer')

module.exports = (user, host) => {
  let template = {
    from: config.EMAIL,
    to: user.email,
    subject: 'Style Point: New Account',
    html: `
        <p>
            Hi ${user.firstName} ${user.lastName}!<br><br>

            Welcome to Style Point! Thanks so much for joining us. You’re on your way to super-productivity and beyond!
            Click here to go: http://${host}

            <br><br>Have any questions? Just shoot us an email! We’re always here to help.

            Cheerfully yours,
            The Style Point Team
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
