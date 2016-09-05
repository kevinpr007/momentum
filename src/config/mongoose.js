const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
    return {
        connect: mongoose.connect(config('SP_DB_URL')),
        disconnect: mongoose.disconnect()
    };
};