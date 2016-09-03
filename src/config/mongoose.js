const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
    require('../models/user.server.model');
    require('../models/schedule.server.model');
    require('../models/workshift.server.model');

    return {
        connect: mongoose.connect(config('SP_DB_URL')),
        disconnect: mongoose.disconnect()
    };
};