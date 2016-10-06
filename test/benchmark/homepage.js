const siege = require('siege')

siege()
  .on(8080)
  .for(100).times
  .get('/')
  .attack();
