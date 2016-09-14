const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const BunyanMiddleware = require('bunyan-middleware');

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
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(favicon('./public/img/favicon.ico'));
    app.use(express.static(path.join(__dirname, 'public')));

    /**
     * Auth Config
     */
    //app.use(passport.initialize());
    passport.authenticate('local', {session: false});
    passport.authenticate('local', {session: false});

    /**
     * Routing Config
     */
    app.use('/api', router);
    require('../routes/user.routes')(router);
    app.use((req, res, next) => {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    /**
     * CORS Config
     */
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
    });

    /**
     * Global Error Config
     */
    app.use((err, req, res, next) => {
        logger.error(err);
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });

    return app;
};