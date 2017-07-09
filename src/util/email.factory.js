const config = require('../config/config')

module.exports = (to, subject, html) => {
  const getInfo = () => ({
    from: config.EMAIL,
    to: to,
    subject: subject,
    html: html
  })

  return {
    getInfo
  }
}
