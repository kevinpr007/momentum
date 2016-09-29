const config = require('../config/config')

module.exports = (to, subject, html) => {
  let getInfo = {
    from: config.EMAIL,
    to: to,
    subject: subject,
    html: html
  }

  return {
    getInfo: getInfo
  }
}
