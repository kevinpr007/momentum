/**
 * @desc Returns remaining time (in seconds) of date passed as argument.
 * @param {Date} endtime
 * @returns {number}
 */
const getRemainingTime = endTime => {
  const SECONDS = 1000
  const startDate = new Date()
  return (endTime.getTime() - startDate.getTime()) / SECONDS
}

module.exports = {
  getRemainingTime
}
