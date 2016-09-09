require('./config/mongoose')();
const logger = require('./config/logger');
const userService = require('./services/userService')(logger);

console.log(userService.getAll()
    .then(console.log('Hello world!')).catch(err => console.log(err)));