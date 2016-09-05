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
    return {
        connect: mongoose.connect(config('SP_DB_URL')),
        disconnect: mongoose.disconnect(),
        logger: logger
    };
};