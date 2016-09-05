let mongoose = require('./config/mongoose')();
const userService = require('./services/userService')(mongoose.logger);

console.log(userService.getAll());