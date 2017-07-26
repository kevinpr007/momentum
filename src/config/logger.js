const bunyan = require('bunyan')
const bFormat = require('bunyan-format')
const RotatingFileStream = require('bunyan-rotating-file-stream')

const formatOut = bFormat({
  outputMode: 'short',
  levelInString: true
})

const serializer = data => {
  const query = JSON.stringify(data.query)
  const options = JSON.stringify(data.options || {})

  return `db.${data.coll}.${data.method}(${query}, ${options})`
}

module.exports = bunyan.createLogger({
  name: 'StylePoint',
  src: false,
  streams: [
    {
      level: 'info',
      stream: formatOut
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
