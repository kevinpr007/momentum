const dotenv = require('dotenv')

switch (process.env.NODE_ENV) {
  case 'development':
    dotenv.load({
      path: `${__dirname}/.env_development`
    })
    break
  case 'staging':
    dotenv.load({
      path: `${__dirname}/.env_staging`
    })
    break
  default:
    throw new Error('Error setting the environment variables.\n')
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  SECRET: process.env.SECRET,
  EMAIL: process.env.EMAIL,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_SERVICE: process.env.EMAIL_SERVICE,
  PAGE_SIZE: process.env.PAGE_SIZE,
  EXP_SECONDS: process.env.EXP_SECONDS,
  TOKEN_EXP_TIME: process.env.TOKEN_EXP_TIME
}
