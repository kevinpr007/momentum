module.exports = {
  getAll (req, res) {
    return res.json([
      {
        'totalPages': 6,
        'totalCount': 62,
        'data': [
          {
            'links': [
              {
                'method': 'GET',
                'rel': 'collection',
                'href': `${req.headers.host}/api/logs`
              },
              {
                'method': 'GET',
                'rel': 'code-filter',
                'href': `${req.headers.host}/api/logs/77479`
              },
              {
                'method': 'GET',
                'rel': 'status-filter',
                'href': `${req.headers.host}/api/logs/`
              }
            ],
            '_id': '592dfb7d0448021a24cdbe7e',
            'message': null,
            'status': null,
            'code': '77479',
            'getError': '77479 - null - null'
          },
          {
            'links': [
              {
                'method': 'GET',
                'rel': 'collection',
                'href': `${req.headers.host}/api/logs`
              },
              {
                'method': 'GET',
                'rel': 'code-filter',
                'href': `${req.headers.host}/api/logs/13770`
              },
              {
                'method': 'GET',
                'rel': 'status-filter',
                'href': `${req.headers.host}/api/logs/`
              }
            ],
            '_id': '592dfb7d0448021a24cdbe77',
            'message': null,
            'status': null,
            'code': '13770',
            'getError': '13770 - null - null'
          },
          {
            'links': [
              {
                'method': 'GET',
                'rel': 'collection',
                'href': `${req.headers.host}/api/logs`
              },
              {
                'method': 'GET',
                'rel': 'code-filter',
                'href': `${req.headers.host}/api/logs/48354`
              },
              {
                'method': 'GET',
                'rel': 'status-filter',
                'href': `${req.headers.host}/api/logs/`
              }
            ],
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

