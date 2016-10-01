module.exports = params => {
  let getTemplate = () => {
    let template = {
      subject: 'Style Point: New Account',
      html: `
        <p>
            Hi ${params[0]} ${params[1]}!<br><br>

            Welcome to Style Point! Thanks so much for joining us. You’re on your way to super-productivity and beyond!
            Click here to go: http://${params[2]}

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
