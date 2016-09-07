const config = require('./env');
const mongoose = require('mongoose');
const bunyan = require('bunyan');

let serializer = data => {
    let query = JSON.stringify(data.query);
    let options = JSON.stringify(data.options || {});

    return `db.${data.coll}.${data.method}(${query}, ${options});`;
};

let logger = bunyan.createLogger({
    name: 'StylePoint',
    src: false,
    streams: [{path: `${__dirname}/db.log`}],
    serializers: {
        dbQuery: serializer
    }
});

mongoose.set('debug', (coll, method, query, doc, options) => {
    let set = {
        coll: coll,
        method: method,
        query: query,
        doc: doc,
        options: options
    };

    logger.info({
        dbQuery: set
    });
});

mongoose.connection.on('error', err => logger.error(err));

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