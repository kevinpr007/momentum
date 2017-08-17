module.exports = {
  getAll (req, res) {
    return res.json([
      {
        'totalPages': 6,
        'totalCount': 62,
        'data': [
          {
            '_id': '592dfb7d0448021a24cdbe7e',
            'message': null,
            'status': null,
            'code': '77479',
            'getError': '77479 - null - null'
          },
          {
            '_id': '592dfb7d0448021a24cdbe77',
            'message': null,
            'status': null,
            'code': '13770',
            'getError': '13770 - null - null'
          },
          {
            '_id': '592dac87e862b32b70e9cbbf',
            'message': null,
            'status': null,
            'code': '48354',
            'getError': '48354 - null - null'
          }
        ],
        'prevPage': null,
        'nextPage': `${req.headers.host}/api/logs?page=1`
      }
    ])
  }
}
