describe('Email factory tests', () => {
  describe('Given a base information', () => {

    const to = 'from@stylepoint.com'
    const subject = 'Test subject'
    const html = '<p>Template</p>'
    const factory = require('../../src/helpers/email.factory')

    it('will generate an email template', sinon.test(function (done) {
      let emailInfo = factory(to, subject, html).getInfo()

      assert.notEqual(emailInfo, null)
      expect(emailInfo.to).to.be.equal(to)
      expect(emailInfo.subject).to.be.equal(subject)
      expect(emailInfo.html).to.be.equal(html)
      done()
    }))
  })
})
