const dotenv = require('dotenv');
const ENV = process.env.NODE_ENV || 'development';

if (ENV === 'development') dotenv.load({
    path: '../src/config/.env'
});

const config = {
    ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    TEST_DB_URL: process.env.TEST_DB_URL,
    ADMIN_DB_URL: process.env.ADMIN_DB_URL
};

module.exports = (key) => {
    if (!key) return config;

    return config[key];
};