(function () {
  var form = $('.form')
  var validatePasswords = function () {
    var validator = form.validate({
      rules: {
        currentPassword: 'required',
        newPassword: 'required',
        confirmPassword: {
          equalTo: '#newPassword'
        }
      },
      messages: {
        currentPassword: 'Enter your current password.',
        newPassword: 'Enter your new password.'
      }
    })
    if (validator.form()) {
      console.log('Sucess')
    }
  }

  form.submit(function (e) {
    e.preventDefault()
    validatePasswords()
  })
}())