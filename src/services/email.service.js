const Promise = require('bluebird')
const transporter = Promise.promisifyAll(require('../config/nodemailer'))

module.exports = emailInfo => {
  const template = {
    from: emailInfo.from,
    to: emailInfo.to,
    subject: emailInfo.subject,
    html: emailInfo.html
  }

  const send = () => transporter.sendMailAsync(template)

  return {
    send
  }
}
