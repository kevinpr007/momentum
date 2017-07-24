module.exports = (start, tag) => {
  if (start) {
    let endTime = process.hrtime(start)
    let duration = parseInt((endTime[0] * 1000) + (endTime[1] / 1000000))
    console.log(`Duration for ${tag}: ${duration} msec`)
  } else {
    return process.hrtime()
  }
}

/*
 * The purpose of this module is to monitor the processing time of our functions.
 * For more info on `process.hrtime()`:
 * https://nodejs.org/api/process.html#process_process_hrtime_time
 *
 * Ex:
 * const monitor = require(./monitor)
 *
 * function bar () {
 *   var start = monitor()
 *   foreach () {
 *     ...
 *   }
 *   monitor(start, 'bar')
 * }
 */
