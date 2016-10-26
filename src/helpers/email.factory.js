const config = require('../config/config')()

module.exports = (to, subject, html) => {
  let getInfo = () => {
    let info = {
      from: config.getVariable().EMAIL,
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
