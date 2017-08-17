module.exports = () => {
  const getIndex = (req, res, next) => res.redirect('/api-docs')

  return {
    getIndex
  }
}
