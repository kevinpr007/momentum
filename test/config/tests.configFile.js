const chai = require('chai')
chai.use(require('chai-as-promised'))

global.expect = chai.expect
global.should = chai.should()
global.assert = chai.assert

global.sinon = require('sinon')
require('sinon-mongoose')
require('sinon-as-promised')
