[
  '{{repeat(100, 100)}}',
  {
    email: '{{email()}}',
    password: '{{state()}}{{integer(10000, 20000)}}',
    firstName: '{{firstName()}}',
    lastName: '{{surname()}}',
    address: {
      address1: '{{street()}}',
      city: '{{city()}}',
      state: '{{state()}}',
      zipCode: '{{integer(100, 10000)}}'
    }
  }
]
