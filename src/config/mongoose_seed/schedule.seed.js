const mongoDB = require('../../config/mongoose.collections.json')

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': mongoDB.Model.Schedule,
    'documents': [
      {
        'startDate': '2015-07-12 06:20:10',
        'endDate': '2016-09-13 10:29:01',
        'scheduleType': 'General',
        'service': '57fb0c643d50b67d3fb5dc06',
        'workshift': '57fb0c6416c2812bbc5728fa',
        'createdBy': '57fb0c64caf7f559fdad079f'
      },
      {
        'startDate': '2014-11-14 06:22:18',
        'endDate': '2015-08-28 02:01:21',
        'scheduleType': 'Exception',
        'service': '57fb0c64e6482480087bf3f2',
        'workshift': '57fb0c6457c57a594b71af04',
        'createdBy': '57fb0c648917913dd46ecf2a'
      },
      {
        'startDate': '2016-05-22 12:10:05',
        'endDate': '2015-03-30 11:24:31',
        'scheduleType': 'Exception',
        'service': '57fb0c64434830d880799fdc',
        'workshift': '57fb0c64711ec3e3ad925654',
        'createdBy': '57fb0c64602cf50c4b9b62b1'
      },
      {
        'startDate': '2015-04-07 01:27:50',
        'endDate': '2014-03-08 10:28:23',
        'scheduleType': 'Exception',
        'service': '57fb0c64567e4c2ab5ce1348',
        'workshift': '57fb0c640d09a8a226da5a03',
        'createdBy': '57fb0c643726e7b0e3773e28'
      },
      {
        'startDate': '2015-06-25 11:20:07',
        'endDate': '2014-07-24 04:33:36',
        'scheduleType': 'Exception',
        'service': '57fb0c6472d19777dfe5d429',
        'workshift': '57fb0c644abfd97fd3eb0b2d',
        'createdBy': '57fb0c64829bc3ce8da780c3'
      },
      {
        'startDate': '2016-08-14 08:09:32',
        'endDate': '2015-10-06 04:38:39',
        'scheduleType': 'General',
        'service': '57fb0c6477583c3678d1d3f7',
        'workshift': '57fb0c642a115a51a526ffc8',
        'createdBy': '57fb0c64c34ba13e94ef843e'
      },
      {
        'startDate': '2015-07-01 01:49:18',
        'endDate': '2016-07-22 05:09:45',
        'scheduleType': 'Exception',
        'service': '57fb0c64d799fa9893eb1c21',
        'workshift': '57fb0c646ac5bd680a4c9ff7',
        'createdBy': '57fb0c64ef14017a50768494'
      },
      {
        'startDate': '2015-02-01 03:49:44',
        'endDate': '2015-06-02 02:57:58',
        'scheduleType': 'General',
        'service': '57fb0c6459dfb6ac253b63b1',
        'workshift': '57fb0c64ad8dc7f3bb0c730f',
        'createdBy': '57fb0c64b9e7c5aa16c6b581'
      },
      {
        'startDate': '2014-12-29 11:15:03',
        'endDate': '2014-05-25 11:49:37',
        'scheduleType': 'General',
        'service': '57fb0c648d7d836efbd97654',
        'workshift': '57fb0c64cb320e4213ccd49e',
        'createdBy': '57fb0c64d78def6d180ad32f'
      },
      {
        'startDate': '2015-06-02 09:13:48',
        'endDate': '2014-10-25 06:07:54',
        'scheduleType': 'Exception',
        'service': '57fb0c64203d4cdce22f1a9c',
        'workshift': '57fb0c64165c8a334ed95201',
        'createdBy': '57fb0c64a1eed4e9a7a480a7'
      },
      {
        'startDate': '2015-06-23 03:37:36',
        'endDate': '2016-06-08 07:00:39',
        'scheduleType': 'Exception',
        'service': '57fb0c642a3509f4c1edb8ba',
        'workshift': '57fb0c64e174320477ba06b9',
        'createdBy': '57fb0c64a1b40876e3271f24'
      },
      {
        'startDate': '2015-07-14 11:56:18',
        'endDate': '2014-01-07 11:51:03',
        'scheduleType': 'General',
        'service': '57fb0c6427c3a0179b4bddba',
        'workshift': '57fb0c649d83e379c37be0f9',
        'createdBy': '57fb0c6496105ce6ad7749fd'
      },
      {
        'startDate': '2014-01-01 07:01:06',
        'endDate': '2014-12-03 05:12:45',
        'scheduleType': 'Exception',
        'service': '57fb0c64f00d7eaff7331440',
        'workshift': '57fb0c6422027654ff3b6023',
        'createdBy': '57fb0c64886ceb7182e3c796'
      },
      {
        'startDate': '2014-10-26 02:50:02',
        'endDate': '2015-05-06 11:09:13',
        'scheduleType': 'Exception',
        'service': '57fb0c64d3393514c171cd69',
        'workshift': '57fb0c644c24d80e20da950d',
        'createdBy': '57fb0c64aac5e929bbb8b909'
      },
      {
        'startDate': '2016-10-03 04:57:05',
        'endDate': '2015-11-29 04:17:24',
        'scheduleType': 'General',
        'service': '57fb0c6417b6da0854309806',
        'workshift': '57fb0c64f070bd0ff8ba2fb2',
        'createdBy': '57fb0c644561cd0e1b8f4e89'
      },
      {
        'startDate': '2015-07-21 10:19:37',
        'endDate': '2016-10-02 04:33:42',
        'scheduleType': 'Exception',
        'service': '57fb0c645e11bc906cc8beee',
        'workshift': '57fb0c640303efc3e464d096',
        'createdBy': '57fb0c64eab5a8ff8784ac44'
      },
      {
        'startDate': '2014-03-22 05:15:32',
        'endDate': '2014-08-14 02:53:56',
        'scheduleType': 'General',
        'service': '57fb0c64ffe3895cd7bde416',
        'workshift': '57fb0c64591183ca3998093f',
        'createdBy': '57fb0c64a7f7b57160d38dea'
      },
      {
        'startDate': '2014-02-19 10:51:12',
        'endDate': '2016-05-28 03:52:19',
        'scheduleType': 'General',
        'service': '57fb0c64401961272bde3e53',
        'workshift': '57fb0c64dbee3dd6b5dcf33f',
        'createdBy': '57fb0c645b2e9781b10fa36e'
      },
      {
        'startDate': '2016-10-07 04:04:53',
        'endDate': '2015-11-25 04:15:46',
        'scheduleType': 'General',
        'service': '57fb0c64c2a15866eaf8cc46',
        'workshift': '57fb0c64e2282fbd3c79990d',
        'createdBy': '57fb0c6411d6591630386864'
      },
      {
        'startDate': '2015-04-11 02:42:25',
        'endDate': '2016-03-21 04:20:20',
        'scheduleType': 'Exception',
        'service': '57fb0c64d25f8b397766235b',
        'workshift': '57fb0c6425f9284110df3c70',
        'createdBy': '57fb0c64a1f931ac0003377c'
      },
      {
        'startDate': '2015-11-04 05:45:07',
        'endDate': '2014-04-13 07:40:57',
        'scheduleType': 'General',
        'service': '57fb0c6409a2301ada9dddb6',
        'workshift': '57fb0c64b71b51071109e424',
        'createdBy': '57fb0c645bb028f9c2ca99b8'
      },
      {
        'startDate': '2015-11-27 10:08:51',
        'endDate': '2016-09-22 03:31:51',
        'scheduleType': 'Exception',
        'service': '57fb0c647f31c7e496aa7a6c',
        'workshift': '57fb0c64a22bb3ca70aa9593',
        'createdBy': '57fb0c6446cc532c052718af'
      },
      {
        'startDate': '2014-11-30 08:23:04',
        'endDate': '2015-07-13 03:14:08',
        'scheduleType': 'Exception',
        'service': '57fb0c6462e6eed8a7e82547',
        'workshift': '57fb0c648ec58e5d593492f2',
        'createdBy': '57fb0c64d8d4c7ad1969ec06'
      },
      {
        'startDate': '2014-01-04 03:03:03',
        'endDate': '2016-06-25 02:26:19',
        'scheduleType': 'General',
        'service': '57fb0c646c0b1afd1337dc46',
        'workshift': '57fb0c649144b4add2e2dc55',
        'createdBy': '57fb0c64267476df147b6c7d'
      },
      {
        'startDate': '2016-09-20 03:29:56',
        'endDate': '2015-03-29 05:15:37',
        'scheduleType': 'General',
        'service': '57fb0c644c3b849c76ce6cb0',
        'workshift': '57fb0c6424d4b389359b9e6e',
        'createdBy': '57fb0c64ac02dfb6227f8538'
      },
      {
        'startDate': '2015-03-23 07:12:05',
        'endDate': '2015-10-13 09:58:43',
        'scheduleType': 'Exception',
        'service': '57fb0c6413a7278fe0bc9336',
        'workshift': '57fb0c64da70d80d489b9acd',
        'createdBy': '57fb0c64c0107903202e5445'
      },
      {
        'startDate': '2015-05-20 04:14:38',
        'endDate': '2014-03-10 09:02:20',
        'scheduleType': 'Exception',
        'service': '57fb0c648d151f5d4afd54be',
        'workshift': '57fb0c6470cebfe3d374baa5',
        'createdBy': '57fb0c64a895b5b8006ade5a'
      },
      {
        'startDate': '2015-08-04 01:14:27',
        'endDate': '2014-01-17 06:22:37',
        'scheduleType': 'General',
        'service': '57fb0c64f305c80d8498f312',
        'workshift': '57fb0c64225e922d40253f90',
        'createdBy': '57fb0c6410ed927f4d7e460f'
      },
      {
        'startDate': '2015-03-29 08:45:39',
        'endDate': '2015-05-24 02:36:56',
        'scheduleType': 'General',
        'service': '57fb0c64273bf704c5d158dc',
        'workshift': '57fb0c647ce3d495785e13f7',
        'createdBy': '57fb0c64c476ced2e7dbda77'
      },
      {
        'startDate': '2015-07-20 11:26:57',
        'endDate': '2015-10-30 09:35:30',
        'scheduleType': 'General',
        'service': '57fb0c647687b7e31e51a910',
        'workshift': '57fb0c649a07453e2618cd75',
        'createdBy': '57fb0c6470fc5c7a67acb13b'
      },
      {
        'startDate': '2016-01-09 06:24:10',
        'endDate': '2014-08-06 03:41:53',
        'scheduleType': 'General',
        'service': '57fb0c6458a1a4678afa8e75',
        'workshift': '57fb0c64b3c4cbb5038d102b',
        'createdBy': '57fb0c649677678983a0e4e6'
      },
      {
        'startDate': '2014-08-24 01:31:17',
        'endDate': '2015-05-03 05:59:45',
        'scheduleType': 'Exception',
        'service': '57fb0c646018a59e0ad60509',
        'workshift': '57fb0c64ff19536c502eb296',
        'createdBy': '57fb0c6407eb4735985278c9'
      },
      {
        'startDate': '2016-03-18 01:12:28',
        'endDate': '2015-12-25 10:01:08',
        'scheduleType': 'General',
        'service': '57fb0c64a391987f5fb98a6e',
        'workshift': '57fb0c642dff0401fccb8a0a',
        'createdBy': '57fb0c64e3b1e64e0951263c'
      },
      {
        'startDate': '2015-09-26 06:30:09',
        'endDate': '2016-03-24 04:24:56',
        'scheduleType': 'General',
        'service': '57fb0c647a3532d193cb9db4',
        'workshift': '57fb0c645325aa33aa42502f',
        'createdBy': '57fb0c64c080d627658ad0b2'
      },
      {
        'startDate': '2015-08-29 05:16:51',
        'endDate': '2014-01-09 01:23:55',
        'scheduleType': 'General',
        'service': '57fb0c64996850dd4e9ac994',
        'workshift': '57fb0c64aa8579077f2c21c0',
        'createdBy': '57fb0c6477bd3adc3e01cf3a'
      },
      {
        'startDate': '2015-07-07 11:52:39',
        'endDate': '2016-09-28 11:50:48',
        'scheduleType': 'General',
        'service': '57fb0c642f989e9adbc6af09',
        'workshift': '57fb0c648b5537bb72151dc2',
        'createdBy': '57fb0c6401314a41d306d1de'
      },
      {
        'startDate': '2014-01-05 04:19:27',
        'endDate': '2016-06-19 04:44:34',
        'scheduleType': 'General',
        'service': '57fb0c6482d160a1880538e6',
        'workshift': '57fb0c64e26469044a9fc3de',
        'createdBy': '57fb0c6409bc59b43bcc4448'
      },
      {
        'startDate': '2015-12-15 01:45:07',
        'endDate': '2015-11-09 03:20:20',
        'scheduleType': 'General',
        'service': '57fb0c64ab5095d86c8f6c53',
        'workshift': '57fb0c64dbdf4316384bd5cf',
        'createdBy': '57fb0c64995cce370df5d4ac'
      },
      {
        'startDate': '2015-04-16 08:04:32',
        'endDate': '2015-11-07 06:44:03',
        'scheduleType': 'Exception',
        'service': '57fb0c64e53a90e23490eafa',
        'workshift': '57fb0c642bb99ad8d4b6d686',
        'createdBy': '57fb0c643a243737ec824469'
      },
      {
        'startDate': '2015-04-13 12:21:26',
        'endDate': '2015-03-18 09:00:42',
        'scheduleType': 'General',
        'service': '57fb0c64f6cdc33d547e6c6a',
        'workshift': '57fb0c6421fd33539ba166e1',
        'createdBy': '57fb0c647775e7e35b26ad3a'
      },
      {
        'startDate': '2015-11-17 01:05:32',
        'endDate': '2014-10-26 06:27:48',
        'scheduleType': 'Exception',
        'service': '57fb0c6436a5add26c6dd1b2',
        'workshift': '57fb0c640bebe19151e5640f',
        'createdBy': '57fb0c647cc49ef447acebf8'
      },
      {
        'startDate': '2014-08-17 06:06:37',
        'endDate': '2016-07-06 10:18:30',
        'scheduleType': 'Exception',
        'service': '57fb0c64ba3e0f0fd79b8802',
        'workshift': '57fb0c6456a53a3ea9852497',
        'createdBy': '57fb0c6472e6f2ca28c59428'
      },
      {
        'startDate': '2014-09-22 12:25:37',
        'endDate': '2015-01-22 05:56:36',
        'scheduleType': 'Exception',
        'service': '57fb0c641c90c17f6d7c83a1',
        'workshift': '57fb0c64bedc8c9439651c72',
        'createdBy': '57fb0c6426fcaeb07725b33a'
      },
      {
        'startDate': '2014-03-14 10:59:06',
        'endDate': '2014-08-11 01:38:10',
        'scheduleType': 'General',
        'service': '57fb0c64cddb8cee5deb33d7',
        'workshift': '57fb0c640db90163e68bef35',
        'createdBy': '57fb0c6457547ea0952ca0ae'
      },
      {
        'startDate': '2015-12-12 05:49:49',
        'endDate': '2014-10-21 12:41:01',
        'scheduleType': 'Exception',
        'service': '57fb0c64f5d3f5d06025691f',
        'workshift': '57fb0c6408ca65fc9d28c2f9',
        'createdBy': '57fb0c64899928a22df88903'
      },
      {
        'startDate': '2014-12-26 04:05:46',
        'endDate': '2016-09-17 02:40:07',
        'scheduleType': 'Exception',
        'service': '57fb0c64b3d1675872e5fe5b',
        'workshift': '57fb0c645bdcdeeb95be2bda',
        'createdBy': '57fb0c640851d068ccab11a6'
      },
      {
        'startDate': '2015-04-25 07:41:20',
        'endDate': '2015-05-23 03:44:04',
        'scheduleType': 'Exception',
        'service': '57fb0c64800eb55ee3b54bd9',
        'workshift': '57fb0c6404fcc6a0f2819abb',
        'createdBy': '57fb0c64440dda11893df96f'
      },
      {
        'startDate': '2014-01-31 11:19:18',
        'endDate': '2015-09-19 06:12:32',
        'scheduleType': 'Exception',
        'service': '57fb0c646b614c9688a6b9b4',
        'workshift': '57fb0c648957f7819885e39b',
        'createdBy': '57fb0c64a6ebc65709a4579f'
      },
      {
        'startDate': '2014-03-20 04:26:19',
        'endDate': '2015-06-30 04:46:50',
        'scheduleType': 'Exception',
        'service': '57fb0c642f3232d011f671f5',
        'workshift': '57fb0c6438e7795763cd1eb7',
        'createdBy': '57fb0c64e14139fa0d51b629'
      },
      {
        'startDate': '2014-03-25 07:55:25',
        'endDate': '2015-04-22 01:59:33',
        'scheduleType': 'Exception',
        'service': '57fb0c64bc15b99261efbeff',
        'workshift': '57fb0c64f035f69d0d2b88f1',
        'createdBy': '57fb0c64467d48caa5d1c6cd'
      },
      {
        'startDate': '2015-12-04 09:27:21',
        'endDate': '2015-06-25 10:53:35',
        'scheduleType': 'Exception',
        'service': '57fb0c646091b8fcfc6f19d4',
        'workshift': '57fb0c643f705dfe2cf962ca',
        'createdBy': '57fb0c64aed287180244adf0'
      },
      {
        'startDate': '2015-07-20 02:04:29',
        'endDate': '2015-04-02 01:15:12',
        'scheduleType': 'General',
        'service': '57fb0c64c545e56f675283b0',
        'workshift': '57fb0c64de0f60bd0a9653b1',
        'createdBy': '57fb0c64da7365d662ad4d7f'
      },
      {
        'startDate': '2015-03-17 06:45:52',
        'endDate': '2014-08-14 06:39:43',
        'scheduleType': 'General',
        'service': '57fb0c649d9a930f17aea539',
        'workshift': '57fb0c64a370ce92e22e0331',
        'createdBy': '57fb0c64c8a4ac6b267a1e25'
      },
      {
        'startDate': '2015-06-15 12:49:12',
        'endDate': '2015-12-20 07:06:11',
        'scheduleType': 'General',
        'service': '57fb0c6485d703359dbb1218',
        'workshift': '57fb0c64abc9fb3d168b8b8c',
        'createdBy': '57fb0c64cab56e919d0882b8'
      },
      {
        'startDate': '2015-06-28 06:24:26',
        'endDate': '2014-05-31 10:20:39',
        'scheduleType': 'Exception',
        'service': '57fb0c64b09596bb13d79c6e',
        'workshift': '57fb0c64efba075929c1359e',
        'createdBy': '57fb0c64319df87966a86790'
      },
      {
        'startDate': '2015-03-22 06:59:31',
        'endDate': '2014-02-04 10:38:47',
        'scheduleType': 'General',
        'service': '57fb0c64b50e1b9688524cf0',
        'workshift': '57fb0c648de8ea8839509f31',
        'createdBy': '57fb0c6414925508aff8e7d5'
      },
      {
        'startDate': '2014-11-21 01:55:43',
        'endDate': '2016-02-29 11:43:43',
        'scheduleType': 'Exception',
        'service': '57fb0c64b01d2aed5ec7f09b',
        'workshift': '57fb0c642bf8b02d2dd002ff',
        'createdBy': '57fb0c644125f35d2a9e66e6'
      },
      {
        'startDate': '2016-09-30 02:40:15',
        'endDate': '2016-05-31 09:05:07',
        'scheduleType': 'Exception',
        'service': '57fb0c64c7739f1bf9dc06ad',
        'workshift': '57fb0c642541bb95c8a79310',
        'createdBy': '57fb0c64cae37ae15f05f7c6'
      },
      {
        'startDate': '2014-08-10 10:58:42',
        'endDate': '2015-12-28 04:34:11',
        'scheduleType': 'General',
        'service': '57fb0c64026ad5e580a8f0e9',
        'workshift': '57fb0c64d568fae0dd503ee9',
        'createdBy': '57fb0c640f97f9a98219d894'
      },
      {
        'startDate': '2015-12-30 02:33:42',
        'endDate': '2014-12-20 05:04:25',
        'scheduleType': 'Exception',
        'service': '57fb0c64834c41eff737a3b7',
        'workshift': '57fb0c648005065b052e48d1',
        'createdBy': '57fb0c64658d4a823d545cef'
      },
      {
        'startDate': '2014-11-16 08:44:07',
        'endDate': '2014-08-29 03:26:51',
        'scheduleType': 'Exception',
        'service': '57fb0c647ba8e6c1644b52e1',
        'workshift': '57fb0c64cae4a9418a6b49f0',
        'createdBy': '57fb0c640e26d1bc2b67a8c0'
      },
      {
        'startDate': '2016-03-18 06:01:04',
        'endDate': '2016-03-04 11:18:39',
        'scheduleType': 'General',
        'service': '57fb0c646d1d7e717dd06512',
        'workshift': '57fb0c6437c5ed57f9c31059',
        'createdBy': '57fb0c64983334dbaa8cfc10'
      },
      {
        'startDate': '2015-05-03 09:40:58',
        'endDate': '2016-03-05 05:28:53',
        'scheduleType': 'General',
        'service': '57fb0c64f90e38a9a7644ddf',
        'workshift': '57fb0c648599b5ded26c2f00',
        'createdBy': '57fb0c64cc7606feb10b438a'
      },
      {
        'startDate': '2016-06-02 06:12:14',
        'endDate': '2014-11-30 05:23:17',
        'scheduleType': 'General',
        'service': '57fb0c646ebdf5994ed1aa58',
        'workshift': '57fb0c641221648647b292bc',
        'createdBy': '57fb0c64e8c499bf21031dba'
      },
      {
        'startDate': '2014-07-20 11:06:41',
        'endDate': '2016-07-15 08:30:36',
        'scheduleType': 'General',
        'service': '57fb0c643660e22de8701210',
        'workshift': '57fb0c6442b921f1909e2cf8',
        'createdBy': '57fb0c643f615a491dbdea51'
      },
      {
        'startDate': '2014-07-10 08:32:45',
        'endDate': '2015-04-17 11:43:01',
        'scheduleType': 'General',
        'service': '57fb0c64e2c6528c3af2eeca',
        'workshift': '57fb0c64bbcad3d64b4c747a',
        'createdBy': '57fb0c6424e244e7d0024859'
      },
      {
        'startDate': '2015-08-28 02:35:22',
        'endDate': '2016-03-27 12:21:40',
        'scheduleType': 'Exception',
        'service': '57fb0c648df6360de72e2ba5',
        'workshift': '57fb0c6456bc03a9b7bd1409',
        'createdBy': '57fb0c64c8567cbab39e895e'
      },
      {
        'startDate': '2015-03-07 09:59:18',
        'endDate': '2014-07-23 05:52:51',
        'scheduleType': 'General',
        'service': '57fb0c6426dcb7ba0e421bf2',
        'workshift': '57fb0c6441aaf544c9af78d0',
        'createdBy': '57fb0c642ab4648dc3b3e181'
      },
      {
        'startDate': '2015-08-19 12:08:57',
        'endDate': '2015-12-02 03:26:03',
        'scheduleType': 'Exception',
        'service': '57fb0c6485a3648d266e339b',
        'workshift': '57fb0c64bbb2b0a193e893b9',
        'createdBy': '57fb0c647337ca3edffab39b'
      },
      {
        'startDate': '2014-07-28 07:41:43',
        'endDate': '2016-04-19 01:02:20',
        'scheduleType': 'General',
        'service': '57fb0c64ee455b2fa1c46edd',
        'workshift': '57fb0c640c4f07f35bb9b320',
        'createdBy': '57fb0c64c7c4d2501dd97f13'
      },
      {
        'startDate': '2016-08-12 11:41:45',
        'endDate': '2016-07-28 11:44:49',
        'scheduleType': 'General',
        'service': '57fb0c649e82aa4fd0691f8b',
        'workshift': '57fb0c643f7bfd86496b0097',
        'createdBy': '57fb0c64fde2e865844a8411'
      },
      {
        'startDate': '2014-07-14 06:15:39',
        'endDate': '2016-07-23 11:54:43',
        'scheduleType': 'Exception',
        'service': '57fb0c64f7008572651d303f',
        'workshift': '57fb0c646a7b14025fdfb7d6',
        'createdBy': '57fb0c64dcf71e000d22ba30'
      },
      {
        'startDate': '2016-02-13 02:24:16',
        'endDate': '2014-02-09 04:14:33',
        'scheduleType': 'General',
        'service': '57fb0c64b466efd7c958235c',
        'workshift': '57fb0c64251af67e53712781',
        'createdBy': '57fb0c64c5fdd6189cde035f'
      },
      {
        'startDate': '2015-11-05 12:30:44',
        'endDate': '2016-09-15 07:09:46',
        'scheduleType': 'General',
        'service': '57fb0c643022ffebc2777538',
        'workshift': '57fb0c64285c1fb0ea826848',
        'createdBy': '57fb0c64a7e066c60dd4d56f'
      },
      {
        'startDate': '2014-01-30 06:40:31',
        'endDate': '2014-03-28 06:22:03',
        'scheduleType': 'General',
        'service': '57fb0c64367da548d46cb30b',
        'workshift': '57fb0c64bf9b9a50852d15a3',
        'createdBy': '57fb0c6402a83d3480c4ab2f'
      },
      {
        'startDate': '2014-06-20 03:31:43',
        'endDate': '2015-11-06 06:28:20',
        'scheduleType': 'Exception',
        'service': '57fb0c6430a33bdc17abe2f6',
        'workshift': '57fb0c64ac8d46067bb28649',
        'createdBy': '57fb0c64b0e24df4b6ccae7a'
      },
      {
        'startDate': '2015-12-01 08:17:59',
        'endDate': '2016-10-01 04:55:33',
        'scheduleType': 'General',
        'service': '57fb0c647321831683d8c21d',
        'workshift': '57fb0c640f1b02e5b4a994d4',
        'createdBy': '57fb0c64ad1d0c31bbd4d5c6'
      },
      {
        'startDate': '2015-10-11 01:59:16',
        'endDate': '2014-03-18 05:37:46',
        'scheduleType': 'General',
        'service': '57fb0c64642565dd00047482',
        'workshift': '57fb0c64d5d8e9d7255dbc3a',
        'createdBy': '57fb0c64564c38dd2091dc59'
      },
      {
        'startDate': '2016-02-28 03:29:03',
        'endDate': '2014-07-02 01:22:48',
        'scheduleType': 'General',
        'service': '57fb0c64dfb9c1da7a797c18',
        'workshift': '57fb0c64e2a8c5e659ecaa79',
        'createdBy': '57fb0c6459ccc051bceb83b9'
      },
      {
        'startDate': '2016-09-14 02:27:56',
        'endDate': '2015-11-07 09:42:04',
        'scheduleType': 'General',
        'service': '57fb0c648c1378d4d7cf38a7',
        'workshift': '57fb0c64cd6e13ebfc486961',
        'createdBy': '57fb0c64e5bfe61eb343c1e5'
      },
      {
        'startDate': '2016-09-12 03:14:09',
        'endDate': '2014-03-25 07:09:55',
        'scheduleType': 'Exception',
        'service': '57fb0c64c040e3b7fc5732e8',
        'workshift': '57fb0c6464081fd2fabf5e31',
        'createdBy': '57fb0c644f28ccec89799dd6'
      },
      {
        'startDate': '2015-08-06 06:05:59',
        'endDate': '2016-03-07 02:45:54',
        'scheduleType': 'Exception',
        'service': '57fb0c64748143593bed7b50',
        'workshift': '57fb0c6497ca4d1f95d60773',
        'createdBy': '57fb0c648071ff1061586a99'
      },
      {
        'startDate': '2015-02-02 12:46:16',
        'endDate': '2016-05-01 10:44:18',
        'scheduleType': 'Exception',
        'service': '57fb0c6474175661b80e9672',
        'workshift': '57fb0c64483255499212b4a1',
        'createdBy': '57fb0c649810e08ecd65fd77'
      },
      {
        'startDate': '2015-03-06 11:39:41',
        'endDate': '2015-08-03 07:28:02',
        'scheduleType': 'Exception',
        'service': '57fb0c64d7f59f9cccc9ec0f',
        'workshift': '57fb0c64fef635a77ccb8802',
        'createdBy': '57fb0c64206f6ce1374f7956'
      },
      {
        'startDate': '2016-01-21 11:01:10',
        'endDate': '2016-07-11 09:21:08',
        'scheduleType': 'General',
        'service': '57fb0c64b5242837e98acde6',
        'workshift': '57fb0c6487b3ab0cec7db107',
        'createdBy': '57fb0c641394b189701e1ccf'
      },
      {
        'startDate': '2016-07-10 01:35:59',
        'endDate': '2015-12-25 05:39:23',
        'scheduleType': 'General',
        'service': '57fb0c64136d5b1c268778be',
        'workshift': '57fb0c643a47f9ae64aee5fb',
        'createdBy': '57fb0c64b72cc295987e0e40'
      },
      {
        'startDate': '2014-09-26 08:38:05',
        'endDate': '2014-10-14 09:50:11',
        'scheduleType': 'General',
        'service': '57fb0c641a15f76105e39db7',
        'workshift': '57fb0c646f56c41140e3e0d7',
        'createdBy': '57fb0c649ef668d90db0f318'
      },
      {
        'startDate': '2014-06-24 11:29:05',
        'endDate': '2015-07-04 03:23:36',
        'scheduleType': 'General',
        'service': '57fb0c640d8e1e4efc597f21',
        'workshift': '57fb0c64d51cb523282dd051',
        'createdBy': '57fb0c645debca54d08f2d92'
      },
      {
        'startDate': '2016-08-05 11:25:27',
        'endDate': '2016-08-25 03:22:44',
        'scheduleType': 'General',
        'service': '57fb0c64c6bbda3ff39ba08d',
        'workshift': '57fb0c64c15d80478c382251',
        'createdBy': '57fb0c64f1dc2e3a47d983ba'
      },
      {
        'startDate': '2016-05-13 05:20:57',
        'endDate': '2015-11-01 12:34:02',
        'scheduleType': 'General',
        'service': '57fb0c64764f20fd7159b2de',
        'workshift': '57fb0c647df9acc86e47393e',
        'createdBy': '57fb0c64479804299bc79a6d'
      },
      {
        'startDate': '2014-01-13 12:18:29',
        'endDate': '2015-01-08 03:18:29',
        'scheduleType': 'Exception',
        'service': '57fb0c64ffccb531477a3c28',
        'workshift': '57fb0c646369cf273672fc8e',
        'createdBy': '57fb0c640ff9387873a84a6a'
      },
      {
        'startDate': '2014-11-19 12:03:43',
        'endDate': '2015-05-27 04:30:56',
        'scheduleType': 'Exception',
        'service': '57fb0c646eaa3551c3ed28ce',
        'workshift': '57fb0c64ee41edf0061f5fae',
        'createdBy': '57fb0c64175c3ed33e537456'
      },
      {
        'startDate': '2016-05-09 07:10:32',
        'endDate': '2014-09-23 07:54:27',
        'scheduleType': 'Exception',
        'service': '57fb0c64c95d492667be2745',
        'workshift': '57fb0c641843847b31bcf864',
        'createdBy': '57fb0c64d78dc9a978c675c5'
      },
      {
        'startDate': '2014-07-16 01:00:03',
        'endDate': '2015-01-01 10:34:45',
        'scheduleType': 'Exception',
        'service': '57fb0c643cb938a0505f3616',
        'workshift': '57fb0c64ffa0f69290773bbd',
        'createdBy': '57fb0c643ffa8eeeef7d38ef'
      },
      {
        'startDate': '2014-09-28 01:45:27',
        'endDate': '2016-03-18 02:36:33',
        'scheduleType': 'Exception',
        'service': '57fb0c6410b3e01385ba1e55',
        'workshift': '57fb0c64f68016e7c323ad47',
        'createdBy': '57fb0c648946bdc2519afe8a'
      },
      {
        'startDate': '2014-10-05 03:58:58',
        'endDate': '2016-04-02 09:18:10',
        'scheduleType': 'Exception',
        'service': '57fb0c64db19da02b7306d0a',
        'workshift': '57fb0c64bc2ff2fea58f802b',
        'createdBy': '57fb0c64f914cc5eec26095b'
      },
      {
        'startDate': '2014-03-23 12:54:07',
        'endDate': '2016-05-24 03:56:06',
        'scheduleType': 'General',
        'service': '57fb0c64350a63f0b070e5fd',
        'workshift': '57fb0c64629650b2deb99707',
        'createdBy': '57fb0c64ba1a67483147542f'
      },
      {
        'startDate': '2014-12-06 07:06:42',
        'endDate': '2014-12-20 04:39:22',
        'scheduleType': 'Exception',
        'service': '57fb0c64141b4c678f67a80f',
        'workshift': '57fb0c6409354b89f376ab09',
        'createdBy': '57fb0c64d1efc1351304c5b3'
      },
      {
        'startDate': '2016-03-14 12:52:31',
        'endDate': '2015-10-03 01:32:15',
        'scheduleType': 'Exception',
        'service': '57fb0c6428851e068b200a4b',
        'workshift': '57fb0c645b93bf27a37718c4',
        'createdBy': '57fb0c6423bd92aa3fa2c8ee'
      },
      {
        'startDate': '2014-11-24 01:09:07',
        'endDate': '2016-08-14 04:56:16',
        'scheduleType': 'Exception',
        'service': '57fb0c64cb939e5c06d4ea58',
        'workshift': '57fb0c6465be09016c5f181c',
        'createdBy': '57fb0c644e36397bf62bd214'
      }
    ]
  }
]

module.exports = data
