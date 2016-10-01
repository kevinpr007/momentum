module.exports = params => {
  let getTemplate = () => {
    let template = {
      subject: 'Style Point: Reset your password',
      html: `
        <p>
            You are receiving this because you (or someone else) have requested the reset of the password for your account.
            <br>Please click on the following link, or paste this into your browser to complete the process:<br><br>
            http://${params[0]}/api/reset-password/${params[1]}<br><br>
            If you did not request this, please ignore this email and your password will remain unchanged.
        </p>
    `
    }
    return template
  }

  return {
    getTemplate: getTemplate
  }
}
