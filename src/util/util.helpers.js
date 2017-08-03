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

/**
 * @desc Generates an error for invalid API calls
 * @param {string} [message='Error']
 * @param {number} [status=500]
 * @throws {Error}
 */
const generateError = (message = 'Error', status = 500) => {
  const error = new Error(message)
  error.status = status

  throw error
}

module.exports = {
  getRemainingTime,
  getDateFromEpoch,
  generateError
}
