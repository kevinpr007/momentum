const express = require('express');
const router = express.Router();
const path = require('path');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
let app = express();

class ServerConfig {
    constructor() {
        this.appConfig();
        this.routeConfig();
        this.errorConfig();
    }

    appConfig() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, 'public')));
    }

    routeConfig() {
        app.use('/api', router);
        //require('../routes/user.routes')(router);

        app.use((req, res, next) => {
            let err = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }

    errorConfig() {
        if (app.get('env') === 'development') {
            app.use((err, req, res, next) => {
                res.status(err.status || 500);
                res.render('error', {
                    message: err.message,
                    error: err
                });
            });
        }

        app.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });
    }

    static bootstrap() {
        return new ServerConfig();
    }
}

ServerConfig.bootstrap();

module.exports = app;