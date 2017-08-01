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

/**
 * @desc Converts UTC Epoch to a Date object.
 * @param {number} epoch
 * @returns {Date}
 */
const getDateFromEpoch = epoch => {
  const MILLISECONDS = 1000
  return new Date(epoch * MILLISECONDS)
}

module.exports = {
  getRemainingTime,
  getDateFromEpoch
}
