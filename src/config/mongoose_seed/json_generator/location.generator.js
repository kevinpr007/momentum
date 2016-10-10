[
  '{{repeat(100, 100)}}',
  {
    name: '{{firstName()}} {{surname()}} {{lorem(2, "words")}} {{guid()}}',
    description: '{{lorem(1, "paragraphs")}}',
    urlLocation: 'http://www.{{firstName()}}.com',
    address: {
      address1: '{{street()}}',
      address2: '{{street()}}',
      city: '{{city()}}',
      state: '{{state()}}',
      zipCode: '{{integer(10000, 10000)}}'
    },
    createdBy: '{{objectId()}}'
  }
]
