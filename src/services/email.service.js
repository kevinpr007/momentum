const Promise = require('bluebird')
const transporter = require('../config/nodemailer')

module.exports = emailInfo => {
  let template = {
    from: emailInfo.from,
    to: emailInfo.to,
    subject: emailInfo.subject,
    html: emailInfo.html
  }

  let send = () => {
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

  return {
    send: send
  }
}
