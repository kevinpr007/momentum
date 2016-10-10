[
  '{{repeat(100, 100)}}',
  {
    name: '{{lorem(1, "words")}}',
    description: '{{lorem(1, "paragraphs")}}',
    price: '{{floating(10, 60, 2, "0.00")}}',
    time: '{{integer(20, 60)}}',
    user: '{{objectId()}}',
    createdBy: '{{objectId()}}'
  }
]
