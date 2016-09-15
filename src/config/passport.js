module.exports = () => {
  require('./strategies/local')()
  require('./strategies/jwt')()
}
