const Promise = require('bluebird')
const transporter = Promise.promisifyAll(require('../config/nodemailer'))

module.exports = emailInfo => {
  let template = {
    from: emailInfo.from,
    to: emailInfo.to,
    subject: emailInfo.subject,
    html: emailInfo.html
  }

  let send = () => {
    return transporter.sendMailAsync(template)
  }

  return {
    send
  }
}
