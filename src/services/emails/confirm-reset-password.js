module.exports = (host, token) => {
  const getTemplate = () => ({
    subject: 'Style Point: Reset your password',
    html: `
        <p>
            You are receiving this because you (or someone else) have requested the reset of the password for your account.
            <br>Please click on the following link, or paste this into your browser to complete the process:<br><br>
            ${host}?resetPasswordToken=${token}<br><br>
            If you did not request this, please ignore this email and your password will remain unchanged.
        </p>
    `
  })

  return {
    getTemplate
  }
}
