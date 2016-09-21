const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'

if (ENV === 'development') {
  dotenv.load({
    path: `${__dirname}/.env`
  })
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  SECRET: process.env.SECRET,
  EMAIL: process.env.EMAIL,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_SERVICE: process.env.EMAIL_SERVICE,
  TOKEN_LIFE: process.env.TOKEN_LIFE,
  SALT_FACTOR: process.env.SALT_FACTOR,
  PASSWORD_LENGHT: process.env.PASSWORD_LENGHT
}
