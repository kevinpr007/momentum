require('./config/mongoose')();
const userService = require('./services/userService')();

console.log(userService.getAll()
    .then(console.log('Hello world!')).catch(err => console.log(err)));