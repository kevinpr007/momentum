const express = require('express');
const router = express.Router();
const path = require('path');
const env = require('./env');
const logger = require('./logger');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const BunyanMiddleware = require('bunyan-middleware');

let app = express();

class ServerConfig {
    constructor() {
        this.appConfig();
        this.routeConfig();
        this.errorConfig();
    }

    appConfig() {
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
    }

    routeConfig() {
        app.use('/api', router);
        require('../routes/user.routes')(router);
        app.use((req, res, next) => {
            let err = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }

    errorConfig() {
        app.use((err, req, res, next) => {
            logger.error(err);
            res.status(err.status || 500);
            res.json({
                message: err.message,
                error: err
            });
        });
    }

    static bootstrap() {
        return new ServerConfig();
    }
}

module.exports = () => {
    ServerConfig.bootstrap();
    return app;
};