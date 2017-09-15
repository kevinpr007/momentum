const mongoDB = require('../../config/mongoose.collections.json')

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': mongoDB.Model.Schedule,
    'documents': [
      {
        'startDate': '2015-02-07 01:22:34',
        'endDate': '2016-04-30 04:31:07',
        'userId': '59a75532e4251a17adf48ee7',
        'scheduleType': 'General',
        'serviceId': '59a75532a6104cc9e3407592',
        'workshiftId': '59a755321c8bf9a10c2f0dea',
        'locationId': '59a7553264295cec6f293a31',
        'createdBy': '59a755322ef80f349cc156db'
      },
      {
        'startDate': '2015-06-09 01:34:27',
        'endDate': '2017-01-01 03:26:19',
        'userId': '59a75532768092d7fb2de30f',
        'scheduleType': 'General',
        'serviceId': '59a7553279bd2fe17bc3ddd8',
        'workshiftId': '59a75532d2c1f55b89b39c8f',
        'locationId': '59a75532f7140a568b70809f',
        'createdBy': '59a755325da3fef3ec328627'
      },
      {
        'startDate': '2017-02-03 01:06:45',
        'endDate': '2016-12-30 04:38:52',
        'userId': '59a75532a9a4bf5839ad3e3b',
        'scheduleType': 'General',
        'serviceId': '59a75532d7f6314ff30daa37',
        'workshiftId': '59a75532a1d20520cba05e78',
        'locationId': '59a755327fc0a8b87c47af56',
        'createdBy': '59a75532015e7d564b7c4860'
      },
      {
        'startDate': '2015-04-03 11:49:58',
        'endDate': '2016-03-13 07:15:58',
        'userId': '59a755327b88844bbdb08698',
        'scheduleType': 'General',
        'serviceId': '59a75532361d035b8056bb44',
        'workshiftId': '59a75532c9d10778e74dbe3b',
        'locationId': '59a75532f5fc8da6f7f061ff',
        'createdBy': '59a75532a8f2ae6e11f58205'
      },
      {
        'startDate': '2014-01-25 05:15:31',
        'endDate': '2016-08-23 03:57:38',
        'userId': '59a75532fd1f4080112988a3',
        'scheduleType': 'General',
        'serviceId': '59a755322f054b02b2bcbab3',
        'workshiftId': '59a7553201a8d04b3854386f',
        'locationId': '59a75532795031aae208ea58',
        'createdBy': '59a755327004f09d541c68e4'
      },
      {
        'startDate': '2014-03-22 03:57:02',
        'endDate': '2017-08-23 12:29:14',
        'userId': '59a755326e4203e2686ff7e4',
        'scheduleType': 'General',
        'serviceId': '59a75532220a6ced892b5b49',
        'workshiftId': '59a75532440b85998bfacd59',
        'locationId': '59a75532e96e25fdb41d4fcd',
        'createdBy': '59a75532c635ee1a48a4b855'
      },
      {
        'startDate': '2015-09-23 07:06:11',
        'endDate': '2014-01-28 01:43:54',
        'userId': '59a75532e3eff854a1e4acb0',
        'scheduleType': 'General',
        'serviceId': '59a755324150a96f8c1ccdfc',
        'workshiftId': '59a755323fec51c341499102',
        'locationId': '59a7553220e9e9e7e10c9f51',
        'createdBy': '59a755328613e67bde310247'
      },
      {
        'startDate': '2014-12-15 08:52:14',
        'endDate': '2017-04-09 03:29:26',
        'userId': '59a75532a2a048ce2116a25c',
        'scheduleType': 'General',
        'serviceId': '59a75532b7370a6c8c1afb08',
        'workshiftId': '59a75532b5ca152011269e56',
        'locationId': '59a75532e4537b8a19c859d4',
        'createdBy': '59a75532a49c093e98b1c0da'
      },
      {
        'startDate': '2017-02-11 02:31:54',
        'endDate': '2014-06-18 09:29:19',
        'userId': '59a75532a3496588e48813f2',
        'scheduleType': 'General',
        'serviceId': '59a75532bb15955a5a9eeed6',
        'workshiftId': '59a75532ef1616aa8870c303',
        'locationId': '59a7553255fab2537e069821',
        'createdBy': '59a755326d61622e7213bcac'
      },
      {
        'startDate': '2015-03-13 10:07:19',
        'endDate': '2015-12-17 12:46:05',
        'userId': '59a75532cd41c24d0b05a91d',
        'scheduleType': 'General',
        'serviceId': '59a755329d9b8857f288b13d',
        'workshiftId': '59a755325f2c12d0ae91737f',
        'locationId': '59a755324a5f1c0cd72af2e7',
        'createdBy': '59a755323aad6b3a612afbe2'
      },
      {
        'startDate': '2015-10-26 10:34:19',
        'endDate': '2016-04-28 03:08:47',
        'userId': '59a755328791dbaa816e1257',
        'scheduleType': 'General',
        'serviceId': '59a7553295b137601ceeb749',
        'workshiftId': '59a75532fb10e940f1e18a18',
        'locationId': '59a755327eeed5289ddd9cc1',
        'createdBy': '59a7553289afd5844d1f3fc6'
      },
      {
        'startDate': '2014-12-18 08:02:43',
        'endDate': '2016-06-24 01:06:40',
        'userId': '59a755320568715b13be9612',
        'scheduleType': 'Exception',
        'serviceId': '59a75532820e3596254878d6',
        'workshiftId': '59a75532baefe170d1845913',
        'locationId': '59a75532e236172d180a3d25',
        'createdBy': '59a75532a0ef50e5378f6fd5'
      },
      {
        'startDate': '2017-02-17 04:51:14',
        'endDate': '2016-08-20 07:10:16',
        'userId': '59a75532ff41d42b54ea2837',
        'scheduleType': 'General',
        'serviceId': '59a7553242b0eb637b2c8b8c',
        'workshiftId': '59a7553281e42994c6896ae0',
        'locationId': '59a755321bf74e3ca0fc717e',
        'createdBy': '59a75532ba353f1dba9b0a7b'
      },
      {
        'startDate': '2016-06-02 06:10:58',
        'endDate': '2016-07-31 04:21:10',
        'userId': '59a755323916bdb3662e1de5',
        'scheduleType': 'General',
        'serviceId': '59a75532152405a4cf000494',
        'workshiftId': '59a755328b58cf57db5903d7',
        'locationId': '59a75532f95ac1f75f63d8bd',
        'createdBy': '59a7553290fecdb41510630b'
      },
      {
        'startDate': '2017-05-06 01:55:00',
        'endDate': '2014-07-26 08:36:15',
        'userId': '59a75532cb05ae0baef78d7b',
        'scheduleType': 'Exception',
        'serviceId': '59a75532af5ec690885dbf7b',
        'workshiftId': '59a7553250b1959b6c3bfcb0',
        'locationId': '59a75532f107f5593a04ce89',
        'createdBy': '59a75532fbfb3b946f458bad'
      },
      {
        'startDate': '2017-03-07 08:21:01',
        'endDate': '2015-10-07 02:47:15',
        'userId': '59a7553205c34474d905bab1',
        'scheduleType': 'Exception',
        'serviceId': '59a75532bc2c0d2ce5772414',
        'workshiftId': '59a75532f392e4f3a86ce20e',
        'locationId': '59a75532a0e90763049500a0',
        'createdBy': '59a755320c723071c585a61e'
      },
      {
        'startDate': '2014-09-13 05:52:09',
        'endDate': '2014-10-01 09:34:14',
        'userId': '59a75532a4f30a0a852db1cf',
        'scheduleType': 'Exception',
        'serviceId': '59a75532f96f2bdff26824c1',
        'workshiftId': '59a755323eb38e610935064a',
        'locationId': '59a755329bdb6bb9324968b5',
        'createdBy': '59a75532982e0ed8545015c5'
      },
      {
        'startDate': '2016-01-05 10:09:03',
        'endDate': '2016-12-13 02:06:06',
        'userId': '59a7553219bd731eec327bac',
        'scheduleType': 'General',
        'serviceId': '59a7553282ea621fc92af9c0',
        'workshiftId': '59a75532385efd3c3d65068d',
        'locationId': '59a75532b14077010af662f0',
        'createdBy': '59a755329a92d0ccaa1b6704'
      },
      {
        'startDate': '2017-03-29 05:34:22',
        'endDate': '2017-03-22 04:55:28',
        'userId': '59a75532336ebbc9401d4963',
        'scheduleType': 'General',
        'serviceId': '59a75532a3f1540d265a6d88',
        'workshiftId': '59a755325e1af4dde80b8aea',
        'locationId': '59a7553235d18a45afb9e4c7',
        'createdBy': '59a755327cee7d767eb8944f'
      },
      {
        'startDate': '2015-02-10 10:07:27',
        'endDate': '2016-02-07 01:18:15',
        'userId': '59a75532c6371eb2d659d2c8',
        'scheduleType': 'Exception',
        'serviceId': '59a755326606c281991d15ce',
        'workshiftId': '59a75532b994a14ee46e9563',
        'locationId': '59a75532a13cc595b61b0d1a',
        'createdBy': '59a755329f97342c026bc01f'
      },
      {
        'startDate': '2017-02-21 03:21:23',
        'endDate': '2017-03-15 01:52:21',
        'userId': '59a75532f5a544aaa07c3a2b',
        'scheduleType': 'General',
        'serviceId': '59a75532fa6c9fb14f2bb929',
        'workshiftId': '59a755321d7bd4df6ef88ff7',
        'locationId': '59a755326b002ac1fc26d688',
        'createdBy': '59a755324db7cfe909954d20'
      },
      {
        'startDate': '2014-11-08 06:20:05',
        'endDate': '2016-02-16 04:02:58',
        'userId': '59a7553268334408ee2ed88a',
        'scheduleType': 'General',
        'serviceId': '59a75532429756ae92d1d538',
        'workshiftId': '59a75532a0d967ef9df070cd',
        'locationId': '59a75532a199e06b85090121',
        'createdBy': '59a75532a16c8310a4be8bfc'
      },
      {
        'startDate': '2014-08-16 08:53:07',
        'endDate': '2015-04-12 10:40:45',
        'userId': '59a75532f8f0f59d0b8e1f43',
        'scheduleType': 'General',
        'serviceId': '59a755329deb64e5767b775c',
        'workshiftId': '59a75532ca0c10c0c88626dd',
        'locationId': '59a755329845bb9520dd150d',
        'createdBy': '59a75532ca324da157bfe725'
      },
      {
        'startDate': '2015-03-20 04:22:50',
        'endDate': '2016-03-16 09:39:01',
        'userId': '59a75532bb6a9c1d44643224',
        'scheduleType': 'General',
        'serviceId': '59a755324e102755231cb057',
        'workshiftId': '59a75532e13fb1d84c540c84',
        'locationId': '59a755323afba3f6beef31ec',
        'createdBy': '59a7553281282e263d7a70b3'
      },
      {
        'startDate': '2015-02-24 12:04:16',
        'endDate': '2016-04-20 11:13:17',
        'userId': '59a755326630801187c3d370',
        'scheduleType': 'Exception',
        'serviceId': '59a75532abc932aadc8532dd',
        'workshiftId': '59a75532342533c9e55702ac',
        'locationId': '59a7553224405909f0b2cc8c',
        'createdBy': '59a7553296a9f349994abd0b'
      },
      {
        'startDate': '2016-05-21 02:06:11',
        'endDate': '2016-01-19 09:36:08',
        'userId': '59a75532ae28b940a9ca1b6f',
        'scheduleType': 'General',
        'serviceId': '59a755326acffbb38075ad47',
        'workshiftId': '59a75532f5e4ced62a13c6dc',
        'locationId': '59a7553267d2f8f76e4402db',
        'createdBy': '59a75532f75a4a4fbb887349'
      },
      {
        'startDate': '2016-12-27 10:24:08',
        'endDate': '2016-01-25 02:50:56',
        'userId': '59a75532b9975aa9593577fa',
        'scheduleType': 'Exception',
        'serviceId': '59a75532a7c87573e4b2294d',
        'workshiftId': '59a75532271f55b3edca7caf',
        'locationId': '59a755327f4c31f912d2fd3a',
        'createdBy': '59a75532a24f5a2ea5a3acb3'
      },
      {
        'startDate': '2015-05-05 07:13:02',
        'endDate': '2017-03-09 11:02:24',
        'userId': '59a755325e99c2cbbfefee3f',
        'scheduleType': 'Exception',
        'serviceId': '59a75532a7594bde89542a80',
        'workshiftId': '59a755327be9d812e13175ea',
        'locationId': '59a755321645e94277958665',
        'createdBy': '59a755323e207203470e7241'
      },
      {
        'startDate': '2015-11-20 01:08:16',
        'endDate': '2014-08-13 02:42:48',
        'userId': '59a755323025115befcabc48',
        'scheduleType': 'Exception',
        'serviceId': '59a7553278bd2f8bcaa0e4bd',
        'workshiftId': '59a755321112d053ac59ce3c',
        'locationId': '59a75532c52601495a8374db',
        'createdBy': '59a75532df8a6d0a1f308fbc'
      },
      {
        'startDate': '2017-04-23 06:46:25',
        'endDate': '2014-01-31 04:15:17',
        'userId': '59a755325d4049c461847f58',
        'scheduleType': 'Exception',
        'serviceId': '59a755326631b4c5695d0af9',
        'workshiftId': '59a75532056bc09d6827f91a',
        'locationId': '59a755323b8547235c873a5c',
        'createdBy': '59a75532f2168b1aff83be17'
      },
      {
        'startDate': '2016-05-21 10:50:16',
        'endDate': '2015-06-17 11:29:14',
        'userId': '59a755322466d4bd376d496c',
        'scheduleType': 'General',
        'serviceId': '59a75532a546a36d267fdc84',
        'workshiftId': '59a7553248268adda3756bbb',
        'locationId': '59a7553213aadf3f221f8e34',
        'createdBy': '59a75532dbdc3315382f828c'
      },
      {
        'startDate': '2015-05-28 04:40:27',
        'endDate': '2017-08-27 12:56:34',
        'userId': '59a75532bbaf0ef9a13507b7',
        'scheduleType': 'Exception',
        'serviceId': '59a755322ba8b21db6f3a5aa',
        'workshiftId': '59a755320cf83a17725f57fd',
        'locationId': '59a75532e877e2dc26c24ded',
        'createdBy': '59a7553248eade1b899fe6c0'
      },
      {
        'startDate': '2015-05-18 10:09:18',
        'endDate': '2015-11-11 04:56:33',
        'userId': '59a75532a35e6a8bcdd3be0d',
        'scheduleType': 'Exception',
        'serviceId': '59a75532252438c1195ab94c',
        'workshiftId': '59a75532afccd994edf83fab',
        'locationId': '59a7553260d7eb9a063585e5',
        'createdBy': '59a755323dbdd2cbf09264b9'
      },
      {
        'startDate': '2014-10-19 04:45:40',
        'endDate': '2016-05-04 10:42:20',
        'userId': '59a75532c88463d524bb29b8',
        'scheduleType': 'Exception',
        'serviceId': '59a75532232660ed2662e07e',
        'workshiftId': '59a75532f3028ec64ab417c1',
        'locationId': '59a75532cd496e503fa8ba91',
        'createdBy': '59a755323dd5b3b8e0c4c66e'
      },
      {
        'startDate': '2017-02-20 10:24:08',
        'endDate': '2014-10-20 11:09:38',
        'userId': '59a755323cdfd640378fba8e',
        'scheduleType': 'General',
        'serviceId': '59a75532fbe71e8201b879bf',
        'workshiftId': '59a755326c527a9383deed65',
        'locationId': '59a755326519118a33dff843',
        'createdBy': '59a7553261ad84d664f8754f'
      },
      {
        'startDate': '2014-11-25 09:16:14',
        'endDate': '2016-08-25 07:49:25',
        'userId': '59a75532ddc4c16c71b5f66d',
        'scheduleType': 'Exception',
        'serviceId': '59a75532e358c3a5b0d6b4d0',
        'workshiftId': '59a755328a8d3b85ec3e010d',
        'locationId': '59a75532e99a3daa300a83c8',
        'createdBy': '59a75532ad37fc4e1622a2cd'
      },
      {
        'startDate': '2014-04-09 05:27:31',
        'endDate': '2014-03-21 10:25:49',
        'userId': '59a75532c0774555a623560f',
        'scheduleType': 'General',
        'serviceId': '59a7553263ccc5306520f3f8',
        'workshiftId': '59a755328faa4dae747cd605',
        'locationId': '59a755321596c2f28775ee9d',
        'createdBy': '59a75532b189c0344e1ec68b'
      },
      {
        'startDate': '2015-12-09 02:58:01',
        'endDate': '2016-09-07 12:38:12',
        'userId': '59a75532d4b9764e2401c7a6',
        'scheduleType': 'General',
        'serviceId': '59a75532529cf936dcff59f8',
        'workshiftId': '59a75532c4e30a5220e95266',
        'locationId': '59a755324e41fec559e4456d',
        'createdBy': '59a75532c9c66918d9830ded'
      },
      {
        'startDate': '2015-05-19 02:28:30',
        'endDate': '2014-06-24 01:34:28',
        'userId': '59a755323b3464c5fcda55a3',
        'scheduleType': 'General',
        'serviceId': '59a75532c800c2e4f4c1cd23',
        'workshiftId': '59a755323bbca6facc79cd15',
        'locationId': '59a75532f2e5433caba3a81a',
        'createdBy': '59a75532b7d958a46be0b64b'
      },
      {
        'startDate': '2017-03-04 02:41:09',
        'endDate': '2016-11-14 07:16:26',
        'userId': '59a75532f2a085a0ed83aa0d',
        'scheduleType': 'Exception',
        'serviceId': '59a75532a59b9af28e6d94b5',
        'workshiftId': '59a75532f52532380a3de823',
        'locationId': '59a7553241710e2ea311c78f',
        'createdBy': '59a75532a84bc094387e8436'
      },
      {
        'startDate': '2014-07-07 01:12:40',
        'endDate': '2017-01-10 03:33:36',
        'userId': '59a755325c0f80ea16934748',
        'scheduleType': 'Exception',
        'serviceId': '59a75532668158908e02cd1f',
        'workshiftId': '59a755327fa8c625999c9fed',
        'locationId': '59a75532cca185ecb6e2f689',
        'createdBy': '59a755326b000598cbd0ac68'
      },
      {
        'startDate': '2017-05-17 05:04:12',
        'endDate': '2017-05-18 03:46:07',
        'userId': '59a7553244401e1c2ae49a55',
        'scheduleType': 'Exception',
        'serviceId': '59a75532a9bdd6326440b9cb',
        'workshiftId': '59a75532a41bb8360f185939',
        'locationId': '59a755325acff22c5f9e0624',
        'createdBy': '59a75532c6af8ee3d015cb65'
      },
      {
        'startDate': '2017-06-12 05:07:30',
        'endDate': '2017-08-14 12:03:54',
        'userId': '59a75532c4461cad70dc1897',
        'scheduleType': 'Exception',
        'serviceId': '59a75532a73be28490280b37',
        'workshiftId': '59a755329ec62402ed3fb233',
        'locationId': '59a755329d22be3e0abdb555',
        'createdBy': '59a7553296421374a8e41622'
      },
      {
        'startDate': '2014-03-10 11:30:56',
        'endDate': '2014-01-24 12:23:30',
        'userId': '59a755320815b60f1e9893c3',
        'scheduleType': 'General',
        'serviceId': '59a755325c42c0480650e11f',
        'workshiftId': '59a75532071a362bdca0e3db',
        'locationId': '59a75532deb1e228dd191b9f',
        'createdBy': '59a755329529a2a89ee8522e'
      },
      {
        'startDate': '2017-03-09 02:05:33',
        'endDate': '2017-04-16 10:17:30',
        'userId': '59a75532af81680747bc876a',
        'scheduleType': 'General',
        'serviceId': '59a75532a93e85fb2e19bc0a',
        'workshiftId': '59a755320e90b29d46f0d6a1',
        'locationId': '59a755322a4f67bc24c015f0',
        'createdBy': '59a7553238322257ae714946'
      },
      {
        'startDate': '2017-06-12 07:24:53',
        'endDate': '2017-04-28 09:45:28',
        'userId': '59a7553293dd91dca4540a77',
        'scheduleType': 'Exception',
        'serviceId': '59a755326a311541243b9809',
        'workshiftId': '59a75532ec7b886a7843aaa0',
        'locationId': '59a755326a2b21171b202bae',
        'createdBy': '59a75532c11e6375b08b7ddb'
      },
      {
        'startDate': '2016-04-12 09:16:41',
        'endDate': '2016-10-20 01:29:18',
        'userId': '59a75532f0c88c2c16ceaa52',
        'scheduleType': 'Exception',
        'serviceId': '59a755329f95d71db66c9a3d',
        'workshiftId': '59a755326a4dac578f7e744d',
        'locationId': '59a7553251ba5bc0c424390f',
        'createdBy': '59a75532b6b3a7ba958f028a'
      },
      {
        'startDate': '2015-07-25 07:56:19',
        'endDate': '2017-07-15 03:09:58',
        'userId': '59a75532e5bc831fdafc0b11',
        'scheduleType': 'General',
        'serviceId': '59a75532e251fbf633ddc071',
        'workshiftId': '59a755324bb22d1b0793aa0a',
        'locationId': '59a75532a27c0331bc4aed12',
        'createdBy': '59a75532b7f713842d2dcbcc'
      },
      {
        'startDate': '2015-05-12 08:40:22',
        'endDate': '2016-06-06 03:53:03',
        'userId': '59a7553229b39ccc4097be31',
        'scheduleType': 'Exception',
        'serviceId': '59a7553291bfcaddae900309',
        'workshiftId': '59a75532d352d5c821bf2498',
        'locationId': '59a75532d402ce8a9276f06f',
        'createdBy': '59a755322e95155559c371ca'
      },
      {
        'startDate': '2015-11-26 10:36:19',
        'endDate': '2015-03-24 12:15:11',
        'userId': '59a7553208dfedacbe6f5c7b',
        'scheduleType': 'Exception',
        'serviceId': '59a75532f8009a524207d196',
        'workshiftId': '59a755324df792ed7df7636c',
        'locationId': '59a75532228a799aaae03dc3',
        'createdBy': '59a75532dcba70ec491bcac0'
      },
      {
        'startDate': '2014-04-17 05:22:30',
        'endDate': '2014-10-21 09:20:52',
        'userId': '59a75532fe8178476e0dd757',
        'scheduleType': 'General',
        'serviceId': '59a7553278c60711ec148842',
        'workshiftId': '59a755326fe9eb8c48c187f0',
        'locationId': '59a755323c10dd71c2d7e2d4',
        'createdBy': '59a755327364b2ed5e1b47ed'
      },
      {
        'startDate': '2017-02-22 07:16:13',
        'endDate': '2014-06-10 03:10:48',
        'userId': '59a755326691b317d4237344',
        'scheduleType': 'Exception',
        'serviceId': '59a755324065e64cb0eeaba7',
        'workshiftId': '59a755328669f00990c7572e',
        'locationId': '59a75532bff1dd586e82d5e6',
        'createdBy': '59a75532c48d6084c47c505a'
      },
      {
        'startDate': '2015-11-16 05:12:05',
        'endDate': '2015-03-06 03:28:39',
        'userId': '59a755321d7cc37129f5c42d',
        'scheduleType': 'Exception',
        'serviceId': '59a7553228bb19e070b2f621',
        'workshiftId': '59a755320b0fa531dcd8c0f0',
        'locationId': '59a755322c3bd91b3a5d186b',
        'createdBy': '59a75532ad3f72d3fa5fbd14'
      },
      {
        'startDate': '2017-07-17 12:43:13',
        'endDate': '2016-06-01 01:16:01',
        'userId': '59a75532454857e1cd51428f',
        'scheduleType': 'Exception',
        'serviceId': '59a7553258951e8bfe690ba6',
        'workshiftId': '59a75532a85e19dad4ad9bb8',
        'locationId': '59a75532a999fa4fc449fa26',
        'createdBy': '59a75532c932ef5845451b63'
      },
      {
        'startDate': '2016-02-16 01:34:26',
        'endDate': '2017-01-18 08:11:08',
        'userId': '59a75532ad7037006d64083c',
        'scheduleType': 'General',
        'serviceId': '59a755329c8d905ec68f4dd9',
        'workshiftId': '59a755322e6df17048b66cdf',
        'locationId': '59a7553217120d29c765a33d',
        'createdBy': '59a7553226eb508e969682e9'
      },
      {
        'startDate': '2015-06-10 10:02:06',
        'endDate': '2016-01-07 02:40:58',
        'userId': '59a755329a0fcf6799fbb8df',
        'scheduleType': 'General',
        'serviceId': '59a755324e6b79dd30f40d92',
        'workshiftId': '59a7553237cfa3247faece16',
        'locationId': '59a75532a71685dbb366d28b',
        'createdBy': '59a75532bfdd74ccbf5207fb'
      },
      {
        'startDate': '2016-04-29 04:06:22',
        'endDate': '2016-09-02 07:13:55',
        'userId': '59a7553271e930b45959cbf3',
        'scheduleType': 'Exception',
        'serviceId': '59a755322728cd3ac4757f76',
        'workshiftId': '59a755320fe02c1979d7c892',
        'locationId': '59a75532d8f984642a49409f',
        'createdBy': '59a75532f3c771d9a8fc133f'
      },
      {
        'startDate': '2017-03-20 11:27:53',
        'endDate': '2017-01-28 06:14:16',
        'userId': '59a75532c416074438e44f78',
        'scheduleType': 'General',
        'serviceId': '59a75532828287693177bc68',
        'workshiftId': '59a75532cbb1d9b73f2846f4',
        'locationId': '59a755326b453600a137341e',
        'createdBy': '59a755324e98a6e9bbec73a3'
      },
      {
        'startDate': '2017-08-27 09:42:54',
        'endDate': '2017-01-19 12:34:24',
        'userId': '59a75532e9455e13cbfe723c',
        'scheduleType': 'Exception',
        'serviceId': '59a75532ed5f6d903bb40c19',
        'workshiftId': '59a75532d0ad55d33d66243b',
        'locationId': '59a75532f75659168eaac040',
        'createdBy': '59a75532d4475b4059720793'
      },
      {
        'startDate': '2016-04-17 10:29:56',
        'endDate': '2016-09-17 09:08:29',
        'userId': '59a75532086c760329291528',
        'scheduleType': 'Exception',
        'serviceId': '59a7553227d26b5435f1e5f1',
        'workshiftId': '59a7553213a98572a6a16671',
        'locationId': '59a75532fd9a7e9428a9809b',
        'createdBy': '59a7553291c11fad6a956182'
      },
      {
        'startDate': '2016-03-06 09:37:14',
        'endDate': '2016-09-13 05:20:51',
        'userId': '59a75532e830c959da358b97',
        'scheduleType': 'General',
        'serviceId': '59a755326edb02e6474c2a66',
        'workshiftId': '59a75532ec496fd4a44fa13a',
        'locationId': '59a75532bdc101ca12aa23fb',
        'createdBy': '59a755325c93161ecfbfb4a7'
      },
      {
        'startDate': '2015-07-26 06:51:32',
        'endDate': '2014-12-18 12:44:20',
        'userId': '59a755329e2004fdf8ccf9c0',
        'scheduleType': 'General',
        'serviceId': '59a75532abd75c3b14e0ada1',
        'workshiftId': '59a7553247be5c1a6440b87a',
        'locationId': '59a75532e335bc75d2cea690',
        'createdBy': '59a75532b7377cb81e5ddef1'
      },
      {
        'startDate': '2017-08-23 02:46:21',
        'endDate': '2014-09-14 07:24:43',
        'userId': '59a75532dad6805fee88a775',
        'scheduleType': 'Exception',
        'serviceId': '59a755322463abffdd7924a2',
        'workshiftId': '59a755328efe09984e0ffad0',
        'locationId': '59a7553289c2964b314f620c',
        'createdBy': '59a75532d1a3e1a68bd41dc8'
      },
      {
        'startDate': '2014-10-18 02:52:01',
        'endDate': '2014-03-18 02:32:01',
        'userId': '59a7553234e89c20c9513a65',
        'scheduleType': 'General',
        'serviceId': '59a7553243814f28d72f4d3e',
        'workshiftId': '59a75532ef884ff550a9c004',
        'locationId': '59a755321435deb2ff699cf1',
        'createdBy': '59a75532b73ad3bf50fc01d3'
      },
      {
        'startDate': '2014-07-31 02:14:12',
        'endDate': '2014-08-04 11:41:30',
        'userId': '59a755323c198ee64e1f1d49',
        'scheduleType': 'General',
        'serviceId': '59a755320dc4ab93213a0873',
        'workshiftId': '59a755325058e51aa7e6a3d5',
        'locationId': '59a75532f74b0273db296cac',
        'createdBy': '59a755325d2e1a1e56b0371f'
      },
      {
        'startDate': '2017-04-15 06:55:53',
        'endDate': '2016-12-24 10:15:00',
        'userId': '59a755324f32ab4ea976cea3',
        'scheduleType': 'General',
        'serviceId': '59a75532dbf7a0a675b96259',
        'workshiftId': '59a755321a46218d38614f0d',
        'locationId': '59a7553237a523991ee3e8a8',
        'createdBy': '59a755320802ff9a7bdfba8a'
      },
      {
        'startDate': '2015-07-19 07:45:23',
        'endDate': '2016-04-29 02:57:03',
        'userId': '59a7553245177bee403c5945',
        'scheduleType': 'Exception',
        'serviceId': '59a75532e1d6189fc38246bd',
        'workshiftId': '59a75532ec36c448df66b7d7',
        'locationId': '59a755326a5bf665c2b75ef7',
        'createdBy': '59a755328310428d89cb4059'
      },
      {
        'startDate': '2014-09-13 06:32:42',
        'endDate': '2017-01-01 11:48:50',
        'userId': '59a75532bad75be4e33dcdf3',
        'scheduleType': 'General',
        'serviceId': '59a755327a95fadd52f5171d',
        'workshiftId': '59a755326ce1abbe2670c556',
        'locationId': '59a75532aad54f34a776f184',
        'createdBy': '59a75532396e67ad12f87ba4'
      },
      {
        'startDate': '2016-08-23 11:23:19',
        'endDate': '2017-05-11 11:58:26',
        'userId': '59a75532770e97ced280c6af',
        'scheduleType': 'General',
        'serviceId': '59a7553293358755495f1254',
        'workshiftId': '59a7553232a3d26afa25c1ed',
        'locationId': '59a755328c2bfc240583cbec',
        'createdBy': '59a755323b43ca73840de4f4'
      },
      {
        'startDate': '2014-12-21 01:17:58',
        'endDate': '2017-07-12 04:22:52',
        'userId': '59a75532ce9f77994f81078a',
        'scheduleType': 'General',
        'serviceId': '59a7553261bc3e0aa06840e7',
        'workshiftId': '59a75532becc5b4236e5a490',
        'locationId': '59a75532566c00d522d6cfc7',
        'createdBy': '59a75532715f0eec6dfbf7da'
      },
      {
        'startDate': '2017-01-31 11:43:11',
        'endDate': '2017-08-13 08:19:32',
        'userId': '59a7553215f6d58ca4991fb2',
        'scheduleType': 'Exception',
        'serviceId': '59a75532bcfbad5ddfc3c396',
        'workshiftId': '59a75532a0b7fcf195b81cab',
        'locationId': '59a7553240b5d11622353bd9',
        'createdBy': '59a7553210e958c6278bcbe7'
      },
      {
        'startDate': '2017-08-09 07:34:07',
        'endDate': '2014-02-01 07:55:50',
        'userId': '59a75532ad6f84307b06b29d',
        'scheduleType': 'Exception',
        'serviceId': '59a75532ee2f70aa1aafd3b0',
        'workshiftId': '59a75532df4f77f373bbf4a0',
        'locationId': '59a75532e5687ac61a14b3d8',
        'createdBy': '59a75532ba788647da078235'
      },
      {
        'startDate': '2015-11-30 08:46:30',
        'endDate': '2014-01-24 03:57:48',
        'userId': '59a75532dd421d8f4fd848f3',
        'scheduleType': 'General',
        'serviceId': '59a75532348a9111d613cdb4',
        'workshiftId': '59a75532e011a11ef722798a',
        'locationId': '59a75532e84ded861892da9d',
        'createdBy': '59a755328529dc8212c021ea'
      },
      {
        'startDate': '2015-10-03 05:51:16',
        'endDate': '2015-11-20 11:29:45',
        'userId': '59a755321d427819850122b3',
        'scheduleType': 'Exception',
        'serviceId': '59a75532469faebc151f4bb2',
        'workshiftId': '59a755328d8dc12a88ff45e3',
        'locationId': '59a755329d7fb4ed9f29a255',
        'createdBy': '59a755326e5a9b4b4f1ea88c'
      },
      {
        'startDate': '2015-10-25 02:17:21',
        'endDate': '2014-06-13 08:10:06',
        'userId': '59a7553245a25aef4a7a02bb',
        'scheduleType': 'General',
        'serviceId': '59a75532406a805489f3d082',
        'workshiftId': '59a75532028c15b3b105becc',
        'locationId': '59a75532427ef825fa47b7ae',
        'createdBy': '59a755329f87d9a4f1834b18'
      },
      {
        'startDate': '2017-03-30 05:23:13',
        'endDate': '2016-05-27 03:02:32',
        'userId': '59a755329b260946ebde3fcd',
        'scheduleType': 'Exception',
        'serviceId': '59a755325852447db37e4de5',
        'workshiftId': '59a75532d060c820c6d9cdb7',
        'locationId': '59a7553241b3a4116f29b838',
        'createdBy': '59a75532201c9428cb66120b'
      },
      {
        'startDate': '2015-01-25 02:36:06',
        'endDate': '2017-05-22 12:45:05',
        'userId': '59a75532f5bbfe4025ca6114',
        'scheduleType': 'Exception',
        'serviceId': '59a75532ac3067d4ab21725e',
        'workshiftId': '59a755324f27822310e75741',
        'locationId': '59a755328db075573d2e99a0',
        'createdBy': '59a75532533eeaf886edab08'
      },
      {
        'startDate': '2014-01-29 12:28:23',
        'endDate': '2014-10-30 11:04:50',
        'userId': '59a75532aa6ffa876b9d4aa1',
        'scheduleType': 'General',
        'serviceId': '59a75532107eee550040ac10',
        'workshiftId': '59a75532bb03bb6e89204756',
        'locationId': '59a75532889348474659bb36',
        'createdBy': '59a755326c29516ae1d949a0'
      },
      {
        'startDate': '2016-01-29 03:05:38',
        'endDate': '2014-12-17 11:21:48',
        'userId': '59a755323f40a77fc44d8721',
        'scheduleType': 'Exception',
        'serviceId': '59a75532594f87bfa63e478c',
        'workshiftId': '59a755320fdf5893efe4dcf2',
        'locationId': '59a755324ea6df39fea1796f',
        'createdBy': '59a75532f78512fac7937f4f'
      },
      {
        'startDate': '2014-08-12 07:20:05',
        'endDate': '2016-12-03 05:23:31',
        'userId': '59a75532577ae220a782861d',
        'scheduleType': 'Exception',
        'serviceId': '59a75532382246e24df02e86',
        'workshiftId': '59a75532acec1e7cf171b585',
        'locationId': '59a755320d0dd3881d14ea96',
        'createdBy': '59a7553268fe395b2836e390'
      },
      {
        'startDate': '2016-09-20 04:22:41',
        'endDate': '2015-03-25 03:38:48',
        'userId': '59a75532b74e3e154422d840',
        'scheduleType': 'General',
        'serviceId': '59a7553298cb452f6b318cd7',
        'workshiftId': '59a75532a9c263d00405c1e1',
        'locationId': '59a7553260f0582cfe68a4c9',
        'createdBy': '59a7553212db53a91a6ea49b'
      },
      {
        'startDate': '2014-09-10 10:02:33',
        'endDate': '2014-02-27 11:02:12',
        'userId': '59a75532c30df3456984198a',
        'scheduleType': 'Exception',
        'serviceId': '59a75532cfeaaf2a216c9696',
        'workshiftId': '59a755326cf23e5d61e6c042',
        'locationId': '59a755324be4b9585a43e818',
        'createdBy': '59a7553210c857b16c9c007e'
      },
      {
        'startDate': '2016-12-11 08:25:12',
        'endDate': '2016-02-09 08:38:31',
        'userId': '59a7553253fc006c376884b3',
        'scheduleType': 'Exception',
        'serviceId': '59a75532269e8d179423a687',
        'workshiftId': '59a7553218f70baf06d1e5ce',
        'locationId': '59a75532d2c43c9ab65f8c19',
        'createdBy': '59a755322de12330a4308501'
      },
      {
        'startDate': '2014-05-25 07:09:01',
        'endDate': '2017-06-10 12:16:14',
        'userId': '59a755322a58de03365f0720',
        'scheduleType': 'Exception',
        'serviceId': '59a75532cfc5279a998acc77',
        'workshiftId': '59a755327bd35a9b2fbb0da1',
        'locationId': '59a7553294df5e520f6506a7',
        'createdBy': '59a755324ca0ae8ce537b145'
      },
      {
        'startDate': '2017-05-09 07:00:46',
        'endDate': '2014-10-07 04:49:56',
        'userId': '59a755323566d89afce3fea4',
        'scheduleType': 'Exception',
        'serviceId': '59a75532751cc61155cf51ab',
        'workshiftId': '59a755328b8463f902bf2084',
        'locationId': '59a75532e8fc157d62adfff3',
        'createdBy': '59a755328dec2ee01a609f31'
      },
      {
        'startDate': '2016-08-05 10:51:41',
        'endDate': '2015-03-25 01:08:34',
        'userId': '59a7553299d7984f682b2a58',
        'scheduleType': 'General',
        'serviceId': '59a7553295a869db49ab031c',
        'workshiftId': '59a755322271cf19601c1dac',
        'locationId': '59a755321b1b8140a605affd',
        'createdBy': '59a755323b29ec2c35ce799d'
      },
      {
        'startDate': '2016-08-24 11:38:11',
        'endDate': '2017-07-20 12:54:05',
        'userId': '59a75532dc88ddf0090811f8',
        'scheduleType': 'Exception',
        'serviceId': '59a755328dba19d14ab3194d',
        'workshiftId': '59a75532129e2c44aaa3513e',
        'locationId': '59a7553292c0cdd6e642402a',
        'createdBy': '59a75532fecec106af34de05'
      },
      {
        'startDate': '2017-01-19 10:18:20',
        'endDate': '2016-06-27 10:00:13',
        'userId': '59a75532932af234b1f34102',
        'scheduleType': 'Exception',
        'serviceId': '59a75532c64c91b27eaab6e8',
        'workshiftId': '59a755323b20f5bc72b14185',
        'locationId': '59a755320b27dadcf68f638f',
        'createdBy': '59a75532f3fcd42fb10ab780'
      },
      {
        'startDate': '2017-02-10 07:30:52',
        'endDate': '2016-12-03 07:16:37',
        'userId': '59a75532d45fd2d2ae1708b5',
        'scheduleType': 'General',
        'serviceId': '59a75532b0225e4c85dc44c1',
        'workshiftId': '59a75532b5090c1723397cd3',
        'locationId': '59a75532e8ae9d2aea0bcfd4',
        'createdBy': '59a7553239fab4e52684f9b5'
      },
      {
        'startDate': '2014-04-15 03:38:53',
        'endDate': '2015-03-15 01:19:46',
        'userId': '59a75532408c448e7b237d26',
        'scheduleType': 'Exception',
        'serviceId': '59a7553277c98d9751e2996c',
        'workshiftId': '59a75532c59cf500a2095d8b',
        'locationId': '59a75532d03912ea67b6d2d0',
        'createdBy': '59a75532ada22606a469264e'
      },
      {
        'startDate': '2016-03-06 01:49:36',
        'endDate': '2016-04-12 08:34:42',
        'userId': '59a755325151d91f246d3fe9',
        'scheduleType': 'Exception',
        'serviceId': '59a755325757750d11d46ec6',
        'workshiftId': '59a7553260dd1e6e56056b8c',
        'locationId': '59a755320d23eea28bcff7ce',
        'createdBy': '59a755325fa9e7c93176c10e'
      },
      {
        'startDate': '2015-12-20 05:34:14',
        'endDate': '2014-03-15 12:34:24',
        'userId': '59a75532e1b4505deb836ffe',
        'scheduleType': 'Exception',
        'serviceId': '59a75532c9d71175ec61e0ec',
        'workshiftId': '59a75532e051a2442c131411',
        'locationId': '59a75532b67f2276c76acbc7',
        'createdBy': '59a755327eca4c43d1ccbf3e'
      },
      {
        'startDate': '2015-08-12 08:40:04',
        'endDate': '2014-11-26 04:59:08',
        'userId': '59a75532c6810577e732a3c2',
        'scheduleType': 'Exception',
        'serviceId': '59a755322d59a464af2b3982',
        'workshiftId': '59a75532661b2997452e45de',
        'locationId': '59a75532ed62d9969cb7667d',
        'createdBy': '59a755323fcbe1d185e9300f'
      },
      {
        'startDate': '2014-04-04 11:10:52',
        'endDate': '2015-09-05 11:14:42',
        'userId': '59a75532b35b5510170ea5bf',
        'scheduleType': 'Exception',
        'serviceId': '59a755326722d583ed2ea5fb',
        'workshiftId': '59a75532e9a05f0e46346f21',
        'locationId': '59a7553256aca94d8dcd0f95',
        'createdBy': '59a7553287b7ffddaae9a382'
      },
      {
        'startDate': '2016-06-29 09:50:31',
        'endDate': '2015-01-30 12:23:09',
        'userId': '59a75532b00a8c6b9d41fdae',
        'scheduleType': 'General',
        'serviceId': '59a75532ac3777d70486a6b2',
        'workshiftId': '59a75532137d394df10bafd7',
        'locationId': '59a755321347525a9123960a',
        'createdBy': '59a75532631120c541d00e01'
      },
      {
        'startDate': '2014-05-04 09:26:48',
        'endDate': '2014-08-29 04:41:56',
        'userId': '59a755325db2ad0e95f15e46',
        'scheduleType': 'General',
        'serviceId': '59a75532aecfa74d100d9efb',
        'workshiftId': '59a7553263c4bec9b28a9c29',
        'locationId': '59a75532364f29d23297efdb',
        'createdBy': '59a75532ec04dd25a389488c'
      },
      {
        'startDate': '2015-07-10 06:36:27',
        'endDate': '2015-11-02 03:46:05',
        'userId': '59a755321e3bab7da71c72e0',
        'scheduleType': 'General',
        'serviceId': '59a75532a6e97e30111983a9',
        'workshiftId': '59a755323801c24917deaff4',
        'locationId': '59a75532a133456ff69ebc2a',
        'createdBy': '59a755323c485bcb053d5bf4'
      },
      {
        'startDate': '2015-08-25 08:26:25',
        'endDate': '2014-09-29 02:19:56',
        'userId': '59a755323efffc1b27fdb8f8',
        'scheduleType': 'General',
        'serviceId': '59a75532cd6987fd4874b4da',
        'workshiftId': '59a7553276de913cddc8d597',
        'locationId': '59a75532551b6f1104b135a7',
        'createdBy': '59a75532af1b64d40201b51c'
      },
      {
        'startDate': '2016-09-18 12:45:22',
        'endDate': '2015-11-19 09:52:29',
        'userId': '59a7553295bb2873f556b587',
        'scheduleType': 'Exception',
        'serviceId': '59a75532ff6420aa4500ea71',
        'workshiftId': '59a75532af8e77833069bf0a',
        'locationId': '59a7553247db944f7fbaa922',
        'createdBy': '59a755321c4c0a25f475ed9e'
      },
      {
        'startDate': '2015-12-26 10:49:43',
        'endDate': '2016-03-20 09:45:20',
        'userId': '59a7553210d634ea66ca5d8c',
        'scheduleType': 'Exception',
        'serviceId': '59a75532fff31e5b0d13f6a4',
        'workshiftId': '59a75532a3a2cc2a06ac923c',
        'locationId': '59a755321bfba27335fe6fff',
        'createdBy': '59a7553256478c228b570b89'
      }
    ]
  }
]

module.exports = data
