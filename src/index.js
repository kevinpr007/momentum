const mongoose = require('mongoose');
const service = require('./services/connectionService')();
const userService = require('./services/userService');

console.log(userService(service.connect).getAll());
mongoose.disconnect();