const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'

if (ENV === 'development') {
  dotenv.load({
    path: `${__dirname}/.env`
  })
}

const config = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    SECRET: process.env.SECRET
};

module.exports = (key) => {
  if (!key) return config
  return config[key]
}
