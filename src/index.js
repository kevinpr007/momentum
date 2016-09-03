require('./config/mongoose')();
const userService = require('./services/userService')();

console.log(userService.getAll());