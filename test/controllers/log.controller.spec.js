const logService = require('../../src/services/log.service')
let Log = require('../../src/models/logs.server.model')
var httpMocks = require('node-mocks-http');
var request22 = require('dupertest')


describe('Log controller test', () => {

// /logs
// /logs/code/:code
// /logs/status/:status

  describe('Given a request to get all logs in the system', () => {
    it.only('returns an array of all logs in Database', sinon.test(function (done) {
        
        let logArr = [new Log({code: '200'}), new Log({code: '201'})]
        let resultTest = Promise.resolve(logArr)
        
        const namespace = {
          Service: require('../../src/services/log.service')
        };
      
        let object = {
          getAll() {
            return resultTest
          }
        }

        var req = httpMocks.createRequest()
        var res = httpMocks.createResponse({eventEmitter: require('events').EventEmitter})

        sinon.stub(namespace, 'Service').returns(object);
        const logController = require('../../src/controllers/log.controller')(namespace.Service())
        
        function next(arg){
          
          done(arg)
          
          // expect(1).to.equal(30)
          // expect.verify()
          // done()
          // return new Error("asdasdasd")
          
          // try {
          //   // expect(args).to.be.a('Error')
          //   assert.notEqual(1, 1)
          // } catch (err) {
          //   done(err) 
          // }
         }

        res.on('end', function() {
          let data = JSON.parse(res._getData())      
          expect(namespace.Service.calledOnce).to.equal(true)
          res._isJSON().should.be.true
          expect(data[0].code).to.equal('200')
          expect(data[1].code).to.equal('208')
          done()
        })




  logController.getAllLogs(req, res, next)  

    }))

    it('returns an error')
  })







  // api/auth
  describe('Given a user requesting authentication', () => {
    it('returns Bad Request (400) and will receive a json with error providing invalid credentials')
    it('returns Internal Server Error (500) and will receive a json with error providing incomplete arguments')
    it('returns Ok (200) and will receive a json with JWT token providing valid credentials')
  })

  // api/reset-password
  describe('Given a user requesting to reset password', () => {
    it('returns Not Found (404) for non-existing users')
    it('returns Ok (200) with json containing email confirmation providing a valid email')
  })

  // api/confirm-reset-password/:token
  describe('Given a user requesting to reset password via email confirmation', () => {
    it('returns Not Found (404) if token is not inside route')
    it('returns Ok (200) with reset-password page')
  })

  // api/complete-reset-password
  describe('Given a user resetting password via reset-password page', () => {
    it('returns Unprocessable Entity (422) providing an invalid token')
    it('returns Bad Request (400) providing invalid current password')
    it('returns Bad Request (400) providing invalid confirmation password')
    it('returns Ok (200) with json containing email confirmation providing a valid request')
  })
})
