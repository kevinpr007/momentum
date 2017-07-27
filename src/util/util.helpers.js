/**
 * @desc Returns remaining time (in seconds) of date passed as argument.
 * @param {Date} endtime
 * @returns {number}
 */
const getRemainingTime = endTime => {
  var startDate = new Date()
  return (endTime.getTime() - startDate.getTime()) / 1000
}

module.exports = {
  getRemainingTime
}