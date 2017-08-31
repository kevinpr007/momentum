const mongoDB = require('../../config/mongoose.collections.json')

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': mongoDB.Model.Workshift,
    'documents': [
      {
        'startDate': '2014-02-24 12:53:52',
        'endDate': '2017-07-24 01:33:16',
        'userId': '59a755b57826db094764bcea',
        'createdBy': '59a755b5c043db9cef45f26a'
      },
      {
        'startDate': '2015-11-13 08:47:57',
        'endDate': '2015-04-27 08:44:36',
        'userId': '59a755b5d2d1b93abffe9167',
        'createdBy': '59a755b5447e93716fd60ba9'
      },
      {
        'startDate': '2015-11-25 05:07:19',
        'endDate': '2015-11-14 09:03:22',
        'userId': '59a755b5573f6e2f43dddbcd',
        'createdBy': '59a755b597ea80ebf56306ad'
      },
      {
        'startDate': '2017-01-13 06:54:45',
        'endDate': '2014-02-02 05:36:49',
        'userId': '59a755b5f87eda833394ba5d',
        'createdBy': '59a755b5ac0675e9c61297ba'
      },
      {
        'startDate': '2015-06-26 07:29:13',
        'endDate': '2017-03-04 06:33:32',
        'userId': '59a755b5027732b8c6f04e7c',
        'createdBy': '59a755b531895ef959adb252'
      },
      {
        'startDate': '2014-12-06 06:40:14',
        'endDate': '2015-03-04 01:33:51',
        'userId': '59a755b5ee09238314ffe4cd',
        'createdBy': '59a755b5e6d83d216f3e5099'
      },
      {
        'startDate': '2015-03-10 10:04:38',
        'endDate': '2016-03-15 05:05:08',
        'userId': '59a755b546c7b706d87f4820',
        'createdBy': '59a755b5dfbaf43c42f1945d'
      },
      {
        'startDate': '2015-08-14 06:42:35',
        'endDate': '2017-03-14 06:19:49',
        'userId': '59a755b582fcdef934924464',
        'createdBy': '59a755b5a57bc1703cc9f84b'
      },
      {
        'startDate': '2014-08-13 05:03:37',
        'endDate': '2016-05-18 11:13:08',
        'userId': '59a755b5d76a0802b96bf2f1',
        'createdBy': '59a755b55041329e8b6624d1'
      },
      {
        'startDate': '2015-03-07 02:29:14',
        'endDate': '2017-01-30 04:05:00',
        'userId': '59a755b5cbc84813df040232',
        'createdBy': '59a755b54f2beb74bf6e7adf'
      },
      {
        'startDate': '2016-06-07 12:59:36',
        'endDate': '2017-07-31 05:22:48',
        'userId': '59a755b5e2609dd0aebce0a7',
        'createdBy': '59a755b51868fdcf5501bce1'
      },
      {
        'startDate': '2015-06-18 07:14:20',
        'endDate': '2014-04-06 07:21:31',
        'userId': '59a755b563cfbdbf22f5f5f9',
        'createdBy': '59a755b53af7902b9e84a714'
      },
      {
        'startDate': '2016-12-20 06:11:42',
        'endDate': '2017-05-01 10:33:16',
        'userId': '59a755b58a500fd8e14451d3',
        'createdBy': '59a755b5c5b69e12272d0223'
      },
      {
        'startDate': '2015-03-23 04:02:19',
        'endDate': '2017-05-04 08:36:50',
        'userId': '59a755b5b3c29ed414650e99',
        'createdBy': '59a755b5668d3ab154182065'
      },
      {
        'startDate': '2017-08-01 08:01:24',
        'endDate': '2016-05-08 09:00:50',
        'userId': '59a755b5608f170a7ed49db3',
        'createdBy': '59a755b5beb790dc762d0e26'
      },
      {
        'startDate': '2015-11-27 09:22:12',
        'endDate': '2015-02-03 01:34:51',
        'userId': '59a755b5bd2534413feee4eb',
        'createdBy': '59a755b5043b914bcf844eba'
      },
      {
        'startDate': '2016-05-24 06:40:12',
        'endDate': '2017-08-25 04:51:32',
        'userId': '59a755b554338d900dd2163e',
        'createdBy': '59a755b56871e5afa0970061'
      },
      {
        'startDate': '2015-04-27 09:38:21',
        'endDate': '2014-08-03 03:57:19',
        'userId': '59a755b5ae2ef095d401b0e7',
        'createdBy': '59a755b5335b02819b840d37'
      },
      {
        'startDate': '2017-04-06 12:52:49',
        'endDate': '2015-08-03 02:08:31',
        'userId': '59a755b50df1b627988da15f',
        'createdBy': '59a755b56f6ed2e802a37012'
      },
      {
        'startDate': '2016-01-05 09:24:25',
        'endDate': '2016-07-12 10:55:33',
        'userId': '59a755b53d23cd5c1e47a9b4',
        'createdBy': '59a755b56b80b52e536fafe1'
      },
      {
        'startDate': '2014-06-10 03:53:29',
        'endDate': '2016-08-30 06:39:46',
        'userId': '59a755b588e543e4448f24fd',
        'createdBy': '59a755b5d3c275fc53a3a92c'
      },
      {
        'startDate': '2016-02-07 09:47:21',
        'endDate': '2017-06-15 08:15:53',
        'userId': '59a755b5b3bb11915de44cc8',
        'createdBy': '59a755b5116e42622bf1732a'
      },
      {
        'startDate': '2015-03-28 05:10:54',
        'endDate': '2014-12-13 10:22:36',
        'userId': '59a755b505e23561cc5cf6b1',
        'createdBy': '59a755b55718891080a3043e'
      },
      {
        'startDate': '2014-11-17 08:55:21',
        'endDate': '2016-03-30 04:56:35',
        'userId': '59a755b5a82181cf8fed0831',
        'createdBy': '59a755b52c915b909dff770b'
      },
      {
        'startDate': '2015-10-31 07:17:36',
        'endDate': '2016-04-16 04:17:19',
        'userId': '59a755b59f60be2ef5afac81',
        'createdBy': '59a755b515b639393a75bf52'
      },
      {
        'startDate': '2015-04-10 09:40:24',
        'endDate': '2015-06-25 08:25:28',
        'userId': '59a755b5812947c54a00261d',
        'createdBy': '59a755b584c6d8a548794f75'
      },
      {
        'startDate': '2014-06-02 08:24:46',
        'endDate': '2014-09-13 11:55:29',
        'userId': '59a755b574921aa9bc557d60',
        'createdBy': '59a755b541a89ce52bbd75f6'
      },
      {
        'startDate': '2016-01-06 11:17:13',
        'endDate': '2016-02-17 01:08:06',
        'userId': '59a755b5fb970386c6e12c1a',
        'createdBy': '59a755b5b6ff7ffbc5409202'
      },
      {
        'startDate': '2017-02-13 08:42:36',
        'endDate': '2014-10-27 08:08:46',
        'userId': '59a755b580aa03599ef3604e',
        'createdBy': '59a755b537de97052a6c0cc4'
      },
      {
        'startDate': '2014-03-12 09:12:25',
        'endDate': '2014-09-11 03:24:48',
        'userId': '59a755b5ff1b3961a8630e98',
        'createdBy': '59a755b59efa5c855f5699f3'
      },
      {
        'startDate': '2014-03-07 10:26:34',
        'endDate': '2015-06-08 10:04:59',
        'userId': '59a755b50f80755c81092fd1',
        'createdBy': '59a755b5912b24b271027b60'
      },
      {
        'startDate': '2014-07-19 11:34:51',
        'endDate': '2017-06-01 01:42:51',
        'userId': '59a755b50fbb6b9609bd80d7',
        'createdBy': '59a755b5015d325d5995deb2'
      },
      {
        'startDate': '2015-10-17 07:46:35',
        'endDate': '2015-11-25 06:06:12',
        'userId': '59a755b56a628756cbcc2240',
        'createdBy': '59a755b50022c1d7a49b03c4'
      },
      {
        'startDate': '2016-02-21 10:07:26',
        'endDate': '2014-02-07 10:09:22',
        'userId': '59a755b5bdd59486a9d6dcd9',
        'createdBy': '59a755b5d6ffeee34005097e'
      },
      {
        'startDate': '2017-07-11 02:33:17',
        'endDate': '2017-06-18 05:18:52',
        'userId': '59a755b55b0f23f64dc74497',
        'createdBy': '59a755b5c06f7436c295b66d'
      },
      {
        'startDate': '2014-06-02 12:43:57',
        'endDate': '2014-08-04 07:57:59',
        'userId': '59a755b5883aef84eecd725b',
        'createdBy': '59a755b53b55a1d13fb0eb4b'
      },
      {
        'startDate': '2017-08-23 02:06:52',
        'endDate': '2016-08-27 12:23:05',
        'userId': '59a755b5c6e84f45ea2347cd',
        'createdBy': '59a755b590a7d3d801577960'
      },
      {
        'startDate': '2017-04-12 04:59:50',
        'endDate': '2015-06-12 10:59:35',
        'userId': '59a755b56c2bfd0c0d39c7c4',
        'createdBy': '59a755b51370bb7f601738ee'
      },
      {
        'startDate': '2014-06-07 03:05:54',
        'endDate': '2015-06-07 03:01:15',
        'userId': '59a755b541a41e7813d9822d',
        'createdBy': '59a755b5a4084493ee4a7ae8'
      },
      {
        'startDate': '2014-10-06 07:30:05',
        'endDate': '2014-04-03 10:42:34',
        'userId': '59a755b5b04d2401cb6f6621',
        'createdBy': '59a755b57b0440c7de2fd3a9'
      },
      {
        'startDate': '2015-02-15 07:37:25',
        'endDate': '2015-04-04 12:18:51',
        'userId': '59a755b54d1cf0cc84b3e09a',
        'createdBy': '59a755b5ebaab53d925ff61b'
      },
      {
        'startDate': '2017-02-09 03:47:28',
        'endDate': '2017-04-10 07:12:34',
        'userId': '59a755b536d65e4f7c2447bc',
        'createdBy': '59a755b54d1d5c2f1a57bd71'
      },
      {
        'startDate': '2016-10-21 10:15:08',
        'endDate': '2015-07-25 10:22:57',
        'userId': '59a755b590b2501ca73168c5',
        'createdBy': '59a755b50410d3590320554e'
      },
      {
        'startDate': '2015-01-06 11:05:10',
        'endDate': '2015-03-22 08:31:29',
        'userId': '59a755b5f54c741fda25946c',
        'createdBy': '59a755b5eda9a203fc6acc82'
      },
      {
        'startDate': '2015-02-11 11:02:42',
        'endDate': '2015-02-21 11:13:34',
        'userId': '59a755b5ac0e23a741f7c0eb',
        'createdBy': '59a755b53790777279ce6542'
      },
      {
        'startDate': '2017-01-11 06:53:18',
        'endDate': '2014-05-17 02:24:06',
        'userId': '59a755b53bda4982c602e669',
        'createdBy': '59a755b50852859ae7cd2fa4'
      },
      {
        'startDate': '2014-11-05 08:55:24',
        'endDate': '2016-10-11 05:55:02',
        'userId': '59a755b5ca49edc010dccce8',
        'createdBy': '59a755b51d546e4f72d0f86a'
      },
      {
        'startDate': '2017-08-14 09:39:57',
        'endDate': '2016-09-08 06:06:28',
        'userId': '59a755b5f7880b176c155c0d',
        'createdBy': '59a755b5d5733d9c1c63637b'
      },
      {
        'startDate': '2017-03-05 08:49:33',
        'endDate': '2014-03-05 08:33:31',
        'userId': '59a755b52ab616f81c34d2bf',
        'createdBy': '59a755b5951ced554cce7aef'
      },
      {
        'startDate': '2014-03-11 12:54:49',
        'endDate': '2014-11-24 02:12:40',
        'userId': '59a755b5c95f0136c20c1c6e',
        'createdBy': '59a755b5a914b2416cf9b3f5'
      },
      {
        'startDate': '2015-09-12 01:55:21',
        'endDate': '2015-12-26 11:53:49',
        'userId': '59a755b5f88218d3c5bbeadf',
        'createdBy': '59a755b55a359791f4e60c79'
      },
      {
        'startDate': '2016-05-16 01:28:35',
        'endDate': '2014-05-19 11:50:53',
        'userId': '59a755b5db1d675c984de23b',
        'createdBy': '59a755b536b540d10c9485d1'
      },
      {
        'startDate': '2017-02-10 09:24:33',
        'endDate': '2014-01-02 01:28:25',
        'userId': '59a755b5cc2c4828410c0044',
        'createdBy': '59a755b5337e5afa1b248f8a'
      },
      {
        'startDate': '2015-01-09 01:48:10',
        'endDate': '2014-06-21 02:47:26',
        'userId': '59a755b5dc515df10cfa0b88',
        'createdBy': '59a755b5295030b50eda8499'
      },
      {
        'startDate': '2015-09-19 08:20:54',
        'endDate': '2014-11-07 08:11:49',
        'userId': '59a755b590ba1fd7a8880c5f',
        'createdBy': '59a755b53304011f961dfe04'
      },
      {
        'startDate': '2016-09-23 08:16:46',
        'endDate': '2016-10-07 10:29:37',
        'userId': '59a755b518f9ab403c2affd8',
        'createdBy': '59a755b5ac4bf4bf9d131de8'
      },
      {
        'startDate': '2014-03-27 04:08:32',
        'endDate': '2016-12-17 03:47:07',
        'userId': '59a755b5e44cb24c1a5026ef',
        'createdBy': '59a755b58444111423613986'
      },
      {
        'startDate': '2016-12-26 08:10:39',
        'endDate': '2016-10-17 02:27:23',
        'userId': '59a755b5d1170f3355e620de',
        'createdBy': '59a755b507bc9fac89f81b44'
      },
      {
        'startDate': '2014-07-24 04:28:44',
        'endDate': '2016-01-27 10:24:38',
        'userId': '59a755b54f6df723721015fb',
        'createdBy': '59a755b50b5a552996fb16a5'
      },
      {
        'startDate': '2016-02-26 10:09:19',
        'endDate': '2015-03-02 12:49:49',
        'userId': '59a755b5411448c7e771a88b',
        'createdBy': '59a755b5814226dbeb00ab48'
      },
      {
        'startDate': '2016-02-07 04:37:13',
        'endDate': '2016-04-29 05:54:23',
        'userId': '59a755b53f216796c0225d78',
        'createdBy': '59a755b59d9ecb48aacf1d48'
      },
      {
        'startDate': '2016-12-26 08:19:01',
        'endDate': '2016-10-19 06:18:20',
        'userId': '59a755b53e0c98f19180f194',
        'createdBy': '59a755b53b0995b3a09953b7'
      },
      {
        'startDate': '2015-02-13 04:47:11',
        'endDate': '2015-05-24 12:05:43',
        'userId': '59a755b5610d9c8a426e68a6',
        'createdBy': '59a755b5ec901dec47f61b6b'
      },
      {
        'startDate': '2017-04-14 04:52:40',
        'endDate': '2016-04-25 11:08:53',
        'userId': '59a755b5dede269df90b3f8b',
        'createdBy': '59a755b58523e812fa76c103'
      },
      {
        'startDate': '2017-05-13 03:24:41',
        'endDate': '2016-11-21 01:00:19',
        'userId': '59a755b5ded058b00e6c5085',
        'createdBy': '59a755b5627818fbdbd15249'
      },
      {
        'startDate': '2015-12-06 05:08:41',
        'endDate': '2017-07-08 02:58:10',
        'userId': '59a755b548ca67aa24685789',
        'createdBy': '59a755b5ee3baba00c4da847'
      },
      {
        'startDate': '2016-08-27 10:28:24',
        'endDate': '2014-03-25 09:35:25',
        'userId': '59a755b59e788cf2496e3927',
        'createdBy': '59a755b5b9a8585e5379c225'
      },
      {
        'startDate': '2014-07-06 08:34:41',
        'endDate': '2014-05-07 10:02:59',
        'userId': '59a755b541cc5b8fa2b64261',
        'createdBy': '59a755b508b63e74449e6195'
      },
      {
        'startDate': '2016-01-23 10:08:04',
        'endDate': '2016-03-25 02:49:14',
        'userId': '59a755b515746a69bf7777a8',
        'createdBy': '59a755b508002cc9724384bf'
      },
      {
        'startDate': '2014-06-18 05:15:54',
        'endDate': '2016-11-23 03:49:03',
        'userId': '59a755b584a09e4ad11ef216',
        'createdBy': '59a755b5e02e203a3f44a227'
      },
      {
        'startDate': '2015-03-22 09:45:41',
        'endDate': '2015-11-12 02:06:44',
        'userId': '59a755b55229c78c2dba2277',
        'createdBy': '59a755b5de5d1ea4732500b2'
      },
      {
        'startDate': '2017-01-19 02:59:22',
        'endDate': '2016-10-19 04:08:49',
        'userId': '59a755b550cc254f388e367a',
        'createdBy': '59a755b5adedeb40842542e6'
      },
      {
        'startDate': '2014-12-14 07:46:32',
        'endDate': '2015-01-31 09:51:58',
        'userId': '59a755b5e916b0850b1b4e78',
        'createdBy': '59a755b578bb314d36de41ab'
      },
      {
        'startDate': '2015-12-07 07:23:48',
        'endDate': '2016-06-15 04:16:47',
        'userId': '59a755b5d4608378275ab292',
        'createdBy': '59a755b5787f6cd99825f908'
      },
      {
        'startDate': '2016-12-22 08:55:17',
        'endDate': '2016-05-08 07:20:20',
        'userId': '59a755b5d8dff91d43a9fdc4',
        'createdBy': '59a755b5622bd01c99d8c5d9'
      },
      {
        'startDate': '2017-07-08 11:38:08',
        'endDate': '2014-02-06 05:18:42',
        'userId': '59a755b5ec5e03122a0cfa14',
        'createdBy': '59a755b55ef9097423226be1'
      },
      {
        'startDate': '2014-01-01 08:52:47',
        'endDate': '2015-09-24 12:43:08',
        'userId': '59a755b5cb68789a1dd427fa',
        'createdBy': '59a755b55f55b7b3eb127323'
      },
      {
        'startDate': '2017-06-05 12:06:16',
        'endDate': '2015-03-28 08:30:12',
        'userId': '59a755b51713effcae685e67',
        'createdBy': '59a755b5714ee0c39992ce94'
      },
      {
        'startDate': '2015-04-21 08:31:08',
        'endDate': '2016-06-05 09:34:10',
        'userId': '59a755b5da7cdf7f530d844b',
        'createdBy': '59a755b5bfa334ba82234ebc'
      },
      {
        'startDate': '2016-07-16 10:10:29',
        'endDate': '2017-02-09 11:53:39',
        'userId': '59a755b5cef4fea48dd69ffa',
        'createdBy': '59a755b5e26d3c4f97c2c4b3'
      },
      {
        'startDate': '2016-08-21 07:19:02',
        'endDate': '2017-01-14 05:34:11',
        'userId': '59a755b5b15e6232f272803c',
        'createdBy': '59a755b5167cbba916afb51a'
      },
      {
        'startDate': '2016-07-12 09:16:25',
        'endDate': '2015-04-02 10:52:53',
        'userId': '59a755b565994b5da05f9137',
        'createdBy': '59a755b5b060b3f39090fc19'
      },
      {
        'startDate': '2015-03-13 01:34:42',
        'endDate': '2017-06-04 04:30:06',
        'userId': '59a755b5a9c014934e3cb453',
        'createdBy': '59a755b5e976b18c30625a07'
      },
      {
        'startDate': '2014-06-21 08:24:31',
        'endDate': '2014-05-08 08:04:39',
        'userId': '59a755b5aca0c324451eb8b3',
        'createdBy': '59a755b5717361696c1a1d5a'
      },
      {
        'startDate': '2015-12-30 08:59:11',
        'endDate': '2014-03-27 07:07:24',
        'userId': '59a755b56016f31e698bd131',
        'createdBy': '59a755b566007557e20a76e2'
      },
      {
        'startDate': '2014-05-22 07:10:17',
        'endDate': '2016-07-27 09:36:38',
        'userId': '59a755b5370930a942e3c192',
        'createdBy': '59a755b50ff3895a7a7c2674'
      },
      {
        'startDate': '2014-06-02 09:05:15',
        'endDate': '2016-04-28 04:46:00',
        'userId': '59a755b5dec14b0a7c226b3a',
        'createdBy': '59a755b5be68e90d4342c557'
      },
      {
        'startDate': '2016-06-21 04:52:38',
        'endDate': '2015-05-27 01:06:04',
        'userId': '59a755b57b1aa15cdf03e65d',
        'createdBy': '59a755b50fa4456794a47286'
      },
      {
        'startDate': '2017-04-29 12:21:54',
        'endDate': '2016-02-07 09:20:56',
        'userId': '59a755b55ea04939fa92f134',
        'createdBy': '59a755b5b01908d8e96d84aa'
      },
      {
        'startDate': '2014-02-10 10:52:51',
        'endDate': '2016-05-14 07:17:08',
        'userId': '59a755b529cb2ea8ec2c341f',
        'createdBy': '59a755b5f879a401706d0415'
      },
      {
        'startDate': '2014-08-11 11:17:33',
        'endDate': '2016-09-12 10:12:02',
        'userId': '59a755b55f4ea2ef6f5b5974',
        'createdBy': '59a755b565f964ed3c5c6619'
      },
      {
        'startDate': '2017-08-05 05:46:43',
        'endDate': '2016-03-12 12:15:41',
        'userId': '59a755b5da8d5af8ebbd777f',
        'createdBy': '59a755b522a2ae867b21b475'
      },
      {
        'startDate': '2014-03-17 07:42:22',
        'endDate': '2014-06-11 11:52:43',
        'userId': '59a755b501520086e4261a70',
        'createdBy': '59a755b56da0bf11f2303877'
      },
      {
        'startDate': '2014-05-07 08:29:27',
        'endDate': '2014-03-21 03:47:22',
        'userId': '59a755b520ed99c627403eab',
        'createdBy': '59a755b58928e1e9e086cc40'
      },
      {
        'startDate': '2014-05-30 06:52:48',
        'endDate': '2015-08-31 05:39:33',
        'userId': '59a755b594d3a2cb6ca5a525',
        'createdBy': '59a755b53f5d88f078011d67'
      },
      {
        'startDate': '2017-08-05 04:07:35',
        'endDate': '2015-04-13 09:29:50',
        'userId': '59a755b57c9eec0d446f404e',
        'createdBy': '59a755b5d338d2ca1f666117'
      },
      {
        'startDate': '2014-12-25 09:13:11',
        'endDate': '2016-04-29 06:17:47',
        'userId': '59a755b527cd0cde684275ed',
        'createdBy': '59a755b5f204aac99d522006'
      },
      {
        'startDate': '2014-10-31 07:04:34',
        'endDate': '2014-03-03 09:58:25',
        'userId': '59a755b59b33d5fb3f25e851',
        'createdBy': '59a755b542537d763b78f6c8'
      },
      {
        'startDate': '2014-08-08 11:44:46',
        'endDate': '2016-07-27 02:19:09',
        'userId': '59a755b58e3e8c84f9e2c437',
        'createdBy': '59a755b5055b585a225f51b6'
      },
      {
        'startDate': '2015-04-05 07:55:58',
        'endDate': '2016-06-07 05:46:57',
        'userId': '59a755b5e8abb12d1702cc36',
        'createdBy': '59a755b521fa1604ddfd34d4'
      }
    ]
  }
]

module.exports = data
