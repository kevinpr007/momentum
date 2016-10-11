const mongoDB = require('../../config/mongoose.collections.json')

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': mongoDB.Model.User,
    'documents': [
      {
        'firstName': 'Thornton',
        'lastName': 'Sanchez',
        'email': 'thorntonsanchez@glukgluk.com',
        'dob': '2002-01-02 07:26:10',
        'password': 'Maine16410',
        'salt': 'e381aa0e-c47c-4065-8a98-2d6b4c6b4567',
        'resetPasswordToken': '48d847af-4eea-4b1c-8792-10fb0d5b274a',
        'resetPasswordExpires': '',
        'phone': 1465185052,
        'roles': 'Manager',
        'address': {
          'address1': 'Legion Street',
          'city': 'Centerville',
          'state': 'Federated States Of Micronesia',
          'zipCode': 16542
        },
        'createdBy': '57fb18864860b7155b746434'
      },
      {
        'firstName': 'Guy',
        'lastName': 'Mendez',
        'email': 'guymendez@glukgluk.com',
        'dob': '1996-07-21 07:09:27',
        'password': 'Texas18373',
        'salt': '75afe6d3-3ecc-4a6c-94f2-f9ad6f5ce74f',
        'resetPasswordToken': '334d7941-b2f9-48df-ba83-c42b50dbf642',
        'resetPasswordExpires': '',
        'phone': 1840488428,
        'roles': 'Manager',
        'address': {
          'address1': 'Ludlam Place',
          'city': 'Lemoyne',
          'state': 'Iowa',
          'zipCode': 39929
        },
        'createdBy': '57fb18868ae5688aeb25c4d0'
      },
      {
        'firstName': 'Amparo',
        'lastName': 'Anderson',
        'email': 'amparoanderson@glukgluk.com',
        'dob': '2007-07-02 08:52:44',
        'password': 'Alaska18050',
        'salt': '766e48a5-0dfb-4aab-a959-e57c5ef6dde3',
        'resetPasswordToken': 'bcf16cec-f2f5-4eef-af1b-64c4979c0bab',
        'resetPasswordExpires': '',
        'phone': 1007841724,
        'roles': 'Employee',
        'address': {
          'address1': 'Carroll Street',
          'city': 'Elrama',
          'state': 'Wyoming',
          'zipCode': 44632
        },
        'createdBy': '57fb1886c585331b15573f97'
      },
      {
        'firstName': 'Hardin',
        'lastName': 'Webster',
        'email': 'hardinwebster@glukgluk.com',
        'dob': '1998-02-04 01:38:42',
        'password': 'Kansas15320',
        'salt': '14e1bbb7-d20b-4f82-ba9c-add6dd1fe3a3',
        'resetPasswordToken': 'a1699193-0420-42e3-b958-a2f5956c6e2b',
        'resetPasswordExpires': '',
        'phone': 1937655786,
        'roles': 'User',
        'address': {
          'address1': 'Krier Place',
          'city': 'Chemung',
          'state': 'West Virginia',
          'zipCode': 77860
        },
        'createdBy': '57fb1886b8d3b7d42ffee92f'
      },
      {
        'firstName': 'Rosemary',
        'lastName': 'Summers',
        'email': 'rosemarysummers@glukgluk.com',
        'dob': '2012-11-01 03:43:30',
        'password': 'Wisconsin14384',
        'salt': '70a904b8-37c2-486c-b1e3-cc26135b1c53',
        'resetPasswordToken': '1e186f4b-d507-4d04-b0ac-2aa2051e996f',
        'resetPasswordExpires': '',
        'phone': 1502899630,
        'roles': 'Manager',
        'address': {
          'address1': 'Billings Place',
          'city': 'Vicksburg',
          'state': 'South Dakota',
          'zipCode': 28341
        },
        'createdBy': '57fb18867cdb2474ad2eb457'
      },
      {
        'firstName': 'Jenifer',
        'lastName': 'Snider',
        'email': 'jenifersnider@glukgluk.com',
        'dob': '2014-09-30 09:03:01',
        'password': 'District Of Columbia10259',
        'salt': '278ec3f8-974e-404e-964f-7f4680b96bb8',
        'resetPasswordToken': '125fd19d-fa4e-4104-bdc8-ac681fe517a4',
        'resetPasswordExpires': '',
        'phone': 1725980268,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Ross Street',
          'city': 'Shindler',
          'state': 'South Carolina',
          'zipCode': 70000
        },
        'createdBy': '57fb1886bdc702961abaabda'
      },
      {
        'firstName': 'Aurora',
        'lastName': 'Woods',
        'email': 'aurorawoods@glukgluk.com',
        'dob': '1995-08-09 05:39:59',
        'password': 'Kentucky11882',
        'salt': 'e5645c62-49b2-4fa1-94f7-1243f1eabc2a',
        'resetPasswordToken': '6cb4bfeb-cf60-4d0d-8815-b997077d03e7',
        'resetPasswordExpires': '',
        'phone': 1183642911,
        'roles': 'User',
        'address': {
          'address1': 'Kings Hwy',
          'city': 'Crayne',
          'state': 'Tennessee',
          'zipCode': 37849
        },
        'createdBy': '57fb18867ccfd9b6bab78a09'
      },
      {
        'firstName': 'Stacie',
        'lastName': 'Meyers',
        'email': 'staciemeyers@glukgluk.com',
        'dob': '2014-06-14 01:29:26',
        'password': 'North Dakota16802',
        'salt': '7f6c0ba2-adfd-4dc2-90aa-a7b6b6a3f351',
        'resetPasswordToken': '159fdf45-4497-41f4-8ac8-51f7bf578aec',
        'resetPasswordExpires': '',
        'phone': 1250595939,
        'roles': 'User',
        'address': {
          'address1': 'Brighton Court',
          'city': 'Walton',
          'state': 'American Samoa',
          'zipCode': 56783
        },
        'createdBy': '57fb1886887ac5ce59d34370'
      },
      {
        'firstName': 'Collier',
        'lastName': 'Hopper',
        'email': 'collierhopper@glukgluk.com',
        'dob': '2013-06-15 09:27:30',
        'password': 'Connecticut19929',
        'salt': '8b02535c-ae62-4dad-857e-aecfc7f95a22',
        'resetPasswordToken': '3ec351bd-9476-437d-9782-33364d6ed2a0',
        'resetPasswordExpires': '',
        'phone': 1438324924,
        'roles': 'Employee',
        'address': {
          'address1': 'Schaefer Street',
          'city': 'Bagtown',
          'state': 'Palau',
          'zipCode': 24012
        },
        'createdBy': '57fb18863b41189c7a3d7a0b'
      },
      {
        'firstName': 'Connie',
        'lastName': 'David',
        'email': 'conniedavid@glukgluk.com',
        'dob': '1992-10-23 11:29:57',
        'password': 'New York10495',
        'salt': 'e4027758-3800-428c-89d0-a2bbc12b02d9',
        'resetPasswordToken': 'b0823660-b2f1-40ee-81c4-d7c07f3d0ed9',
        'resetPasswordExpires': '',
        'phone': 1977050391,
        'roles': 'Admin',
        'address': {
          'address1': 'Woodside Avenue',
          'city': 'Townsend',
          'state': 'Oregon',
          'zipCode': 65884
        },
        'createdBy': '57fb1886d1807882509fbb4f'
      },
      {
        'firstName': 'Gallagher',
        'lastName': 'Harding',
        'email': 'gallagherharding@glukgluk.com',
        'dob': '2004-12-05 09:05:08',
        'password': 'New Mexico17455',
        'salt': '61b09805-b483-4064-a91e-8db01ef03680',
        'resetPasswordToken': '24ddf209-69f5-4fce-9ac0-55be6a04ac06',
        'resetPasswordExpires': '',
        'phone': 1500542388,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Regent Place',
          'city': 'Caroline',
          'state': 'Hawaii',
          'zipCode': 28391
        },
        'createdBy': '57fb1886395421c928283bad'
      },
      {
        'firstName': 'Hollie',
        'lastName': 'Maxwell',
        'email': 'holliemaxwell@glukgluk.com',
        'dob': '1997-05-02 10:24:46',
        'password': 'Virgin Islands16876',
        'salt': '766fc036-ff17-4b4c-98bc-171f5d9ecf1c',
        'resetPasswordToken': '61082f7c-fc9d-496f-825f-3e6ab5fdf863',
        'resetPasswordExpires': '',
        'phone': 1819103835,
        'roles': 'User',
        'address': {
          'address1': 'Kane Place',
          'city': 'Vandiver',
          'state': 'Missouri',
          'zipCode': 83004
        },
        'createdBy': '57fb18860766dea29f2fcb67'
      },
      {
        'firstName': 'Dorothy',
        'lastName': 'Little',
        'email': 'dorothylittle@glukgluk.com',
        'dob': '2000-08-13 08:24:44',
        'password': 'Georgia18013',
        'salt': 'c1add177-fa84-4738-80e9-697e6d410470',
        'resetPasswordToken': '5b8da614-2b11-4a0c-879c-f8b0b22f4c10',
        'resetPasswordExpires': '',
        'phone': 1315087620,
        'roles': 'Manager',
        'address': {
          'address1': 'Blake Court',
          'city': 'Joes',
          'state': 'Massachusetts',
          'zipCode': 62295
        },
        'createdBy': '57fb18864a73817e69915c38'
      },
      {
        'firstName': 'Sears',
        'lastName': 'Bennett',
        'email': 'searsbennett@glukgluk.com',
        'dob': '1990-02-21 09:58:07',
        'password': 'Delaware13015',
        'salt': '68dd199e-711f-42ce-831b-a52923c2afd6',
        'resetPasswordToken': 'eb737092-c8e2-474a-9275-5e80345d3451',
        'resetPasswordExpires': '',
        'phone': 1478264656,
        'roles': 'Manager',
        'address': {
          'address1': 'Gerald Court',
          'city': 'Fairhaven',
          'state': 'Ohio',
          'zipCode': 23820
        },
        'createdBy': '57fb18863943f702c0001fd7'
      },
      {
        'firstName': 'Stevenson',
        'lastName': 'Odonnell',
        'email': 'stevensonodonnell@glukgluk.com',
        'dob': '1999-08-02 01:48:25',
        'password': 'Colorado13048',
        'salt': 'aa7c17b1-ef5d-4661-9e83-a300173271fc',
        'resetPasswordToken': '2eccf354-2763-47f2-8b59-1958014c95b3',
        'resetPasswordExpires': '',
        'phone': 1314849041,
        'roles': 'Employee',
        'address': {
          'address1': 'Meeker Avenue',
          'city': 'Drummond',
          'state': 'New Hampshire',
          'zipCode': 14737
        },
        'createdBy': '57fb1886e21242607fab2798'
      },
      {
        'firstName': 'Stuart',
        'lastName': 'Gibbs',
        'email': 'stuartgibbs@glukgluk.com',
        'dob': '2007-09-11 09:30:05',
        'password': 'Rhode Island16726',
        'salt': '6b5216e2-0929-4690-b8d4-aa93c376a900',
        'resetPasswordToken': '0a553dbd-1578-4498-9d09-a9b011a0a77e',
        'resetPasswordExpires': '',
        'phone': 1144408611,
        'roles': 'Manager',
        'address': {
          'address1': 'Willoughby Avenue',
          'city': 'Henrietta',
          'state': 'Alabama',
          'zipCode': 87180
        },
        'createdBy': '57fb188645f5f948523a34ac'
      },
      {
        'firstName': 'Morgan',
        'lastName': 'Clay',
        'email': 'morganclay@glukgluk.com',
        'dob': '2011-04-01 07:45:25',
        'password': 'Oklahoma17689',
        'salt': 'a5370c83-c4cf-49aa-b91d-ee27b49fcf28',
        'resetPasswordToken': 'e6e846f2-9be9-429d-8426-bcafd4d4ae1f',
        'resetPasswordExpires': '',
        'phone': 1391150534,
        'roles': 'Manager',
        'address': {
          'address1': 'Arion Place',
          'city': 'Bloomington',
          'state': 'North Carolina',
          'zipCode': 33410
        },
        'createdBy': '57fb1886dbbee27f52b59c54'
      },
      {
        'firstName': 'Liliana',
        'lastName': 'Short',
        'email': 'lilianashort@glukgluk.com',
        'dob': '2012-05-03 08:28:12',
        'password': 'Northern Mariana Islands11465',
        'salt': '2a3e7bfd-c62b-440d-8ef4-48f2f667119d',
        'resetPasswordToken': '98141ecb-6af9-44bc-aa96-1fe450a399e8',
        'resetPasswordExpires': '',
        'phone': 1951542923,
        'roles': 'User',
        'address': {
          'address1': 'Glenmore Avenue',
          'city': 'Blandburg',
          'state': 'California',
          'zipCode': 18102
        },
        'createdBy': '57fb188627a4ed0d23aebc50'
      },
      {
        'firstName': 'Gould',
        'lastName': 'Hayden',
        'email': 'gouldhayden@glukgluk.com',
        'dob': '2003-07-16 06:54:24',
        'password': 'New Jersey14233',
        'salt': 'ab420518-9873-4576-9ccb-2ea1e9767617',
        'resetPasswordToken': 'f02f22f4-8a05-4790-af14-04ea85cd44b1',
        'resetPasswordExpires': '',
        'phone': 1400341512,
        'roles': 'Admin',
        'address': {
          'address1': 'Livonia Avenue',
          'city': 'Kapowsin',
          'state': 'Guam',
          'zipCode': 13642
        },
        'createdBy': '57fb1886246bce00762fd25a'
      },
      {
        'firstName': 'Marquita',
        'lastName': 'Rollins',
        'email': 'marquitarollins@glukgluk.com',
        'dob': '2014-04-12 04:51:37',
        'password': 'Idaho15060',
        'salt': 'c80a10a6-5f82-494c-8b6a-0569a09613b7',
        'resetPasswordToken': '7d73811e-10a9-4448-8aa7-60590e108216',
        'resetPasswordExpires': '',
        'phone': 1798087158,
        'roles': 'Manager',
        'address': {
          'address1': 'Hendrickson Street',
          'city': 'Grill',
          'state': 'Puerto Rico',
          'zipCode': 34956
        },
        'createdBy': '57fb18869fb59eb0eba08a0b'
      },
      {
        'firstName': 'William',
        'lastName': 'Black',
        'email': 'williamblack@glukgluk.com',
        'dob': '2004-06-09 01:56:36',
        'password': 'Utah19452',
        'salt': '48e9dbec-c472-47d8-b3af-b6f5230cfb60',
        'resetPasswordToken': '26887cfa-0bd4-4827-a188-d379ebf3885d',
        'resetPasswordExpires': '',
        'phone': 1896427557,
        'roles': 'Admin',
        'address': {
          'address1': 'Atlantic Avenue',
          'city': 'Trail',
          'state': 'Louisiana',
          'zipCode': 25904
        },
        'createdBy': '57fb1886204002732e2cd05c'
      },
      {
        'firstName': 'Lynda',
        'lastName': 'Jordan',
        'email': 'lyndajordan@glukgluk.com',
        'dob': '2009-07-06 11:43:24',
        'password': 'Virginia13228',
        'salt': '7126559f-a684-43fd-b9d8-dc071455f60e',
        'resetPasswordToken': '968c2398-94e7-48be-a730-c1265e36a4eb',
        'resetPasswordExpires': '',
        'phone': 1261945182,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Degraw Street',
          'city': 'Olney',
          'state': 'Illinois',
          'zipCode': 22867
        },
        'createdBy': '57fb1886081a1523e859ea56'
      },
      {
        'firstName': 'Autumn',
        'lastName': 'Cooper',
        'email': 'autumncooper@glukgluk.com',
        'dob': '1992-01-10 11:32:50',
        'password': 'Arizona16830',
        'salt': '26bea85d-ff1e-4f2d-9762-0f9bb339c856',
        'resetPasswordToken': 'e8ecc570-9c7b-4009-a132-b399a35fb210',
        'resetPasswordExpires': '',
        'phone': 1594939152,
        'roles': 'Admin',
        'address': {
          'address1': 'Gaylord Drive',
          'city': 'Mahtowa',
          'state': 'Montana',
          'zipCode': 34068
        },
        'createdBy': '57fb18864fb2fbb224d91c07'
      },
      {
        'firstName': 'Nichols',
        'lastName': 'Cameron',
        'email': 'nicholscameron@glukgluk.com',
        'dob': '1999-01-07 02:05:28',
        'password': 'Nebraska15263',
        'salt': 'a00a610f-3ca3-4700-9ca7-c2cd8b7eeb38',
        'resetPasswordToken': 'f1cdafc8-8dcf-4fce-b45d-a98b1f31d044',
        'resetPasswordExpires': '',
        'phone': 1078068200,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Pleasant Place',
          'city': 'Aguila',
          'state': 'Vermont',
          'zipCode': 62367
        },
        'createdBy': '57fb1886e54620390e0eb5ff'
      },
      {
        'firstName': 'Kelly',
        'lastName': 'Dillon',
        'email': 'kellydillon@glukgluk.com',
        'dob': '2003-10-11 05:55:00',
        'password': 'Minnesota10372',
        'salt': '04407f14-d639-48a4-80d2-13377ac7eb34',
        'resetPasswordToken': '8c4d0b70-2bfe-4990-a6d6-63e0983020a9',
        'resetPasswordExpires': '',
        'phone': 1948695424,
        'roles': 'Employee',
        'address': {
          'address1': 'Osborn Street',
          'city': 'Idamay',
          'state': 'Mississippi',
          'zipCode': 17743
        },
        'createdBy': '57fb1886e2b08c2f092b6dc3'
      },
      {
        'firstName': 'Sherrie',
        'lastName': 'Mccarty',
        'email': 'sherriemccarty@glukgluk.com',
        'dob': '1999-04-29 02:15:56',
        'password': 'Marshall Islands14770',
        'salt': 'e97578f9-5d45-492c-9591-7574862c0119',
        'resetPasswordToken': '4bdac66f-0c4c-4b5a-9126-19bcde9115ae',
        'resetPasswordExpires': '',
        'phone': 1399289592,
        'roles': 'Manager',
        'address': {
          'address1': 'Wyckoff Street',
          'city': 'Lindcove',
          'state': 'Washington',
          'zipCode': 87231
        },
        'createdBy': '57fb18867885a9c283194b11'
      },
      {
        'firstName': 'Iva',
        'lastName': 'Mays',
        'email': 'ivamays@glukgluk.com',
        'dob': '1993-09-30 10:01:40',
        'password': 'Indiana16313',
        'salt': '8126ac80-68ae-4d3f-b018-7cd6e1d6a3ca',
        'resetPasswordToken': '513263e8-aeb2-40d9-9c67-f1032a89f5f3',
        'resetPasswordExpires': '',
        'phone': 1055298532,
        'roles': 'User',
        'address': {
          'address1': 'Homecrest Court',
          'city': 'Romeville',
          'state': 'Arkansas',
          'zipCode': 16741
        },
        'createdBy': '57fb1886c7fa0a75cb4ae156'
      },
      {
        'firstName': 'Bernadette',
        'lastName': 'Schwartz',
        'email': 'bernadetteschwartz@glukgluk.com',
        'dob': '2012-10-15 07:55:29',
        'password': 'Florida18334',
        'salt': 'b1fc1e64-d626-4146-acf5-2f6d63f6bdd6',
        'resetPasswordToken': 'dd182d51-a1fd-458c-aaac-a38a04fd3fd5',
        'resetPasswordExpires': '',
        'phone': 1908791826,
        'roles': 'Manager',
        'address': {
          'address1': 'Hanson Place',
          'city': 'Curtice',
          'state': 'Michigan',
          'zipCode': 42136
        },
        'createdBy': '57fb1886deceabfa8545e23a'
      },
      {
        'firstName': 'Lawson',
        'lastName': 'Paul',
        'email': 'lawsonpaul@glukgluk.com',
        'dob': '2005-05-29 10:22:09',
        'password': 'Pennsylvania14257',
        'salt': '76d99acd-07f8-40a0-9ebd-321e956250c1',
        'resetPasswordToken': '9c706bc0-b38d-4c23-a4a1-72faf337932b',
        'resetPasswordExpires': '',
        'phone': 1223080912,
        'roles': 'Employee',
        'address': {
          'address1': 'Underhill Avenue',
          'city': 'Jennings',
          'state': 'Nevada',
          'zipCode': 75164
        },
        'createdBy': '57fb18861cc760a84832fc4a'
      },
      {
        'firstName': 'Kimberly',
        'lastName': 'York',
        'email': 'kimberlyyork@glukgluk.com',
        'dob': '2000-03-24 07:31:54',
        'password': 'Maine18320',
        'salt': '3d72fca2-918e-4f67-a2db-bec7478edb17',
        'resetPasswordToken': '32a005ab-07ec-42ad-87cf-bbc7f3855053',
        'resetPasswordExpires': '',
        'phone': 1393894733,
        'roles': 'Admin',
        'address': {
          'address1': 'Whitty Lane',
          'city': 'Belvoir',
          'state': 'Federated States Of Micronesia',
          'zipCode': 34224
        },
        'createdBy': '57fb188693a68bac2d503362'
      },
      {
        'firstName': 'Lacey',
        'lastName': 'Alexander',
        'email': 'laceyalexander@glukgluk.com',
        'dob': '1998-01-29 01:39:43',
        'password': 'Texas14957',
        'salt': 'ff4fe204-0238-4a01-b7f7-2fdf6507af98',
        'resetPasswordToken': 'ed20d74b-17b8-44bb-9a2b-ea6576f4a651',
        'resetPasswordExpires': '',
        'phone': 1780012378,
        'roles': 'Employee',
        'address': {
          'address1': 'Martense Street',
          'city': 'Mappsville',
          'state': 'Iowa',
          'zipCode': 64398
        },
        'createdBy': '57fb1886cfb951354b06d443'
      },
      {
        'firstName': 'Garner',
        'lastName': 'Odom',
        'email': 'garnerodom@glukgluk.com',
        'dob': '1990-05-26 11:06:25',
        'password': 'Alaska17869',
        'salt': 'a691d6bc-4025-4648-a7cf-7f018c43eaac',
        'resetPasswordToken': '16dabeeb-c195-4225-b32d-0c2ed25649e8',
        'resetPasswordExpires': '',
        'phone': 1311852867,
        'roles': 'User',
        'address': {
          'address1': 'Strickland Avenue',
          'city': 'Leming',
          'state': 'Wyoming',
          'zipCode': 83455
        },
        'createdBy': '57fb1886c7d762113e317218'
      },
      {
        'firstName': 'Campbell',
        'lastName': 'Hunt',
        'email': 'campbellhunt@glukgluk.com',
        'dob': '2009-04-26 06:18:19',
        'password': 'Kansas19619',
        'salt': '5017bf52-6b8c-49af-a251-6111193c8d05',
        'resetPasswordToken': '54a534b2-ce77-4748-ace1-52048f42123a',
        'resetPasswordExpires': '',
        'phone': 1274216411,
        'roles': 'User',
        'address': {
          'address1': 'Hegeman Avenue',
          'city': 'Cassel',
          'state': 'West Virginia',
          'zipCode': 26262
        },
        'createdBy': '57fb1886f68e834bea32b24b'
      },
      {
        'firstName': 'Josie',
        'lastName': 'Aguilar',
        'email': 'josieaguilar@glukgluk.com',
        'dob': '1995-04-30 07:43:14',
        'password': 'Wisconsin19378',
        'salt': '2373c754-27fa-4344-9f1a-72d46fe26d77',
        'resetPasswordToken': '06293dbd-f8ea-4a7f-a44b-bdc99117a109',
        'resetPasswordExpires': '',
        'phone': 1205988897,
        'roles': 'User',
        'address': {
          'address1': 'Grafton Street',
          'city': 'Castleton',
          'state': 'South Dakota',
          'zipCode': 77558
        },
        'createdBy': '57fb188658c13fd6c8327cfa'
      },
      {
        'firstName': 'Ebony',
        'lastName': 'Munoz',
        'email': 'ebonymunoz@glukgluk.com',
        'dob': '2004-08-24 09:48:21',
        'password': 'District Of Columbia12090',
        'salt': 'a7642982-fd66-415e-89b1-6ee4ab8a1bf1',
        'resetPasswordToken': 'a9bfd5f7-7b4c-4817-9294-5cff662c69fe',
        'resetPasswordExpires': '',
        'phone': 1279640833,
        'roles': 'Manager',
        'address': {
          'address1': 'Schenck Avenue',
          'city': 'Lacomb',
          'state': 'South Carolina',
          'zipCode': 48432
        },
        'createdBy': '57fb1886891ff4ff30c607da'
      },
      {
        'firstName': 'Chase',
        'lastName': 'Williams',
        'email': 'chasewilliams@glukgluk.com',
        'dob': '2012-05-11 04:53:22',
        'password': 'Kentucky15755',
        'salt': '58cd539b-bef7-4dfb-938d-b92a2c760833',
        'resetPasswordToken': '86fcff25-c50b-475f-91ec-448235b9564c',
        'resetPasswordExpires': '',
        'phone': 1685864813,
        'roles': 'Admin',
        'address': {
          'address1': 'Sharon Street',
          'city': 'Sandston',
          'state': 'Tennessee',
          'zipCode': 10816
        },
        'createdBy': '57fb1886e82c3e7a2e92694f'
      },
      {
        'firstName': 'Erica',
        'lastName': 'Knight',
        'email': 'ericaknight@glukgluk.com',
        'dob': '1997-03-26 08:28:12',
        'password': 'North Dakota12313',
        'salt': 'cd26e6ce-ce30-4fb1-9ad9-bf549b28388e',
        'resetPasswordToken': 'cc9f53e1-8900-4025-921f-ac7273140137',
        'resetPasswordExpires': '',
        'phone': 1320653560,
        'roles': 'Manager',
        'address': {
          'address1': 'Liberty Avenue',
          'city': 'Layhill',
          'state': 'American Samoa',
          'zipCode': 14901
        },
        'createdBy': '57fb188682bb4a58f8e82c53'
      },
      {
        'firstName': 'Roth',
        'lastName': 'Bass',
        'email': 'rothbass@glukgluk.com',
        'dob': '2008-03-02 09:16:33',
        'password': 'Connecticut14534',
        'salt': 'b7fb86c5-3cff-4d97-9099-f7aed59ec7d0',
        'resetPasswordToken': 'f27eb94f-8fb8-4ccf-b02b-6246b450ee74',
        'resetPasswordExpires': '',
        'phone': 1433135494,
        'roles': 'Admin',
        'address': {
          'address1': 'Downing Street',
          'city': 'Grandview',
          'state': 'Palau',
          'zipCode': 85321
        },
        'createdBy': '57fb1886716257ddb74f7b5c'
      },
      {
        'firstName': 'Fleming',
        'lastName': 'Case',
        'email': 'flemingcase@glukgluk.com',
        'dob': '2013-01-05 06:05:46',
        'password': 'New York18855',
        'salt': 'a17d021d-9da8-4876-996e-be21ba542301',
        'resetPasswordToken': '64a194d2-d6ef-4360-b59a-965e1b7386e5',
        'resetPasswordExpires': '',
        'phone': 1746562666,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Amity Street',
          'city': 'Belva',
          'state': 'Oregon',
          'zipCode': 45111
        },
        'createdBy': '57fb188681d3998654f793d9'
      },
      {
        'firstName': 'Hillary',
        'lastName': 'Lynch',
        'email': 'hillarylynch@glukgluk.com',
        'dob': '2012-07-16 07:08:51',
        'password': 'New Mexico15482',
        'salt': 'c0923b12-c7d8-4588-a08a-74bbf93ad9a3',
        'resetPasswordToken': 'f86572f7-8a79-4878-8e15-1c547dce32c8',
        'resetPasswordExpires': '',
        'phone': 1024496641,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Visitation Place',
          'city': 'Trona',
          'state': 'Hawaii',
          'zipCode': 14025
        },
        'createdBy': '57fb18864a55ec5e7d32b230'
      },
      {
        'firstName': 'Randall',
        'lastName': 'Britt',
        'email': 'randallbritt@glukgluk.com',
        'dob': '2005-08-03 03:24:46',
        'password': 'Virgin Islands14148',
        'salt': '452edf33-6594-49d6-9de7-405615e4daa8',
        'resetPasswordToken': '3f99e5f5-8cad-40f5-8cb8-8cc0573481c1',
        'resetPasswordExpires': '',
        'phone': 1750227250,
        'roles': 'Manager',
        'address': {
          'address1': 'Jaffray Street',
          'city': 'Winfred',
          'state': 'Missouri',
          'zipCode': 57022
        },
        'createdBy': '57fb18864f5f843359a94805'
      },
      {
        'firstName': 'Grimes',
        'lastName': 'Blake',
        'email': 'grimesblake@glukgluk.com',
        'dob': '2010-05-18 10:36:06',
        'password': 'Georgia11522',
        'salt': 'cf1fdbed-3c9c-4df5-b43f-4ac91ac5bf18',
        'resetPasswordToken': 'e7facd01-019d-4c92-b16a-992d0fbca99f',
        'resetPasswordExpires': '',
        'phone': 1632271376,
        'roles': 'User',
        'address': {
          'address1': 'Moore Place',
          'city': 'Orick',
          'state': 'Massachusetts',
          'zipCode': 17725
        },
        'createdBy': '57fb18868f6856580ab624a5'
      },
      {
        'firstName': 'Chasity',
        'lastName': 'Chase',
        'email': 'chasitychase@glukgluk.com',
        'dob': '2000-04-04 01:50:33',
        'password': 'Delaware19344',
        'salt': 'c9f14264-e41b-4432-909a-3955c2671e66',
        'resetPasswordToken': 'c5559b4b-936a-4618-a8d8-b77a7a75c796',
        'resetPasswordExpires': '',
        'phone': 1048750860,
        'roles': 'Manager',
        'address': {
          'address1': 'Haring Street',
          'city': 'Worcester',
          'state': 'Ohio',
          'zipCode': 35131
        },
        'createdBy': '57fb1886cb120aaa592b7fee'
      },
      {
        'firstName': 'Head',
        'lastName': 'Hensley',
        'email': 'headhensley@glukgluk.com',
        'dob': '2005-11-27 04:26:51',
        'password': 'Colorado11063',
        'salt': '22adcf88-aa4a-4989-a40b-cf2675e42175',
        'resetPasswordToken': 'c960db4f-158a-44fd-8269-1416af8b94dd',
        'resetPasswordExpires': '',
        'phone': 1353893330,
        'roles': 'User',
        'address': {
          'address1': 'Noll Street',
          'city': 'Beechmont',
          'state': 'New Hampshire',
          'zipCode': 81412
        },
        'createdBy': '57fb1886078cf600d2534c50'
      },
      {
        'firstName': 'Pittman',
        'lastName': 'Sanford',
        'email': 'pittmansanford@glukgluk.com',
        'dob': '1996-03-15 08:54:31',
        'password': 'Rhode Island16726',
        'salt': 'dde971d6-2bd4-4069-99bd-a2d580bc2f97',
        'resetPasswordToken': 'f0665660-1d7e-4767-a7a4-df60f93ae4a7',
        'resetPasswordExpires': '',
        'phone': 1178803039,
        'roles': 'Employee',
        'address': {
          'address1': 'Pooles Lane',
          'city': 'Breinigsville',
          'state': 'Alabama',
          'zipCode': 19024
        },
        'createdBy': '57fb1886afb04b0b77bbde4f'
      },
      {
        'firstName': 'Trudy',
        'lastName': 'Branch',
        'email': 'trudybranch@glukgluk.com',
        'dob': '1995-11-08 01:49:52',
        'password': 'Oklahoma10392',
        'salt': '5507b1ea-a698-4009-9437-57c23b1b017a',
        'resetPasswordToken': 'e8a09c8a-4578-4ec7-8e66-4c97185420c1',
        'resetPasswordExpires': '',
        'phone': 1654247481,
        'roles': 'Employee',
        'address': {
          'address1': 'Claver Place',
          'city': 'Dunlo',
          'state': 'North Carolina',
          'zipCode': 20792
        },
        'createdBy': '57fb1886dc1daf06bbd007ec'
      },
      {
        'firstName': 'Glenna',
        'lastName': 'Juarez',
        'email': 'glennajuarez@glukgluk.com',
        'dob': '1993-01-12 03:35:50',
        'password': 'Northern Mariana Islands12272',
        'salt': 'c9b0efc5-330a-45bf-95a5-464d2e1d054a',
        'resetPasswordToken': '146b9d6b-12ff-4bad-be4d-20b50377beed',
        'resetPasswordExpires': '',
        'phone': 1860519393,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Rost Place',
          'city': 'Beason',
          'state': 'California',
          'zipCode': 53697
        },
        'createdBy': '57fb18865822ed9ce644ce8a'
      },
      {
        'firstName': 'Benita',
        'lastName': 'Vang',
        'email': 'benitavang@glukgluk.com',
        'dob': '2008-04-27 08:30:26',
        'password': 'New Jersey19682',
        'salt': '7a738b33-3c86-4659-a5c9-25917c98193c',
        'resetPasswordToken': 'f9b75ea5-cad2-41cc-8744-b869a8323acf',
        'resetPasswordExpires': '',
        'phone': 1964088950,
        'roles': 'Employee',
        'address': {
          'address1': 'Tompkins Place',
          'city': 'Englevale',
          'state': 'Guam',
          'zipCode': 58801
        },
        'createdBy': '57fb1886cc36ffb2d93f282e'
      },
      {
        'firstName': 'Kerri',
        'lastName': 'Gallagher',
        'email': 'kerrigallagher@glukgluk.com',
        'dob': '1996-03-10 08:36:38',
        'password': 'Idaho10562',
        'salt': 'aa3a19e4-5322-4efc-ba2b-d37dd66956ee',
        'resetPasswordToken': '033420b5-4b4b-4134-87fe-343cdc87227f',
        'resetPasswordExpires': '',
        'phone': 1597535469,
        'roles': 'User',
        'address': {
          'address1': 'Lake Place',
          'city': 'Dellview',
          'state': 'Puerto Rico',
          'zipCode': 59093
        },
        'createdBy': '57fb1886e6525abf002f8512'
      },
      {
        'firstName': 'Cortez',
        'lastName': 'Oconnor',
        'email': 'cortezoconnor@glukgluk.com',
        'dob': '2001-06-12 07:18:23',
        'password': 'Utah13910',
        'salt': 'b196598c-9818-476e-9489-c3b5838eb952',
        'resetPasswordToken': '4d3250c6-feaa-479a-9f3f-9d456a4ee476',
        'resetPasswordExpires': '',
        'phone': 1705507895,
        'roles': 'Admin',
        'address': {
          'address1': 'Jodie Court',
          'city': 'Sterling',
          'state': 'Louisiana',
          'zipCode': 27770
        },
        'createdBy': '57fb18869d7bfb03dd41dd97'
      },
      {
        'firstName': 'Berry',
        'lastName': 'Patterson',
        'email': 'berrypatterson@glukgluk.com',
        'dob': '1993-11-15 11:21:13',
        'password': 'Virginia18890',
        'salt': '3ebc75ea-a4fb-4bf3-8731-1524ef33e511',
        'resetPasswordToken': '5b86af62-7b82-4b02-9677-61dc9e5e7ac6',
        'resetPasswordExpires': '',
        'phone': 1425490383,
        'roles': 'Employee',
        'address': {
          'address1': 'Fayette Street',
          'city': 'Greenfields',
          'state': 'Illinois',
          'zipCode': 89164
        },
        'createdBy': '57fb188690f90d5293510817'
      },
      {
        'firstName': 'Jensen',
        'lastName': 'Bradford',
        'email': 'jensenbradford@glukgluk.com',
        'dob': '1991-05-01 04:49:20',
        'password': 'Arizona18534',
        'salt': 'ebf05f01-93e6-477e-ac12-ce66c0a991f0',
        'resetPasswordToken': 'c65806f6-bb17-41ee-bab5-dd0cafc4e7d2',
        'resetPasswordExpires': '',
        'phone': 1308713558,
        'roles': 'Admin',
        'address': {
          'address1': 'Ralph Avenue',
          'city': 'Rosine',
          'state': 'Montana',
          'zipCode': 55508
        },
        'createdBy': '57fb1886b866f375e0f4cf51'
      },
      {
        'firstName': 'Hubbard',
        'lastName': 'Mercer',
        'email': 'hubbardmercer@glukgluk.com',
        'dob': '1996-04-07 05:28:52',
        'password': 'Nebraska14335',
        'salt': '551eff02-92af-47d8-bced-32cf8c4f9ca8',
        'resetPasswordToken': '3b07622a-32ef-48f4-acdb-d3ba97ffea36',
        'resetPasswordExpires': '',
        'phone': 1770696232,
        'roles': 'Admin',
        'address': {
          'address1': 'Varet Street',
          'city': 'Homeland',
          'state': 'Vermont',
          'zipCode': 87448
        },
        'createdBy': '57fb1886556c3708b35575af'
      },
      {
        'firstName': 'Tamera',
        'lastName': 'Valenzuela',
        'email': 'tameravalenzuela@glukgluk.com',
        'dob': '2009-01-23 01:35:00',
        'password': 'Minnesota13363',
        'salt': '4a9707c2-83eb-4861-9090-9c55519a6d62',
        'resetPasswordToken': 'c51f30ca-c3b8-4b49-bf63-e9eafe7465ce',
        'resetPasswordExpires': '',
        'phone': 1801319496,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Coffey Street',
          'city': 'Cleary',
          'state': 'Mississippi',
          'zipCode': 21948
        },
        'createdBy': '57fb18862b142d5ad46af365'
      },
      {
        'firstName': 'Jacobs',
        'lastName': 'Bird',
        'email': 'jacobsbird@glukgluk.com',
        'dob': '1991-02-03 12:54:13',
        'password': 'Marshall Islands19572',
        'salt': '8be4d451-e73b-42d9-8f87-dbb40dc97646',
        'resetPasswordToken': '3f513503-523e-4d03-8083-07da3be976d4',
        'resetPasswordExpires': '',
        'phone': 1326778277,
        'roles': 'Manager',
        'address': {
          'address1': 'Imlay Street',
          'city': 'Gracey',
          'state': 'Washington',
          'zipCode': 78299
        },
        'createdBy': '57fb18865ba0660ff68ee41d'
      },
      {
        'firstName': 'Colette',
        'lastName': 'Peterson',
        'email': 'colettepeterson@glukgluk.com',
        'dob': '1996-08-29 12:21:33',
        'password': 'Indiana17749',
        'salt': '47bb2789-f1cd-4284-aadf-63111bbf4d2b',
        'resetPasswordToken': '7cd6a9a1-d7ba-45d1-a069-a8f5354ecb57',
        'resetPasswordExpires': '',
        'phone': 1414894665,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Gates Avenue',
          'city': 'Ribera',
          'state': 'Arkansas',
          'zipCode': 43939
        },
        'createdBy': '57fb1886b9a8e5d49b874daa'
      },
      {
        'firstName': 'Monique',
        'lastName': 'Robbins',
        'email': 'moniquerobbins@glukgluk.com',
        'dob': '2010-10-28 09:14:24',
        'password': 'Florida15118',
        'salt': '3544ea18-6ab3-4921-8e2d-b58fb6b7325f',
        'resetPasswordToken': '8cb8eb6f-9b91-41d1-96da-b8c1a2757c02',
        'resetPasswordExpires': '',
        'phone': 1473885732,
        'roles': 'Manager',
        'address': {
          'address1': 'Monument Walk',
          'city': 'Cornucopia',
          'state': 'Michigan',
          'zipCode': 67751
        },
        'createdBy': '57fb18869e1d7d8c60cc79e6'
      },
      {
        'firstName': 'Tonia',
        'lastName': 'Stanton',
        'email': 'toniastanton@glukgluk.com',
        'dob': '2001-02-25 06:15:00',
        'password': 'Pennsylvania15481',
        'salt': '4c85d1dd-f42d-4b59-bf2a-26d49335881c',
        'resetPasswordToken': '0d0381fa-3b88-4bcd-9c03-d1776fa9a01d',
        'resetPasswordExpires': '',
        'phone': 1360389891,
        'roles': 'Manager',
        'address': {
          'address1': 'Remsen Street',
          'city': 'Bladensburg',
          'state': 'Nevada',
          'zipCode': 12476
        },
        'createdBy': '57fb18866a09cf66486512ca'
      },
      {
        'firstName': 'Mcknight',
        'lastName': 'Drake',
        'email': 'mcknightdrake@glukgluk.com',
        'dob': '1999-10-21 12:07:16',
        'password': 'Maine10163',
        'salt': 'e53a6cf9-524f-4892-954d-43cc9b36ba4e',
        'resetPasswordToken': 'b1bf7349-302d-4430-9ec5-9788068811d0',
        'resetPasswordExpires': '',
        'phone': 1667923151,
        'roles': 'Employee',
        'address': {
          'address1': 'Norman Avenue',
          'city': 'Conway',
          'state': 'Federated States Of Micronesia',
          'zipCode': 21804
        },
        'createdBy': '57fb18861ac2de580352184e'
      },
      {
        'firstName': 'Michael',
        'lastName': 'Delgado',
        'email': 'michaeldelgado@glukgluk.com',
        'dob': '1992-05-09 05:48:30',
        'password': 'Texas10969',
        'salt': 'c91d8b61-5595-4fe6-9ce5-0bd8993c63f4',
        'resetPasswordToken': '981560fe-fab7-4b14-b154-253fb4f31ff1',
        'resetPasswordExpires': '',
        'phone': 1430596508,
        'roles': 'Employee',
        'address': {
          'address1': 'Etna Street',
          'city': 'Ola',
          'state': 'Iowa',
          'zipCode': 86482
        },
        'createdBy': '57fb188654c14ebb98aba559'
      },
      {
        'firstName': 'Lucia',
        'lastName': 'Singleton',
        'email': 'luciasingleton@glukgluk.com',
        'dob': '1997-06-23 07:45:03',
        'password': 'Alaska13536',
        'salt': 'e1f6a5d3-b6f6-47c8-80d0-0a1d92e57d05',
        'resetPasswordToken': '0757d32a-47a2-4005-bb82-8a579712c133',
        'resetPasswordExpires': '',
        'phone': 1770878645,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Herkimer Court',
          'city': 'Coaldale',
          'state': 'Wyoming',
          'zipCode': 52240
        },
        'createdBy': '57fb1886585744ab5ac94619'
      },
      {
        'firstName': 'Nicole',
        'lastName': 'Weaver',
        'email': 'nicoleweaver@glukgluk.com',
        'dob': '2003-12-15 07:36:11',
        'password': 'Kansas16088',
        'salt': '62191603-5d9b-4075-864f-7df991a2e30c',
        'resetPasswordToken': '6a746cb5-58c1-4ed9-934b-4f5049babe91',
        'resetPasswordExpires': '',
        'phone': 1323255043,
        'roles': 'User',
        'address': {
          'address1': 'Dekalb Avenue',
          'city': 'Riverton',
          'state': 'West Virginia',
          'zipCode': 89024
        },
        'createdBy': '57fb1886cd130a0e1deb4a41'
      },
      {
        'firstName': 'Ashley',
        'lastName': 'Cummings',
        'email': 'ashleycummings@glukgluk.com',
        'dob': '1998-11-24 01:28:54',
        'password': 'Wisconsin17834',
        'salt': 'e602f73a-0ac4-444c-a79e-952ae049817c',
        'resetPasswordToken': 'fdfaaa1d-1606-422a-9592-2953ad78a1d0',
        'resetPasswordExpires': '',
        'phone': 1319592367,
        'roles': 'Employee',
        'address': {
          'address1': 'Randolph Street',
          'city': 'Bynum',
          'state': 'South Dakota',
          'zipCode': 36594
        },
        'createdBy': '57fb1886d4bf7ff4aadb9375'
      },
      {
        'firstName': 'Cassie',
        'lastName': 'Frazier',
        'email': 'cassiefrazier@glukgluk.com',
        'dob': '1998-07-23 01:22:43',
        'password': 'District Of Columbia16191',
        'salt': 'de81c116-6fbb-4326-a8c4-30f54d1c7d7a',
        'resetPasswordToken': 'f8ac1bdf-0c17-44d9-92b7-621dd359ab60',
        'resetPasswordExpires': '',
        'phone': 1622056838,
        'roles': 'Manager',
        'address': {
          'address1': 'Kenmore Terrace',
          'city': 'Celeryville',
          'state': 'South Carolina',
          'zipCode': 66654
        },
        'createdBy': '57fb188683f0805584b6079d'
      },
      {
        'firstName': 'Edwina',
        'lastName': 'Mayo',
        'email': 'edwinamayo@glukgluk.com',
        'dob': '2005-06-02 07:00:14',
        'password': 'Kentucky18750',
        'salt': '859143f1-0356-4f45-aaf7-809be526ef9c',
        'resetPasswordToken': '2741cc73-e504-4c17-af54-a7c4635cf9b4',
        'resetPasswordExpires': '',
        'phone': 1330442164,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Division Place',
          'city': 'Wilsonia',
          'state': 'Tennessee',
          'zipCode': 85619
        },
        'createdBy': '57fb18861eacc2cfbf68cf9f'
      },
      {
        'firstName': 'Nguyen',
        'lastName': 'Best',
        'email': 'nguyenbest@glukgluk.com',
        'dob': '1998-11-15 05:51:16',
        'password': 'North Dakota17543',
        'salt': '571122ab-b760-4d62-9bc5-1165a30ec4c0',
        'resetPasswordToken': 'a6dd0487-da0c-467f-80cb-82f132622ade',
        'resetPasswordExpires': '',
        'phone': 1513168405,
        'roles': 'Admin',
        'address': {
          'address1': 'Sands Street',
          'city': 'Berwind',
          'state': 'American Samoa',
          'zipCode': 67762
        },
        'createdBy': '57fb188689948a23ab59e26a'
      },
      {
        'firstName': 'Marlene',
        'lastName': 'Valencia',
        'email': 'marlenevalencia@glukgluk.com',
        'dob': '2005-01-07 01:51:40',
        'password': 'Connecticut15562',
        'salt': 'da4f5da9-c041-40e2-8016-86920cc6957d',
        'resetPasswordToken': '19d0d6c4-f17e-4d2d-918c-22d677937e69',
        'resetPasswordExpires': '',
        'phone': 1836296949,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Hawthorne Street',
          'city': 'Roulette',
          'state': 'Palau',
          'zipCode': 37637
        },
        'createdBy': '57fb18867c6b911249ed3947'
      },
      {
        'firstName': 'Vinson',
        'lastName': 'Rocha',
        'email': 'vinsonrocha@glukgluk.com',
        'dob': '2015-04-12 04:01:00',
        'password': 'New York10166',
        'salt': '90a64527-c1a5-4a71-946e-f02cd2eedd6a',
        'resetPasswordToken': 'eadb16a4-4ba3-41d0-b3e8-2ea80f8d4395',
        'resetPasswordExpires': '',
        'phone': 1393228131,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Jackson Place',
          'city': 'Southview',
          'state': 'Oregon',
          'zipCode': 78046
        },
        'createdBy': '57fb1886529864b653582791'
      },
      {
        'firstName': 'Cash',
        'lastName': 'Weiss',
        'email': 'cashweiss@glukgluk.com',
        'dob': '2015-03-12 06:21:18',
        'password': 'New Mexico18413',
        'salt': '115e311e-e08d-49ce-a8b9-c50cef2a6768',
        'resetPasswordToken': '258b4a8e-1d15-455a-9132-da832f2c0272',
        'resetPasswordExpires': '',
        'phone': 1600070127,
        'roles': 'Admin',
        'address': {
          'address1': 'Taylor Street',
          'city': 'Iberia',
          'state': 'Hawaii',
          'zipCode': 54245
        },
        'createdBy': '57fb188612122135b91c6d68'
      },
      {
        'firstName': 'Kathryn',
        'lastName': 'Alford',
        'email': 'kathrynalford@glukgluk.com',
        'dob': '1998-10-01 06:35:15',
        'password': 'Virgin Islands17734',
        'salt': '098635df-fbf9-4af9-8cea-248939fa676e',
        'resetPasswordToken': '99f1574a-6f36-4a48-b842-b0ea878f8e9e',
        'resetPasswordExpires': '',
        'phone': 1124515687,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Drew Street',
          'city': 'Riegelwood',
          'state': 'Missouri',
          'zipCode': 10568
        },
        'createdBy': '57fb1886eda7d65f265e87b8'
      },
      {
        'firstName': 'Elma',
        'lastName': 'Oneil',
        'email': 'elmaoneil@glukgluk.com',
        'dob': '1993-10-28 10:53:52',
        'password': 'Georgia19398',
        'salt': 'b0b3494b-c2a7-485e-9e11-e9832eca7ebf',
        'resetPasswordToken': '2de235f6-dadb-4e4b-96d6-cc995f5ee396',
        'resetPasswordExpires': '',
        'phone': 1605107212,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Lois Avenue',
          'city': 'Riviera',
          'state': 'Massachusetts',
          'zipCode': 23571
        },
        'createdBy': '57fb1886aa8f7995c8590248'
      },
      {
        'firstName': 'Matilda',
        'lastName': 'Porter',
        'email': 'matildaporter@glukgluk.com',
        'dob': '2002-01-09 02:17:45',
        'password': 'Delaware12099',
        'salt': 'b2e2a2a0-cb76-4c0b-9a24-bda2582b1beb',
        'resetPasswordToken': '4d1ea88b-7a8d-4955-a1ef-743667e98233',
        'resetPasswordExpires': '',
        'phone': 1528369188,
        'roles': 'User',
        'address': {
          'address1': 'Doscher Street',
          'city': 'Boykin',
          'state': 'Ohio',
          'zipCode': 65915
        },
        'createdBy': '57fb18861a97f68de8081924'
      },
      {
        'firstName': 'Mcdaniel',
        'lastName': 'Curry',
        'email': 'mcdanielcurry@glukgluk.com',
        'dob': '2011-09-26 05:08:20',
        'password': 'Colorado14274',
        'salt': '71b7e2d5-4ec9-4e4b-9f26-6a0c362d34a4',
        'resetPasswordToken': 'b07953ac-ff96-463a-8905-a8d42535b6c0',
        'resetPasswordExpires': '',
        'phone': 1951066648,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Lester Court',
          'city': 'Osage',
          'state': 'New Hampshire',
          'zipCode': 14790
        },
        'createdBy': '57fb1886f9028f151ed31132'
      },
      {
        'firstName': 'Manning',
        'lastName': 'Wyatt',
        'email': 'manningwyatt@glukgluk.com',
        'dob': '1998-07-15 08:54:07',
        'password': 'Rhode Island11023',
        'salt': 'edf4ef2a-8247-4e9b-9a51-0dbb4b3d510e',
        'resetPasswordToken': '7ae54182-9fbf-45ef-a8e0-794867200d07',
        'resetPasswordExpires': '',
        'phone': 1950264749,
        'roles': 'Employee',
        'address': {
          'address1': 'Hutchinson Court',
          'city': 'Efland',
          'state': 'Alabama',
          'zipCode': 52015
        },
        'createdBy': '57fb1886c0773a1f44ffece6'
      },
      {
        'firstName': 'Judy',
        'lastName': 'Soto',
        'email': 'judysoto@glukgluk.com',
        'dob': '1999-07-30 03:26:00',
        'password': 'Oklahoma13074',
        'salt': '1017dac7-7b4e-4f94-8878-ad71976e20e6',
        'resetPasswordToken': '3a553bbd-b6b7-4497-bc09-db3eff1df460',
        'resetPasswordExpires': '',
        'phone': 1336210998,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Throop Avenue',
          'city': 'Groton',
          'state': 'North Carolina',
          'zipCode': 64385
        },
        'createdBy': '57fb18862f115f5de0fdf4aa'
      },
      {
        'firstName': 'Lorie',
        'lastName': 'Rasmussen',
        'email': 'lorierasmussen@glukgluk.com',
        'dob': '1996-08-29 07:58:46',
        'password': 'Northern Mariana Islands10407',
        'salt': 'd201777e-d893-4cb4-a3a9-06ddd1398209',
        'resetPasswordToken': '67df96d3-ef05-44e4-a828-c8df34241de0',
        'resetPasswordExpires': '',
        'phone': 1387531119,
        'roles': 'User',
        'address': {
          'address1': 'Kingsway Place',
          'city': 'Venice',
          'state': 'California',
          'zipCode': 22215
        },
        'createdBy': '57fb188645058ccab7fe6145'
      },
      {
        'firstName': 'Ollie',
        'lastName': 'Hancock',
        'email': 'olliehancock@glukgluk.com',
        'dob': '2006-03-14 09:31:07',
        'password': 'New Jersey15839',
        'salt': '61dfd214-8034-4ab6-bccf-eccdbafcc8a0',
        'resetPasswordToken': 'd169299f-a8d3-4d08-8b27-60669b4d6707',
        'resetPasswordExpires': '',
        'phone': 1181152975,
        'roles': 'User',
        'address': {
          'address1': 'Chester Avenue',
          'city': 'Caspar',
          'state': 'Guam',
          'zipCode': 18229
        },
        'createdBy': '57fb1886f21ba090c1dc84e6'
      },
      {
        'firstName': 'Cannon',
        'lastName': 'Townsend',
        'email': 'cannontownsend@glukgluk.com',
        'dob': '1997-08-25 12:02:12',
        'password': 'Idaho10511',
        'salt': 'e62faa0f-2e9b-40ad-b7d0-69e85551637d',
        'resetPasswordToken': '9108cdbf-7f66-4f81-ae33-0a34fa8a70b5',
        'resetPasswordExpires': '',
        'phone': 1569620009,
        'roles': 'User',
        'address': {
          'address1': 'Lincoln Road',
          'city': 'Adamstown',
          'state': 'Puerto Rico',
          'zipCode': 20828
        },
        'createdBy': '57fb18866acb36ee51eae421'
      },
      {
        'firstName': 'Branch',
        'lastName': 'Sampson',
        'email': 'branchsampson@glukgluk.com',
        'dob': '2004-03-11 10:27:25',
        'password': 'Utah14365',
        'salt': '24375753-db40-43c4-b58d-4129f9442a61',
        'resetPasswordToken': 'ae87aa05-314e-48c2-bca0-dcf32b8fdb62',
        'resetPasswordExpires': '',
        'phone': 1471705290,
        'roles': 'Manager',
        'address': {
          'address1': 'Garden Street',
          'city': 'Orason',
          'state': 'Louisiana',
          'zipCode': 76384
        },
        'createdBy': '57fb18867d84e84ed3d71cb5'
      },
      {
        'firstName': 'Vega',
        'lastName': 'Wall',
        'email': 'vegawall@glukgluk.com',
        'dob': '1995-04-05 01:00:44',
        'password': 'Virginia14714',
        'salt': '4f8f30ec-ecd0-4dd4-9011-af347f748a29',
        'resetPasswordToken': '9ab5dde4-af68-4cad-9df1-5c47033bfbbc',
        'resetPasswordExpires': '',
        'phone': 1779204579,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Richardson Street',
          'city': 'Cloverdale',
          'state': 'Illinois',
          'zipCode': 55008
        },
        'createdBy': '57fb1886fdd3b6fd26426079'
      },
      {
        'firstName': 'Wilkins',
        'lastName': 'Carney',
        'email': 'wilkinscarney@glukgluk.com',
        'dob': '2003-12-10 01:28:08',
        'password': 'Arizona15004',
        'salt': 'f64038ce-089e-4a37-9718-414cebc23c31',
        'resetPasswordToken': '18f2d665-1e0e-4237-867a-9204f60999ed',
        'resetPasswordExpires': '',
        'phone': 1369610841,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Prince Street',
          'city': 'Sunnyside',
          'state': 'Montana',
          'zipCode': 26688
        },
        'createdBy': '57fb18864a03b3a750cfeba5'
      },
      {
        'firstName': 'Hope',
        'lastName': 'Vargas',
        'email': 'hopevargas@glukgluk.com',
        'dob': '1996-03-22 05:56:48',
        'password': 'Nebraska14708',
        'salt': '5e88d452-8c18-4966-a6e9-deed39e4eec3',
        'resetPasswordToken': 'f7fb5f08-535c-43ab-b555-4d8664308b7e',
        'resetPasswordExpires': '',
        'phone': 1142182374,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Aster Court',
          'city': 'Brule',
          'state': 'Vermont',
          'zipCode': 13063
        },
        'createdBy': '57fb1886106de4fcc922860c'
      },
      {
        'firstName': 'Patel',
        'lastName': 'Woodward',
        'email': 'patelwoodward@glukgluk.com',
        'dob': '1996-04-03 12:29:40',
        'password': 'Minnesota16194',
        'salt': 'bbbcd6d2-e383-42a0-935f-283512b314ed',
        'resetPasswordToken': 'cf6ea030-a7d3-4b17-93d4-44422e9e85cd',
        'resetPasswordExpires': '',
        'phone': 1925530662,
        'roles': 'Manager',
        'address': {
          'address1': 'Amber Street',
          'city': 'Jessie',
          'state': 'Mississippi',
          'zipCode': 26690
        },
        'createdBy': '57fb18862cde0680b806a8d1'
      },
      {
        'firstName': 'Rutledge',
        'lastName': 'Clemons',
        'email': 'rutledgeclemons@glukgluk.com',
        'dob': '2002-07-18 01:21:21',
        'password': 'Marshall Islands10194',
        'salt': 'decebe8c-1dd1-466a-aec0-a6fdfd3cc72d',
        'resetPasswordToken': 'a55a0e4d-fb6f-4cce-8599-2a021f968f96',
        'resetPasswordExpires': '',
        'phone': 1869042045,
        'roles': 'Employee',
        'address': {
          'address1': 'Frank Court',
          'city': 'National',
          'state': 'Washington',
          'zipCode': 75361
        },
        'createdBy': '57fb1886e041589ec65e4d4c'
      },
      {
        'firstName': 'Erin',
        'lastName': 'Copeland',
        'email': 'erincopeland@glukgluk.com',
        'dob': '1998-11-23 12:01:34',
        'password': 'Indiana16761',
        'salt': '7869016d-a31c-4467-90b4-31a8090b3c15',
        'resetPasswordToken': 'c47a0836-a45e-4f38-9549-60119c873052',
        'resetPasswordExpires': '',
        'phone': 1802068327,
        'roles': 'Employee',
        'address': {
          'address1': 'Lawton Street',
          'city': 'Advance',
          'state': 'Arkansas',
          'zipCode': 26018
        },
        'createdBy': '57fb1886a6b70f3e600e6a06'
      },
      {
        'firstName': 'Carmen',
        'lastName': 'Castaneda',
        'email': 'carmencastaneda@glukgluk.com',
        'dob': '2008-12-20 07:09:13',
        'password': 'Florida18499',
        'salt': 'a044d3e4-2e29-4510-8c99-15c98302b189',
        'resetPasswordToken': '482c617f-17ba-4e31-9bb6-636bb4a08bab',
        'resetPasswordExpires': '',
        'phone': 1093312623,
        'roles': 'Admin',
        'address': {
          'address1': 'Garnet Street',
          'city': 'Dexter',
          'state': 'Michigan',
          'zipCode': 43752
        },
        'createdBy': '57fb1886ce9d620caaac9ecf'
      },
      {
        'firstName': 'Diana',
        'lastName': 'Hopkins',
        'email': 'dianahopkins@glukgluk.com',
        'dob': '2013-06-19 12:28:35',
        'password': 'Pennsylvania19865',
        'salt': '624c7ca5-a928-456a-8ffb-eb2bcfa6f867',
        'resetPasswordToken': 'd2b70623-66dd-4980-81b1-a0dd0b19995a',
        'resetPasswordExpires': '',
        'phone': 1862795171,
        'roles': 'Manager',
        'address': {
          'address1': 'Linden Boulevard',
          'city': 'Marbury',
          'state': 'Nevada',
          'zipCode': 73506
        },
        'createdBy': '57fb18868deff295b5d29ef7'
      },
      {
        'firstName': 'Bradshaw',
        'lastName': 'Schmidt',
        'email': 'bradshawschmidt@glukgluk.com',
        'dob': '1996-08-28 03:10:49',
        'password': 'Maine10932',
        'salt': 'df36a5e0-2963-4ef0-b611-1016448dff2c',
        'resetPasswordToken': '9f9afd7c-e043-47fc-a897-92bf7dbeb954',
        'resetPasswordExpires': '',
        'phone': 1572055208,
        'roles': 'Employee',
        'address': {
          'address1': 'Schweikerts Walk',
          'city': 'Foscoe',
          'state': 'Federated States Of Micronesia',
          'zipCode': 69961
        },
        'createdBy': '57fb1886b281039e6afe03b0'
      },
      {
        'firstName': 'Booth',
        'lastName': 'Ayers',
        'email': 'boothayers@glukgluk.com',
        'dob': '1999-06-27 08:05:47',
        'password': 'Texas16442',
        'salt': '9f9f4744-8d51-429b-ab3c-65d3e65cbf8c',
        'resetPasswordToken': '267099de-7cde-46f4-80f1-05c9158eab82',
        'resetPasswordExpires': '',
        'phone': 1016808436,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Dare Court',
          'city': 'Remington',
          'state': 'Iowa',
          'zipCode': 62322
        },
        'createdBy': '57fb18866c47306af31e334c'
      },
      {
        'firstName': 'Katherine',
        'lastName': 'Knox',
        'email': 'katherineknox@glukgluk.com',
        'dob': '1995-10-15 10:08:27',
        'password': 'Alaska11336',
        'salt': '8bc6c57e-4ea3-43a3-87c3-c3c6db464dd9',
        'resetPasswordToken': '8930515a-0443-443a-b303-f8d09e853f29',
        'resetPasswordExpires': '',
        'phone': 1480841020,
        'roles': 'Employee',
        'address': {
          'address1': 'Colonial Court',
          'city': 'Ogema',
          'state': 'Wyoming',
          'zipCode': 27918
        },
        'createdBy': '57fb1886aa0eb56956b6ef34'
      },
      {
        'firstName': 'Lyons',
        'lastName': 'Mcconnell',
        'email': 'lyonsmcconnell@glukgluk.com',
        'dob': '1996-12-11 05:06:12',
        'password': 'Kansas10163',
        'salt': '1f8977dc-c9de-41c1-96fe-abdfc5741f02',
        'resetPasswordToken': 'd9ad4a93-5849-4f29-b688-88e6ef1dbb52',
        'resetPasswordExpires': '',
        'phone': 1593198270,
        'roles': 'Employee',
        'address': {
          'address1': 'Highland Place',
          'city': 'Boling',
          'state': 'West Virginia',
          'zipCode': 27153
        },
        'createdBy': '57fb18862a43080eff55dfc8'
      },
      {
        'firstName': 'Earline',
        'lastName': 'Rosa',
        'email': 'earlinerosa@glukgluk.com',
        'dob': '2007-05-20 06:23:29',
        'password': 'Wisconsin19039',
        'salt': '119c2d09-81d6-4e41-94d2-3faf6f74fec8',
        'resetPasswordToken': 'a8c78d5a-d7f5-464c-9e99-157e31b7dbab',
        'resetPasswordExpires': '',
        'phone': 1784495050,
        'roles': 'Employee',
        'address': {
          'address1': 'Granite Street',
          'city': 'Fulford',
          'state': 'South Dakota',
          'zipCode': 70818
        },
        'createdBy': '57fb188644de0349c4399d2f'
      },
      {
        'firstName': 'Ballard',
        'lastName': 'White',
        'email': 'ballardwhite@glukgluk.com',
        'dob': '1999-08-05 02:03:18',
        'password': 'District Of Columbia19373',
        'salt': '4c1fec2b-1117-478a-bc16-8cc0b0b7b9f0',
        'resetPasswordToken': '62d40f4b-c9ab-44dc-ba3a-9ba0eb86dea1',
        'resetPasswordExpires': '',
        'phone': 1710177511,
        'roles': 'Manager',
        'address': {
          'address1': 'Exeter Street',
          'city': 'Bennett',
          'state': 'South Carolina',
          'zipCode': 12862
        },
        'createdBy': '57fb188691f880348b86b38a'
      },
      {
        'firstName': 'Holcomb',
        'lastName': 'Wooten',
        'email': 'holcombwooten@glukgluk.com',
        'dob': '2015-03-04 12:39:01',
        'password': 'Kentucky18199',
        'salt': 'ce811642-5e73-4aa0-8ac8-8a56e7413264',
        'resetPasswordToken': 'dfbe0e5e-749b-48d9-bef6-bbb85f0a4569',
        'resetPasswordExpires': '',
        'phone': 1457882381,
        'roles': 'Employee',
        'address': {
          'address1': 'Jardine Place',
          'city': 'Gorst',
          'state': 'Tennessee',
          'zipCode': 30977
        },
        'createdBy': '57fb1886b95e60255515631a'
      },
      {
        'firstName': 'Gardner',
        'lastName': 'Pope',
        'email': 'gardnerpope@glukgluk.com',
        'dob': '2014-05-07 03:41:40',
        'password': 'North Dakota19270',
        'salt': '87684dfa-5c9d-420a-92c0-f346b970c5a6',
        'resetPasswordToken': '8cb7c2d5-67f1-41f6-8db7-f0469015c49c',
        'resetPasswordExpires': '',
        'phone': 1439124972,
        'roles': 'Employee',
        'address': {
          'address1': 'Dunne Court',
          'city': 'Teasdale',
          'state': 'American Samoa',
          'zipCode': 63023
        },
        'createdBy': '57fb188669079e8b7b153e7e'
      },
      {
        'firstName': 'Rosella',
        'lastName': 'Swanson',
        'email': 'rosellaswanson@glukgluk.com',
        'dob': '2012-09-26 05:15:51',
        'password': 'Connecticut12821',
        'salt': '1e31bffb-a1b8-4d82-bed2-e075ead51ee4',
        'resetPasswordToken': '280271d9-d9af-4148-a75c-dd0dfba089e6',
        'resetPasswordExpires': '',
        'phone': 1915111609,
        'roles': 'SuperAdmin',
        'address': {
          'address1': 'Opal Court',
          'city': 'Taft',
          'state': 'Palau',
          'zipCode': 69195
        },
        'createdBy': '57fb18862360f1c4e3fe8e79'
      },
      {
        'firstName': 'Mildred',
        'lastName': 'Giles',
        'email': 'mildredgiles@glukgluk.com',
        'dob': '2015-10-26 08:47:04',
        'password': 'New York10226',
        'salt': 'b8d6338d-acd6-4508-895b-d903487bbb4b',
        'resetPasswordToken': '478f686c-d425-4bde-884c-b693aba2c0ff',
        'resetPasswordExpires': '',
        'phone': 1738280328,
        'roles': 'User',
        'address': {
          'address1': 'Cleveland Street',
          'city': 'Bodega',
          'state': 'Oregon',
          'zipCode': 45413
        },
        'createdBy': '57fb1886eb2b92d57ad4779a'
      },
      {
        'firstName': 'Francis',
        'lastName': 'Cabrera',
        'email': 'franciscabrera@glukgluk.com',
        'dob': '1998-04-26 06:19:17',
        'password': 'New Mexico17398',
        'salt': '3b709616-05b0-4657-a463-d876775d2291',
        'resetPasswordToken': '9917b10d-d9a3-41d4-bcd1-74a14e56adce',
        'resetPasswordExpires': '',
        'phone': 1257272420,
        'roles': 'Manager',
        'address': {
          'address1': 'Branton Street',
          'city': 'Dante',
          'state': 'Hawaii',
          'zipCode': 32802
        },
        'createdBy': '57fb1886c59f74707cf0d153'
      },
      {
        'firstName': 'Nikki',
        'lastName': 'Spence',
        'email': 'nikkispence@glukgluk.com',
        'dob': '2000-08-15 06:56:05',
        'password': 'Virgin Islands12484',
        'salt': 'af0a50ed-a7fb-4e7b-b3e2-3b45655fc6c0',
        'resetPasswordToken': '1703de8b-28c3-4c70-a702-052e9e81e765',
        'resetPasswordExpires': '',
        'phone': 1429041681,
        'roles': 'Manager',
        'address': {
          'address1': 'Wyckoff Avenue',
          'city': 'Coldiron',
          'state': 'Missouri',
          'zipCode': 60068
        },
        'createdBy': '57fb188673de49a169fd6fa3'
      },
      {
        'firstName': 'Steele',
        'lastName': 'Castillo',
        'email': 'steelecastillo@glukgluk.com',
        'dob': '2015-10-22 05:54:59',
        'password': 'Georgia16208',
        'salt': 'c9c532f9-8fa2-4487-9249-22a98128f5c1',
        'resetPasswordToken': 'f6072ea3-c317-4b95-be8f-8d2b6b5bb005',
        'resetPasswordExpires': '',
        'phone': 1292638429,
        'roles': 'User',
        'address': {
          'address1': 'Times Placez',
          'city': 'Chamizal',
          'state': 'Massachusetts',
          'zipCode': 57227
        },
        'createdBy': '57fb1886b51e4be23e50bcd3'
      }
    ]
  }
]

module.exports = data
