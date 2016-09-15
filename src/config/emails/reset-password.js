const env = require('../env')
const Promise = require('bluebird')
const transporter = require('../nodemailer')

module.exports = user => {
  let template = {
    from: env('EMAIL'),
    to: user.email,
    subject: 'StylePoint: Reset your password',
    html: `
        <b></b>        
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
