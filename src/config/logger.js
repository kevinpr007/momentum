const bunyan = require('bunyan');
const RotatingFileStream = require('bunyan-rotating-file-stream');
const BunyanMiddleware = require('bunyan-middleware');

let serializer = data => {
    let query = JSON.stringify(data.query);
    let options = JSON.stringify(data.options || {});

    return `db.${data.coll}.${data.method}(${query}, ${options});`;
};

let logger = bunyan.createLogger({
    name: 'StylePoint',
    src: false,
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'error',
            type: 'raw',
            stream: new RotatingFileStream({
                path: './logs/db.log',
                period: '1d',
                totalFiles: 10,
                rotateExisting: true,
                threshold: '5m',
                totalSize: '20m',
                gzip: true
            })
        }],
    serializers: {
        dbQuery: serializer
    }
});

let expressLogger = BunyanMiddleware({
    headerName: 'X-Request-Id',
    propertyName: 'reqId',
    logName: 'req_id',
    obscureHeaders: [],
    logger: logger
});

module.exports = {
    mongoLogger: logger,
    expressLogger: expressLogger
};