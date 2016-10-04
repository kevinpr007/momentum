module.exports = (user, host) => {
  let getTemplate = () => {
    let template = {
      subject: 'Style Point: New Account',
      html: `
        <p>
            Hi ${user.firstName} ${user.lastName}!<br><br>

            Welcome to Style Point! Thanks so much for joining us. You’re on your way to super-productivity and beyond!
            Click here to go: http://${host}

            <br><br>Have any questions? Just shoot us an email! We’re always here to help.<br><br>

            Cheerfully yours,<br>
            The Style Point Team
        </p>
    `
    }
    return template
  }

  return {
    getTemplate: getTemplate
  }
}
