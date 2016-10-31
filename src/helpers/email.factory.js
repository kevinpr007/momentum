const config = require('../config/config')().getVariable()

module.exports = (to, subject, html) => {
  let getInfo = () => {
    let info = {
      from: config.EMAIL,
      to: to,
      subject: subject,
      html: html
    }

    return info
  }

  return {
    getInfo: getInfo
  }
}
