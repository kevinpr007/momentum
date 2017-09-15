[
  '{{repeat(100, 100)}}',
  {
    firstName: '{{firstName()}}',
    lastName: '{{surname()}}',
    email: '{{email()}}',
    dob: '{{date(new Date(1990, 0, 1), new Date(2016, 0, 1), "YYYY-MM-dd hh:mm:ss")}}',
    password: '{{state()}}{{integer(10000, 20000)}}',
    salt: '{{guid()}}',
    resetPasswordToken: '{{guid()}}',
    resetPasswordExpires: '',
    phone: '{{integer(1000000000, 1999999999)}}',
    roles: [
      '{{repeat(1, 2)}}',
      {
        name: '{{random("sysAdmin", "Admin", "Manager", "Employee", "User")}}',
        appId: '{{objectId()}}'
      }
    ],
    address: {
      address1: '{{street()}}',
      address2: '{{street()}}',
      city: '{{city()}}',
      state: '{{state()}}',
      zipCode: '{{integer(10000, 90000)}}'
    },
    createdBy: '{{objectId()}}'
  }
]
