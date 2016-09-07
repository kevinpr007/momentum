const config = require('./env');
const mongoose = require('mongoose');

module.exports = () => {
    require('../models/user.server.model');
    require('../models/schedule.server.model');
    require('../models/workshift.server.model');
    require('../models/location.server.model');
    require('../models/service.server.model');

    return {
        connect: mongoose.connect(config('DB_URL'))
    };
};