const bunyan = require('bunyan')
const RotatingFileStream = require('bunyan-rotating-file-stream')

let serializer = data => {
  let query = JSON.stringify(data.query)
  let options = JSON.stringify(data.options || {})

  return `db.${data.coll}.${data.method}(${query}, ${options})`
}

module.exports = bunyan.createLogger({
  name: 'StylePoint',
  src: false,
  streams: [
    {
      level: 'info',
      stream: process.stdout
    },
    {
      level: 'error',
      type: 'raw',
      stream: new RotatingFileStream({
        path: './logs/db.log',
        period: '1d',
        totalFiles: 10,
        rotateExisting: true,
        threshold: '5m',
        totalSize: '20m',
        gzip: true
      })
    }],
  serializers: {
    dbQuery: serializer
  }
})
