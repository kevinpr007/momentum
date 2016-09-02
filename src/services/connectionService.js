const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const config = require('../config/config');

let connectionService = () => {
    return {
        connect: mongoose.connect(config('SP_DB_URL')),
        disconnect: mongoose.disconnect()
    };
};

module.exports = connectionService;