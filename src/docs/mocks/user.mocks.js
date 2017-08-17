module.exports = {
  getAll (req, res) {
    return res.json([
      {
        'totalPages': 1,
        'totalCount': 2,
        'data': [
          {
            '_id': '592dfb7d0448021a24cdbe7f',
            'firstName': 'Brain',
            'lastName': 'Konopelski',
            'email': 'jeremy_boyer99@hotmail.com',
            'fullName': 'Brain Konopelski'
          },
          {
            '_id': '592dfb7d0448021a24cdbe78',
            'firstName': 'Fae',
            'lastName': 'Shanahan',
            'email': 'marge.powlowski@yahoo.com',
            'fullName': 'Fae Shanahan'
          }
        ],
        'prevPage': null,
        'nextPage': `${req.headers.host}/api/users?page=1`
      }
    ])
  }
}
