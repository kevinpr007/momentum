const express = require('express');
const router = express.Router();
const path = require('path');
const env = require('./env');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const BunyanMiddleware = require('bunyan-middleware');
const HttpStatus = require('http-status-codes');

module.exports = logger => {
    /**
     * Global App Config
     */
    let app = express();

    app.use(BunyanMiddleware({
        headerName: 'X-Request-Id',
        propertyName: 'reqId',
        logName: 'req_id',
        obscureHeaders: [],
        logger: logger
    }));

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: env('SESSION_SECRET')
    }));

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(cookieParser());

    app.use(favicon('./public/img/favicon.ico'));

    app.use(express.static(path.join(__dirname, 'public')));

    /**
     * Routing Config
     */
    app.use('/api', router);

    require('../routes/user.routes')(router);
    app.use((req, res, next) => {
        let err = new Error(HttpStatus.getStatusText(HttpStatus.NOT_FOUND));
        err.status = HttpStatus.NOT_FOUND;
        next(err);
    });

    /**
     * Global Error Config
     */
    app.use((err, req, res, next) => {
        logger.error(err);
        res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR);
        res.json({
            message: err.message,
            error: err
        });
    });

    return app;
};