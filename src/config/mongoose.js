const config = require('./config');
const mongoose = require('mongoose');
let winston = require('winston');

let logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            filename: './config/db.log',
            level: 'debug',
            timestamp: true
        })
    ]
});

mongoose.set('debug', (collectionName, method, query, doc, options) => {
    logger.info(`collection: ${collectionName} 
                 method: ${method}
                 query: ${query}
                 doc: ${doc}
                 options: ${options}`);
});

module.exports = () => {
    require('../models/user.server.model');
    require('../models/schedule.server.model');
    require('../models/workshift.server.model');
    require('../models/location.server.model');
    require('../models/service.server.model');

    return {
        logger: logger,
        connect: mongoose.connect(config('SP_DB_URL'))
    };
};