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
  TOKEN_LIFE: process.env.TOKEN_LIFE,
  SALT_FACTOR: process.env.SALT_FACTOR,
  PASSWORD_LENGHT: process.env.PASSWORD_LENGHT,
  RANDOM_BYTES: process.env.RANDOM_BYTES,
  PAGE_SIZE: process.env.PAGE_SIZE,
  EXP_SECONDS: process.env.EXP_SECONDS
}
