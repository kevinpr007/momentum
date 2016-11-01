;(function () {
  var form = $('.form')
  var validatePasswords = function () {
    var validator = form.validate({
      rules: {
        currentPassword: {
          required: true,
          minlength: 6
        },
        newPassword: {
          required: true,
          minlength: 6
        },
        confirmPassword: {
          required: true,
          equalTo: '#newPassword'
        }
      }
    })
    return validator.form()
  }

  form.submit(function (e) {
    var submit = $('button[type="submit"]')

    submit.attr('disabled', 'disabled')
    e.preventDefault()

    if (validatePasswords()) {
      $.ajax({
        type: 'POST',
        url: '/reset-password',
        data: form.serialize(),
        success: function (data) {
          $('#result').text('Your password was successfully updated.')
            .addClass('pull-right').show().delay(5000).fadeOut()
        },
        error: function (error) {
          $('#result').text(JSON.parse(error.responseText).message)
            .addClass('pull-right').addClass('error')
            .show().delay(5000).fadeOut()
          submit.removeAttr('disabled')
        }
      }).done(function () {
        setTimeout(function () {
          window.location = '/'
        }, 3000)
      })
    } else {
      submit.removeAttr('disabled')
    }
  })
}())
