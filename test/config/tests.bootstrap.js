const chai = require('chai')
chai.use(require('chai-as-promised'))

global.expect = chai.expect
global.should = chai.should()
global.assert = chai.assert

global.sinon = require('sinon')
require('sinon-mongoose')
require('sinon-as-promised')

global.config = require('../../src/config/config')
global.clearModule = require('clear-module')

global.setPagedJson = (req, res) => {
  const host = 'http://localhost'
  const url = '/test'
  res.pagedJson = ([totalCount, data]) => {
    const totalPages = parseInt((totalCount / req.query.pageSize).toFixed())

    return res.json({
      data,
      totalCount,
      totalPages,
      prevPage: req.query.page >= 1
        ? `${host}${url}?page=${parseInt(req.query.page - 1)}` : null,
      nextPage: req.query.page < totalPages
        ? `${host}${url}?page=${parseInt(req.query.page + 1)}` : null
    })
  }

  return res
}
