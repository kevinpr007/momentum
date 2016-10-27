describe('Email service test', () => {

  const transporter = require('../../src/config/nodemailer')
  const emailService = require('../../src/services/email.service')

  describe('Given an email template', () => {
    context('when proper smtp configuration is provided', () => {
      it('will generate an email successfully', sinon.test(function (done) {
        let template = {
          from: 'from@stylepoint.com',
          to: 'to@stylepoint.com',
          subject: 'Subject Email Test',
          html: `<p>Test Email</p>`
        }

        this.stub(transporter, 'sendMail').yields(null, {success: true})

        emailService(template).send().then(result => {
          assert.notEqual(result, null)
          expect(result).to.be.an('object')
          expect(result.success).to.be.equal(true)
          expect(transporter.sendMail.callCount).to.equal(1)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when there are smtp issues', () => {
      it('will throw an error', sinon.test(function (done) {
        let template = {
          from: 'from@stylepoint.com',
          to: 'to@stylepoint.com',
          subject: 'Subject Email Test',
          html: `<p>Test Email</p>`
        }
        let result = new Error('Error Message')
        result.success = false

        this.stub(transporter, 'sendMail').yields(result, null)

        emailService(template).send().catch(err => {
          assert.notEqual(err, null)
          expect(err).to.be.an('Error')
          expect(err.success).to.be.equal(false)
          expect(transporter.sendMail.callCount).to.equal(1)
          done()
        })
      }))
    })
  })
})
