describe('Email factory tests', () => {

  const factory = require('../../src/helpers/email.factory')

  describe('Given a base information to send an email', () => {
    context('when passing an object with all email properties', () => {
      it('will generate an email template with correct mapping of properties', sinon.test(function (done) {
        const to = 'from@stylepoint.com'
        const subject = 'Test subject'
        const html = '<p>Template</p>'

        let emailInfo = factory(to, subject, html).getInfo()

        assert.notEqual(emailInfo, null)
        expect(emailInfo.to).to.be.equal(to)
        expect(emailInfo.subject).to.be.equal(subject)
        expect(emailInfo.html).to.be.equal(html)
        done()
      }))
    })
  })
})
