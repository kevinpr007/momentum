const mongoDB = require('../../config/mongoose.collections.json')

// Data array containing seed data - documents organized by Model
var data = {
  'model': mongoDB.Model.User,
  'documents': [
    {
      'firstName': 'Rich',
      'lastName': 'Ortiz',
      'email': 'richortiz@gluid.com',
      'dob': '2005-07-24 11:45:30',
      'password': 'Maine17290',
      'salt': 'fb880278-ccc3-4b8a-a0bd-1204de177703',
      'resetPasswordToken': '3bca6b66-d97f-4e19-9324-97037625ee78',
      'resetPasswordExpires': '',
      'phone': 1088615191,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Conklin Avenue',
        'city': 'Windsor',
        'state': 'South Dakota',
        'zipCode': 24488
      },
      'createdBy': '5857f60f59bb9fb914c9c652'
    },
    {
      'firstName': 'Myers',
      'lastName': 'Ramsey',
      'email': 'myersramsey@gluid.com',
      'dob': '2005-09-06 12:39:01',
      'password': 'Palau19866',
      'salt': '09e9a51d-acbf-4356-b875-917f6fb0f7d4',
      'resetPasswordToken': 'f94d72c2-3612-4758-a12a-9089c9a52973',
      'resetPasswordExpires': '',
      'phone': 1050533429,
      'roles': [
        'User'
      ],
      'address': {
        'address1': 'Beard Street',
        'city': 'Belva',
        'state': 'Montana',
        'zipCode': 30540
      },
      'createdBy': '5857f60f4d363096463bde3d'
    },
    {
      'firstName': 'Juliette',
      'lastName': 'Gomez',
      'email': 'juliettegomez@gluid.com',
      'dob': '1997-07-03 06:44:01',
      'password': 'Arkansas19835',
      'salt': 'd1758570-30ef-4c08-85fd-26479d133439',
      'resetPasswordToken': 'c0bee68a-b7e4-4527-bfae-4f3cbb14e1a8',
      'resetPasswordExpires': '',
      'phone': 1883686064,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Classon Avenue',
        'city': 'Collins',
        'state': 'Vermont',
        'zipCode': 48297
      },
      'createdBy': '5857f60fa72132422746cea3'
    },
    {
      'firstName': 'Erin',
      'lastName': 'Grant',
      'email': 'eringrant@gluid.com',
      'dob': '2001-11-06 07:03:10',
      'password': 'New Jersey19074',
      'salt': '1746fccf-e769-447a-998b-11a9d58bc59a',
      'resetPasswordToken': 'b7a3ee54-4a1a-4069-a681-503e5eed1d75',
      'resetPasswordExpires': '',
      'phone': 1988859681,
      'roles': [
        'User',
        'Admin'
      ],
      'address': {
        'address1': 'Sedgwick Street',
        'city': 'Buxton',
        'state': 'Federated States Of Micronesia',
        'zipCode': 87922
      },
      'createdBy': '5857f60f121ab5ffe9e9a341'
    },
    {
      'firstName': 'Willa',
      'lastName': 'Merritt',
      'email': 'willamerritt@gluid.com',
      'dob': '1994-06-14 01:32:05',
      'password': 'North Dakota10261',
      'salt': 'a5818ed9-dea3-4840-ad0a-9f61de4a186c',
      'resetPasswordToken': '4a53add6-e49e-4a8d-b7a2-811d3a2a66e1',
      'resetPasswordExpires': '',
      'phone': 1680648394,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Lawton Street',
        'city': 'Stevens',
        'state': 'New York',
        'zipCode': 79764
      },
      'createdBy': '5857f60f373bbd31e511ea3f'
    },
    {
      'firstName': 'Alisa',
      'lastName': 'Chang',
      'email': 'alisachang@gluid.com',
      'dob': '1998-06-16 07:42:44',
      'password': 'Nebraska19856',
      'salt': '0fcad309-b2c2-4a01-88f4-6639228766db',
      'resetPasswordToken': '8c1c36de-6ac2-4d24-96f2-0f8f379aaf0c',
      'resetPasswordExpires': '',
      'phone': 1694276450,
      'roles': [
        'Manager',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Hart Place',
        'city': 'Grantville',
        'state': 'District Of Columbia',
        'zipCode': 79584
      },
      'createdBy': '5857f60fa91915711a1666bb'
    },
    {
      'firstName': 'Gardner',
      'lastName': 'Bennett',
      'email': 'gardnerbennett@gluid.com',
      'dob': '2011-02-15 02:42:51',
      'password': 'Massachusetts14647',
      'salt': '657e24ae-5efc-45c2-8c1d-8eb5ca1f846a',
      'resetPasswordToken': 'c30c9241-97b6-403a-8030-25d8aa65db58',
      'resetPasswordExpires': '',
      'phone': 1454021661,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Sullivan Place',
        'city': 'Wakarusa',
        'state': 'Illinois',
        'zipCode': 84492
      },
      'createdBy': '5857f60f2f0a86a98fc70de0'
    },
    {
      'firstName': 'Lorie',
      'lastName': 'Kelly',
      'email': 'loriekelly@gluid.com',
      'dob': '2003-11-26 12:25:41',
      'password': 'Michigan12270',
      'salt': '85e37ba2-4866-4c2e-8f5c-cb12afc1d3a7',
      'resetPasswordToken': 'd21c6a38-6b80-400f-b042-f81c3c04a5a8',
      'resetPasswordExpires': '',
      'phone': 1904159545,
      'roles': [
        'Admin',
        'Manager'
      ],
      'address': {
        'address1': 'Love Lane',
        'city': 'Winston',
        'state': 'Washington',
        'zipCode': 62527
      },
      'createdBy': '5857f60f7b0d9698473ac27b'
    },
    {
      'firstName': 'Sonja',
      'lastName': 'Phelps',
      'email': 'sonjaphelps@gluid.com',
      'dob': '2015-05-14 01:17:45',
      'password': 'American Samoa13830',
      'salt': '394509c8-f1eb-40cc-adef-a0e22c06b63a',
      'resetPasswordToken': '00ea7d73-6d8d-4abf-b747-83acd5239ac9',
      'resetPasswordExpires': '',
      'phone': 1709535578,
      'roles': [
        'sysAdmin',
        'Employee'
      ],
      'address': {
        'address1': 'Lee Avenue',
        'city': 'Naomi',
        'state': 'Guam',
        'zipCode': 14733
      },
      'createdBy': '5857f60f8754b165c998d2e5'
    },
    {
      'firstName': 'Rae',
      'lastName': 'Key',
      'email': 'raekey@gluid.com',
      'dob': '2013-12-09 12:48:18',
      'password': 'Colorado15633',
      'salt': '62182751-d648-4aad-b3f5-e2cb427b2164',
      'resetPasswordToken': 'fd6ea76d-1b08-4a40-9a52-a1d40d54b047',
      'resetPasswordExpires': '',
      'phone': 1320459000,
      'roles': [
        'User'
      ],
      'address': {
        'address1': 'Gatling Place',
        'city': 'Stewart',
        'state': 'Nevada',
        'zipCode': 41309
      },
      'createdBy': '5857f60fc57b2b3888e2e5a4'
    },
    {
      'firstName': 'Adrian',
      'lastName': 'Williamson',
      'email': 'adrianwilliamson@gluid.com',
      'dob': '2003-10-06 06:43:01',
      'password': 'Iowa13931',
      'salt': '9e2dd32f-8937-42db-b8f2-12c934f5b95d',
      'resetPasswordToken': 'ca3cb464-b0e5-41dd-9a81-63ebc184d003',
      'resetPasswordExpires': '',
      'phone': 1602031431,
      'roles': [
        'Admin',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Church Avenue',
        'city': 'Thornport',
        'state': 'Mississippi',
        'zipCode': 29412
      },
      'createdBy': '5857f60f3592ce8a03df5ab2'
    },
    {
      'firstName': 'Hurst',
      'lastName': 'Montgomery',
      'email': 'hurstmontgomery@gluid.com',
      'dob': '1998-01-18 03:09:20',
      'password': 'Northern Mariana Islands15617',
      'salt': '2c46a312-ca9b-45b5-8f84-a1918218246b',
      'resetPasswordToken': '74bd546a-5807-4ddf-83ec-cb23380d6dc6',
      'resetPasswordExpires': '',
      'phone': 1425698865,
      'roles': [
        'Manager',
        'Employee'
      ],
      'address': {
        'address1': 'Hampton Place',
        'city': 'Noxen',
        'state': 'New Mexico',
        'zipCode': 80343
      },
      'createdBy': '5857f60f2ecc05109c0442b4'
    },
    {
      'firstName': 'Chambers',
      'lastName': 'Witt',
      'email': 'chamberswitt@gluid.com',
      'dob': '1997-11-11 05:35:05',
      'password': 'Oklahoma19475',
      'salt': '8479428b-70fd-4055-8cbc-bc44a07a81af',
      'resetPasswordToken': '3795ef6d-103c-40ec-b5e2-d66b723deb0d',
      'resetPasswordExpires': '',
      'phone': 1588878003,
      'roles': [
        'User'
      ],
      'address': {
        'address1': 'Eckford Street',
        'city': 'Mappsville',
        'state': 'Rhode Island',
        'zipCode': 44132
      },
      'createdBy': '5857f60f42e301434935b660'
    },
    {
      'firstName': 'Katharine',
      'lastName': 'Cameron',
      'email': 'katharinecameron@gluid.com',
      'dob': '2008-08-22 05:31:13',
      'password': 'Texas11008',
      'salt': '34a1ff3f-ce52-4850-a2d3-617fd235ceea',
      'resetPasswordToken': 'e353aaf0-17c6-4db7-b1c8-d01776d052e1',
      'resetPasswordExpires': '',
      'phone': 1947293940,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Bartlett Street',
        'city': 'Brecon',
        'state': 'Virgin Islands',
        'zipCode': 52113
      },
      'createdBy': '5857f60ffbd44b74ee721f2b'
    },
    {
      'firstName': 'Donna',
      'lastName': 'Levy',
      'email': 'donnalevy@gluid.com',
      'dob': '1995-02-10 12:07:38',
      'password': 'Wyoming16943',
      'salt': 'f2860532-b000-441b-b035-bcfcb84c0723',
      'resetPasswordToken': 'd64ba767-6489-4a16-b93e-76fe2db79b7a',
      'resetPasswordExpires': '',
      'phone': 1689317406,
      'roles': [
        'Admin'
      ],
      'address': {
        'address1': 'Church Lane',
        'city': 'Wedgewood',
        'state': 'Louisiana',
        'zipCode': 35948
      },
      'createdBy': '5857f60f58ceb377246d8723'
    },
    {
      'firstName': 'Bishop',
      'lastName': 'Shannon',
      'email': 'bishopshannon@gluid.com',
      'dob': '2008-03-22 04:15:54',
      'password': 'Arizona15968',
      'salt': 'b6e6c159-a18b-489f-a442-13a9d45544ac',
      'resetPasswordToken': '0f1fbdfe-ed52-42de-afe4-7a7006fbc97e',
      'resetPasswordExpires': '',
      'phone': 1846723061,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Dearborn Court',
        'city': 'Echo',
        'state': 'Pennsylvania',
        'zipCode': 11887
      },
      'createdBy': '5857f60fb8d773977cb413f9'
    },
    {
      'firstName': 'Wong',
      'lastName': 'Franklin',
      'email': 'wongfranklin@gluid.com',
      'dob': '1991-10-01 01:44:16',
      'password': 'Wisconsin15211',
      'salt': '90d7091f-2a47-43e7-8d47-f82e6320e41a',
      'resetPasswordToken': '047c3e5c-e205-4f98-9a6e-909ad362095c',
      'resetPasswordExpires': '',
      'phone': 1741616823,
      'roles': [
        'Employee',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Denton Place',
        'city': 'Franklin',
        'state': 'Ohio',
        'zipCode': 42904
      },
      'createdBy': '5857f60ffbb47e61e2eb25cd'
    },
    {
      'firstName': 'Blackburn',
      'lastName': 'Porter',
      'email': 'blackburnporter@gluid.com',
      'dob': '1999-11-17 01:39:41',
      'password': 'Kansas16679',
      'salt': 'c2512b4d-23e3-4482-a397-ad45c17beb98',
      'resetPasswordToken': '76ae884a-cf07-4e02-9fe5-9153a62acb6e',
      'resetPasswordExpires': '',
      'phone': 1455031297,
      'roles': [
        'User'
      ],
      'address': {
        'address1': 'Junius Street',
        'city': 'Fairlee',
        'state': 'Idaho',
        'zipCode': 89108
      },
      'createdBy': '5857f60fb9783105574782a1'
    },
    {
      'firstName': 'Rosanna',
      'lastName': 'Dunn',
      'email': 'rosannadunn@gluid.com',
      'dob': '2015-04-28 02:13:36',
      'password': 'Marshall Islands12874',
      'salt': 'ad12ab5a-d0bb-44a9-86e6-d85b5e853163',
      'resetPasswordToken': 'b4ddada5-c271-4eca-97ac-abff9690733e',
      'resetPasswordExpires': '',
      'phone': 1899014980,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Kingsland Avenue',
        'city': 'Gulf',
        'state': 'North Carolina',
        'zipCode': 73590
      },
      'createdBy': '5857f60f94369f4a604408db'
    },
    {
      'firstName': 'Snow',
      'lastName': 'Smith',
      'email': 'snowsmith@gluid.com',
      'dob': '2015-10-15 07:30:17',
      'password': 'Georgia17544',
      'salt': '2879f848-c848-405c-a257-fbf50bc4f8a5',
      'resetPasswordToken': 'dcc57427-ea91-45e1-9db1-3a0756692f35',
      'resetPasswordExpires': '',
      'phone': 1720595548,
      'roles': [
        'User',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Tillary Street',
        'city': 'Goodville',
        'state': 'Kentucky',
        'zipCode': 67828
      },
      'createdBy': '5857f60f7c18333e02a2925d'
    },
    {
      'firstName': 'Cobb',
      'lastName': 'Carver',
      'email': 'cobbcarver@gluid.com',
      'dob': '2000-07-26 09:42:23',
      'password': 'Minnesota10293',
      'salt': '4a7095cb-0552-404d-8184-efbb4152b71c',
      'resetPasswordToken': 'e1c7b20e-8198-401f-a914-04c671c1c0d1',
      'resetPasswordExpires': '',
      'phone': 1665368537,
      'roles': [
        'Employee',
        'User'
      ],
      'address': {
        'address1': 'Montana Place',
        'city': 'Cartwright',
        'state': 'Oregon',
        'zipCode': 45817
      },
      'createdBy': '5857f60fdffa79e83935161e'
    },
    {
      'firstName': 'Kristine',
      'lastName': 'Carrillo',
      'email': 'kristinecarrillo@gluid.com',
      'dob': '2005-04-08 09:56:30',
      'password': 'Puerto Rico17802',
      'salt': '0bd1fc4b-9285-4da7-931a-5c4187dbdd23',
      'resetPasswordToken': 'fc37f04d-c89e-4c06-90e6-fe89636e9f21',
      'resetPasswordExpires': '',
      'phone': 1435533629,
      'roles': [
        'User'
      ],
      'address': {
        'address1': 'Louisa Street',
        'city': 'Urie',
        'state': 'Alaska',
        'zipCode': 29656
      },
      'createdBy': '5857f60fa9617f037f759903'
    },
    {
      'firstName': 'Warner',
      'lastName': 'Huff',
      'email': 'warnerhuff@gluid.com',
      'dob': '2004-08-08 06:24:23',
      'password': 'Virginia14024',
      'salt': 'e7bebd53-293f-4836-b413-1939626f12e9',
      'resetPasswordToken': '0929aa2f-af02-4991-a170-67241415a68d',
      'resetPasswordExpires': '',
      'phone': 1201052150,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Huron Street',
        'city': 'Kempton',
        'state': 'New Hampshire',
        'zipCode': 77728
      },
      'createdBy': '5857f60f22dd7dfa207a4394'
    },
    {
      'firstName': 'Effie',
      'lastName': 'Rosales',
      'email': 'effierosales@gluid.com',
      'dob': '2009-02-02 09:51:50',
      'password': 'Tennessee16847',
      'salt': '70a21dc7-a091-4816-b260-c61f36120b05',
      'resetPasswordToken': '9642084e-2e74-4919-913f-a9e02b5a3d0d',
      'resetPasswordExpires': '',
      'phone': 1345029886,
      'roles': [
        'sysAdmin',
        'Manager'
      ],
      'address': {
        'address1': 'Herkimer Place',
        'city': 'Shindler',
        'state': 'West Virginia',
        'zipCode': 55097
      },
      'createdBy': '5857f60f419177a550ca92e7'
    },
    {
      'firstName': 'Carlene',
      'lastName': 'Daniels',
      'email': 'carlenedaniels@gluid.com',
      'dob': '2007-06-30 09:30:22',
      'password': 'Indiana15790',
      'salt': '13a33d0d-8d27-41d2-985c-1639cc56c363',
      'resetPasswordToken': '29fa136a-6b73-43a9-a8f0-96469cb97ebb',
      'resetPasswordExpires': '',
      'phone': 1695974904,
      'roles': [
        'User'
      ],
      'address': {
        'address1': 'Carroll Street',
        'city': 'Tilden',
        'state': 'Alabama',
        'zipCode': 55643
      },
      'createdBy': '5857f60ffbf0f72315230916'
    },
    {
      'firstName': 'Wise',
      'lastName': 'Rojas',
      'email': 'wiserojas@gluid.com',
      'dob': '2002-11-26 02:37:58',
      'password': 'Connecticut17665',
      'salt': 'b18ee103-80aa-4461-b399-4cab3f6f9f42',
      'resetPasswordToken': '4e908091-1fa1-4d4e-ad95-5f1efebb1d50',
      'resetPasswordExpires': '',
      'phone': 1007194349,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Woodrow Court',
        'city': 'Roland',
        'state': 'Florida',
        'zipCode': 78609
      },
      'createdBy': '5857f60f9fb1b9a812a90518'
    },
    {
      'firstName': 'Johanna',
      'lastName': 'Norton',
      'email': 'johannanorton@gluid.com',
      'dob': '2000-07-05 10:00:12',
      'password': 'Delaware19068',
      'salt': 'cf5fffbc-82b1-4ce4-97cb-5bf707eb3d3c',
      'resetPasswordToken': '7f75a96e-ec9a-4124-a490-af5697a7233d',
      'resetPasswordExpires': '',
      'phone': 1485769261,
      'roles': [
        'Manager',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Amber Street',
        'city': 'Abrams',
        'state': 'Maryland',
        'zipCode': 30569
      },
      'createdBy': '5857f60fbbba3778220e24d1'
    },
    {
      'firstName': 'Phelps',
      'lastName': 'Ramos',
      'email': 'phelpsramos@gluid.com',
      'dob': '1998-10-15 06:51:58',
      'password': 'Missouri18877',
      'salt': '2f6cdff8-3ab8-4b2c-a4cd-ff5765055a74',
      'resetPasswordToken': 'ab37205c-612f-4d86-891a-c0af3fc5b565',
      'resetPasswordExpires': '',
      'phone': 1174171777,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Kensington Street',
        'city': 'Oasis',
        'state': 'California',
        'zipCode': 67276
      },
      'createdBy': '5857f60f0583c3a2eda48000'
    },
    {
      'firstName': 'Ofelia',
      'lastName': 'Gross',
      'email': 'ofeliagross@gluid.com',
      'dob': '2014-03-18 07:37:43',
      'password': 'Utah14091',
      'salt': '9aa55a19-5811-4108-9b0e-ec0d20d71c15',
      'resetPasswordToken': 'be180856-b161-42aa-9459-3464d770b35b',
      'resetPasswordExpires': '',
      'phone': 1430497393,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Central Avenue',
        'city': 'Baker',
        'state': 'Hawaii',
        'zipCode': 87815
      },
      'createdBy': '5857f60ff8f7fc8dd61fcbe2'
    },
    {
      'firstName': 'Fry',
      'lastName': 'Maxwell',
      'email': 'frymaxwell@gluid.com',
      'dob': '2015-08-27 03:56:49',
      'password': 'Maine19079',
      'salt': '7a81bb29-0568-4f04-a697-59e81f59fbc0',
      'resetPasswordToken': '0346ef49-8784-4e9b-90b9-1d4e1893cb25',
      'resetPasswordExpires': '',
      'phone': 1099208886,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Amherst Street',
        'city': 'Kimmell',
        'state': 'South Dakota',
        'zipCode': 77108
      },
      'createdBy': '5857f60f5893c8ca9834afc8'
    },
    {
      'firstName': 'Alana',
      'lastName': 'Adams',
      'email': 'alanaadams@gluid.com',
      'dob': '1999-06-12 05:54:48',
      'password': 'Palau11821',
      'salt': '3c634935-dea5-40ad-981b-4185d153e66e',
      'resetPasswordToken': '75259fd9-f63b-4155-aa8d-4010c0eecdaf',
      'resetPasswordExpires': '',
      'phone': 1375366470,
      'roles': [
        'User',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Schenck Place',
        'city': 'Kilbourne',
        'state': 'Montana',
        'zipCode': 69647
      },
      'createdBy': '5857f60fcc4d071466e3d37c'
    },
    {
      'firstName': 'Wilkerson',
      'lastName': 'Herring',
      'email': 'wilkersonherring@gluid.com',
      'dob': '2010-04-05 01:09:55',
      'password': 'Arkansas11726',
      'salt': '6ee2f580-b6ed-49f9-ba3f-de8338586f80',
      'resetPasswordToken': '6a10cacb-0d45-4fcf-9e98-a95d3bfc6da7',
      'resetPasswordExpires': '',
      'phone': 1594894982,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Voorhies Avenue',
        'city': 'Nadine',
        'state': 'Vermont',
        'zipCode': 22436
      },
      'createdBy': '5857f60f7ae5f036b94f4df7'
    },
    {
      'firstName': 'Beryl',
      'lastName': 'Santana',
      'email': 'berylsantana@gluid.com',
      'dob': '2014-06-12 09:28:20',
      'password': 'New Jersey13702',
      'salt': '79735f2d-ae58-4a5c-9733-b3e12172cb12',
      'resetPasswordToken': 'dfc72cb7-bf90-4c92-9734-e09b00f7cede',
      'resetPasswordExpires': '',
      'phone': 1017289046,
      'roles': [
        'Admin',
        'Manager'
      ],
      'address': {
        'address1': 'Fulton Street',
        'city': 'Draper',
        'state': 'Federated States Of Micronesia',
        'zipCode': 26403
      },
      'createdBy': '5857f60f42ca5be0f79be2d3'
    },
    {
      'firstName': 'Hilda',
      'lastName': 'Hopkins',
      'email': 'hildahopkins@gluid.com',
      'dob': '2000-04-30 01:32:52',
      'password': 'North Dakota13224',
      'salt': '184a7fbf-8961-460c-aa76-6f67cb71320c',
      'resetPasswordToken': '77e348c2-da19-413c-a5b6-c57f92cf4034',
      'resetPasswordExpires': '',
      'phone': 1492840151,
      'roles': [
        'Employee',
        'User'
      ],
      'address': {
        'address1': 'Chester Court',
        'city': 'Ronco',
        'state': 'New York',
        'zipCode': 51094
      },
      'createdBy': '5857f60fef5f01301446323d'
    },
    {
      'firstName': 'Mcconnell',
      'lastName': 'Cole',
      'email': 'mcconnellcole@gluid.com',
      'dob': '2005-08-13 11:37:13',
      'password': 'Nebraska14570',
      'salt': '5c3810a0-1f9d-4158-89ed-9ee41c39836f',
      'resetPasswordToken': '71e9ca63-2898-4d21-b6f2-31da91ae58ca',
      'resetPasswordExpires': '',
      'phone': 1898752687,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Roebling Street',
        'city': 'Barronett',
        'state': 'District Of Columbia',
        'zipCode': 13175
      },
      'createdBy': '5857f60fb65caab32359e818'
    },
    {
      'firstName': 'Olson',
      'lastName': 'Salas',
      'email': 'olsonsalas@gluid.com',
      'dob': '2009-09-07 01:53:08',
      'password': 'Massachusetts14749',
      'salt': '25cd8f70-9906-4dd9-8723-1eedc0290273',
      'resetPasswordToken': '0154530e-6b8f-4483-a78c-e8730a0c7999',
      'resetPasswordExpires': '',
      'phone': 1144889269,
      'roles': [
        'Employee',
        'User'
      ],
      'address': {
        'address1': 'Beekman Place',
        'city': 'Waterford',
        'state': 'Illinois',
        'zipCode': 67796
      },
      'createdBy': '5857f60f9064a0f36e88edb4'
    },
    {
      'firstName': 'Whitley',
      'lastName': 'Clay',
      'email': 'whitleyclay@gluid.com',
      'dob': '2006-03-24 02:04:33',
      'password': 'Michigan14767',
      'salt': '56fd0dba-29cb-45f7-a8b4-cff9a2dbf510',
      'resetPasswordToken': '3283d4b4-319b-4598-a7c8-cdefc2840504',
      'resetPasswordExpires': '',
      'phone': 1211383225,
      'roles': [
        'Admin',
        'User'
      ],
      'address': {
        'address1': 'Williams Place',
        'city': 'Nipinnawasee',
        'state': 'Washington',
        'zipCode': 86177
      },
      'createdBy': '5857f60f4d91eaeb8c35123d'
    },
    {
      'firstName': 'Felecia',
      'lastName': 'Larson',
      'email': 'felecialarson@gluid.com',
      'dob': '2007-10-19 06:14:35',
      'password': 'American Samoa18088',
      'salt': '30581a84-ba9b-463c-9c04-4e1005c2ccfe',
      'resetPasswordToken': 'cd253537-1fcc-4762-9a20-273ac991088e',
      'resetPasswordExpires': '',
      'phone': 1607087161,
      'roles': [
        'Manager',
        'User'
      ],
      'address': {
        'address1': 'Halleck Street',
        'city': 'Ruffin',
        'state': 'Guam',
        'zipCode': 65246
      },
      'createdBy': '5857f60f6c8ce104335592af'
    },
    {
      'firstName': 'Joyner',
      'lastName': 'Berger',
      'email': 'joynerberger@gluid.com',
      'dob': '1998-08-11 02:14:21',
      'password': 'Colorado18883',
      'salt': '256d0bbe-fbb8-4b9d-ab07-fcd32470cf56',
      'resetPasswordToken': 'c85fde18-4094-4561-b0c6-5e93556611e1',
      'resetPasswordExpires': '',
      'phone': 1256427282,
      'roles': [
        'User',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Homecrest Court',
        'city': 'Cecilia',
        'state': 'Nevada',
        'zipCode': 88038
      },
      'createdBy': '5857f60fd53582c18fee742f'
    },
    {
      'firstName': 'Stephens',
      'lastName': 'Turner',
      'email': 'stephensturner@gluid.com',
      'dob': '1997-08-02 06:32:49',
      'password': 'Iowa14294',
      'salt': '52ebdaf7-5f6a-4a65-bebd-eb933f467fec',
      'resetPasswordToken': 'c5634498-73e8-4769-87d7-7fd46c6e64d9',
      'resetPasswordExpires': '',
      'phone': 1959340537,
      'roles': [
        'sysAdmin',
        'Manager'
      ],
      'address': {
        'address1': 'Buffalo Avenue',
        'city': 'Sunriver',
        'state': 'Mississippi',
        'zipCode': 51310
      },
      'createdBy': '5857f60f1fea0a4cd4b91fd7'
    },
    {
      'firstName': 'Clarice',
      'lastName': 'Duncan',
      'email': 'clariceduncan@gluid.com',
      'dob': '1996-03-11 03:44:14',
      'password': 'Northern Mariana Islands10269',
      'salt': 'b43d548f-ae4b-4113-98e7-7a37ae884fc7',
      'resetPasswordToken': '9b8b852b-58f6-4fa3-81b7-343cfa3e6ad0',
      'resetPasswordExpires': '',
      'phone': 1552999094,
      'roles': [
        'sysAdmin',
        'Admin'
      ],
      'address': {
        'address1': 'Batchelder Street',
        'city': 'Levant',
        'state': 'New Mexico',
        'zipCode': 40838
      },
      'createdBy': '5857f60fb3130566ca3e6d4d'
    },
    {
      'firstName': 'Ballard',
      'lastName': 'Raymond',
      'email': 'ballardraymond@gluid.com',
      'dob': '2002-01-20 08:11:58',
      'password': 'Oklahoma16413',
      'salt': '427b91a0-9eff-4bb5-ac1d-f35fcf05d8f5',
      'resetPasswordToken': 'ae4d0503-68c7-4d8c-b67d-6ddc8d453673',
      'resetPasswordExpires': '',
      'phone': 1420690272,
      'roles': [
        'Manager',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Seigel Street',
        'city': 'Fresno',
        'state': 'Rhode Island',
        'zipCode': 34783
      },
      'createdBy': '5857f60f69148207c0dc6e4b'
    },
    {
      'firstName': 'Cardenas',
      'lastName': 'Simmons',
      'email': 'cardenassimmons@gluid.com',
      'dob': '2000-08-23 03:43:58',
      'password': 'Texas11429',
      'salt': 'b4bb4633-b32d-4263-9aa0-57c879e80ef2',
      'resetPasswordToken': 'ebbf4471-7c9d-40f8-89d7-d523d47c3a4e',
      'resetPasswordExpires': '',
      'phone': 1454875884,
      'roles': [
        'sysAdmin',
        'User'
      ],
      'address': {
        'address1': 'Cypress Court',
        'city': 'Fredericktown',
        'state': 'Virgin Islands',
        'zipCode': 60823
      },
      'createdBy': '5857f60f878bbffd4788bd7a'
    },
    {
      'firstName': 'Curry',
      'lastName': 'Jacobs',
      'email': 'curryjacobs@gluid.com',
      'dob': '1998-06-02 09:36:31',
      'password': 'Wyoming15460',
      'salt': '59ba5e49-3c2c-47db-b84d-118d2567e632',
      'resetPasswordToken': '5b50a587-42df-41a9-9fce-26b9736025e9',
      'resetPasswordExpires': '',
      'phone': 1703464867,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Croton Loop',
        'city': 'Manila',
        'state': 'Louisiana',
        'zipCode': 18930
      },
      'createdBy': '5857f60f71e52e03edefe15b'
    },
    {
      'firstName': 'Dennis',
      'lastName': 'Cohen',
      'email': 'denniscohen@gluid.com',
      'dob': '2003-10-04 06:00:53',
      'password': 'Arizona12630',
      'salt': '3ab53cc0-eb9e-4913-b1fd-88b02163405c',
      'resetPasswordToken': '5f238fc8-89d9-48f3-b271-a57f25138bbd',
      'resetPasswordExpires': '',
      'phone': 1024113462,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Kathleen Court',
        'city': 'Mapletown',
        'state': 'Pennsylvania',
        'zipCode': 41229
      },
      'createdBy': '5857f60f856c944e26b6e159'
    },
    {
      'firstName': 'Debra',
      'lastName': 'Terrell',
      'email': 'debraterrell@gluid.com',
      'dob': '2012-10-17 05:22:26',
      'password': 'Wisconsin10650',
      'salt': 'b4b6994b-9b32-4034-ae26-1949fc09cbbe',
      'resetPasswordToken': '1b610fbd-b726-4cf8-857c-30e1e1175941',
      'resetPasswordExpires': '',
      'phone': 1317238489,
      'roles': [
        'sysAdmin',
        'Manager'
      ],
      'address': {
        'address1': 'Desmond Court',
        'city': 'Stockdale',
        'state': 'Ohio',
        'zipCode': 80499
      },
      'createdBy': '5857f60fe023f4a5e35a5721'
    },
    {
      'firstName': 'Tami',
      'lastName': 'Fleming',
      'email': 'tamifleming@gluid.com',
      'dob': '2015-02-01 10:43:30',
      'password': 'Kansas15938',
      'salt': 'e24ee7aa-53ca-4174-ad92-d7a2e7d48d7c',
      'resetPasswordToken': 'f0429715-c5c6-4f4c-a9ea-9d659e2596b8',
      'resetPasswordExpires': '',
      'phone': 1283760720,
      'roles': [
        'Manager',
        'Employee'
      ],
      'address': {
        'address1': 'Langham Street',
        'city': 'Southview',
        'state': 'Idaho',
        'zipCode': 54535
      },
      'createdBy': '5857f60f6a927e25d3cf45a7'
    },
    {
      'firstName': 'Haney',
      'lastName': 'Merrill',
      'email': 'haneymerrill@gluid.com',
      'dob': '2002-04-17 10:30:06',
      'password': 'Marshall Islands11956',
      'salt': 'edd9c0dd-a515-4fc4-a64c-870588678d54',
      'resetPasswordToken': 'bad7ca05-a048-4895-8f4d-62a97a98a47c',
      'resetPasswordExpires': '',
      'phone': 1110629228,
      'roles': [
        'Employee',
        'User'
      ],
      'address': {
        'address1': 'Tompkins Place',
        'city': 'Edinburg',
        'state': 'North Carolina',
        'zipCode': 42914
      },
      'createdBy': '5857f60f4beaa682fee41b3b'
    },
    {
      'firstName': 'Etta',
      'lastName': 'Christensen',
      'email': 'ettachristensen@gluid.com',
      'dob': '1995-02-08 09:46:12',
      'password': 'Georgia12904',
      'salt': '79bad8c7-c736-41f4-865d-4f3bdc0449a6',
      'resetPasswordToken': '1f5fb76c-18f0-488a-b107-0c5d365ae415',
      'resetPasswordExpires': '',
      'phone': 1418993599,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Chester Street',
        'city': 'Boomer',
        'state': 'Kentucky',
        'zipCode': 27333
      },
      'createdBy': '5857f60f99ede612ed3205d4'
    },
    {
      'firstName': 'Nichols',
      'lastName': 'Hendricks',
      'email': 'nicholshendricks@gluid.com',
      'dob': '1992-08-19 10:29:50',
      'password': 'Minnesota13780',
      'salt': 'd13e2041-127f-4565-8bcd-e93d9c95e787',
      'resetPasswordToken': '7e892de6-edeb-4e2b-aa87-0903a3141dca',
      'resetPasswordExpires': '',
      'phone': 1482516371,
      'roles': [
        'Admin'
      ],
      'address': {
        'address1': 'Hoyts Lane',
        'city': 'Waukeenah',
        'state': 'Oregon',
        'zipCode': 67748
      },
      'createdBy': '5857f60fa496255d0a7b998f'
    },
    {
      'firstName': 'Marcie',
      'lastName': 'Hardin',
      'email': 'marciehardin@gluid.com',
      'dob': '1990-04-27 07:38:18',
      'password': 'Puerto Rico15299',
      'salt': 'c9803b18-c4b9-44dd-a2c4-62dd07447374',
      'resetPasswordToken': 'b6cacf72-779a-445b-9d45-cf1e93387109',
      'resetPasswordExpires': '',
      'phone': 1912498722,
      'roles': [
        'Employee',
        'Manager'
      ],
      'address': {
        'address1': 'Nassau Avenue',
        'city': 'Castleton',
        'state': 'Alaska',
        'zipCode': 70060
      },
      'createdBy': '5857f60f87ea5d4aa7163469'
    },
    {
      'firstName': 'Rice',
      'lastName': 'Watson',
      'email': 'ricewatson@gluid.com',
      'dob': '2002-11-03 09:01:26',
      'password': 'Virginia19503',
      'salt': '6fb71209-d72e-44de-b2c0-2ce9db0e1f0e',
      'resetPasswordToken': 'e1ca07fc-ccef-45f1-b21f-ee38fcc8061c',
      'resetPasswordExpires': '',
      'phone': 1105328096,
      'roles': [
        'Admin'
      ],
      'address': {
        'address1': 'Revere Place',
        'city': 'Dragoon',
        'state': 'New Hampshire',
        'zipCode': 13065
      },
      'createdBy': '5857f60f4e87ac8054131cc2'
    },
    {
      'firstName': 'Randall',
      'lastName': 'Le',
      'email': 'randallle@gluid.com',
      'dob': '1990-11-23 12:19:09',
      'password': 'Tennessee10459',
      'salt': '17880fe8-6fe0-447f-9652-56b231dacce1',
      'resetPasswordToken': '00ec12a4-6a9b-463c-a0b2-2db3d26c4f6a',
      'resetPasswordExpires': '',
      'phone': 1552424004,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Hinsdale Street',
        'city': 'Garfield',
        'state': 'West Virginia',
        'zipCode': 60374
      },
      'createdBy': '5857f60f0ac117e8fe143c85'
    },
    {
      'firstName': 'Nixon',
      'lastName': 'Miller',
      'email': 'nixonmiller@gluid.com',
      'dob': '2011-11-06 05:38:17',
      'password': 'Indiana15715',
      'salt': 'aa2464c4-c563-4056-96d7-0bdd9b340aff',
      'resetPasswordToken': 'b7216090-4e82-463e-870d-35beec850b37',
      'resetPasswordExpires': '',
      'phone': 1383431667,
      'roles': [
        'Admin',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Beaumont Street',
        'city': 'Carlton',
        'state': 'Alabama',
        'zipCode': 14624
      },
      'createdBy': '5857f60f9d427d9159d57ed8'
    },
    {
      'firstName': 'Barbra',
      'lastName': 'Knox',
      'email': 'barbraknox@gluid.com',
      'dob': '1999-01-04 09:53:48',
      'password': 'Connecticut11444',
      'salt': 'f05b9deb-d46c-4305-ab21-b049f67dbe0c',
      'resetPasswordToken': '91415c59-8014-4d47-8a6f-638ada855c41',
      'resetPasswordExpires': '',
      'phone': 1464031701,
      'roles': [
        'User'
      ],
      'address': {
        'address1': 'Lincoln Terrace',
        'city': 'Hampstead',
        'state': 'Florida',
        'zipCode': 61356
      },
      'createdBy': '5857f60fad8935b6db614aad'
    },
    {
      'firstName': 'Morrow',
      'lastName': 'Ewing',
      'email': 'morrowewing@gluid.com',
      'dob': '2014-03-05 02:51:53',
      'password': 'Delaware11974',
      'salt': '4dc7581b-ea92-49f2-82c2-ffc7a389c0dc',
      'resetPasswordToken': '8865d58b-23c7-4ec7-b41a-3d8e548eaa69',
      'resetPasswordExpires': '',
      'phone': 1666790185,
      'roles': [
        'Admin',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Brightwater Court',
        'city': 'Welch',
        'state': 'Maryland',
        'zipCode': 85501
      },
      'createdBy': '5857f60f327074535a3ae45d'
    },
    {
      'firstName': 'Barr',
      'lastName': 'Hickman',
      'email': 'barrhickman@gluid.com',
      'dob': '2013-02-10 10:19:52',
      'password': 'Missouri10456',
      'salt': '1067958c-f467-493b-b7fb-0bda264e5a71',
      'resetPasswordToken': 'd38ed997-82e0-4ba7-99af-edde696bd4c1',
      'resetPasswordExpires': '',
      'phone': 1567181913,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Montieth Street',
        'city': 'Valmy',
        'state': 'California',
        'zipCode': 18979
      },
      'createdBy': '5857f60faa7c497b09799411'
    },
    {
      'firstName': 'Glenn',
      'lastName': 'Spencer',
      'email': 'glennspencer@gluid.com',
      'dob': '1996-08-04 09:46:23',
      'password': 'Utah19231',
      'salt': 'a497e5c6-2da6-48dd-8fb7-4f6764a74427',
      'resetPasswordToken': '1c0603a4-5b8c-41ce-86dd-182ad2d5273a',
      'resetPasswordExpires': '',
      'phone': 1382988693,
      'roles': [
        'Admin'
      ],
      'address': {
        'address1': 'Hart Street',
        'city': 'Dupuyer',
        'state': 'Hawaii',
        'zipCode': 14911
      },
      'createdBy': '5857f60ff3115f0e34b65da9'
    },
    {
      'firstName': 'Foreman',
      'lastName': 'Graves',
      'email': 'foremangraves@gluid.com',
      'dob': '1991-05-09 01:45:32',
      'password': 'Maine14237',
      'salt': '96d7d023-8d96-42de-88e4-8b1694596b57',
      'resetPasswordToken': '76fba111-6186-4e96-bead-af901bf64150',
      'resetPasswordExpires': '',
      'phone': 1231548715,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Wakeman Place',
        'city': 'Siglerville',
        'state': 'South Dakota',
        'zipCode': 25451
      },
      'createdBy': '5857f60fbcae10e92e56a5f3'
    },
    {
      'firstName': 'Mcdonald',
      'lastName': 'Browning',
      'email': 'mcdonaldbrowning@gluid.com',
      'dob': '1994-02-13 11:00:35',
      'password': 'Palau17000',
      'salt': '36ef74ff-7e5a-433c-818e-2a58fef8b044',
      'resetPasswordToken': '71ae65cb-b4bd-44e7-9006-8cbbd6a2eda3',
      'resetPasswordExpires': '',
      'phone': 1976677235,
      'roles': [
        'Manager',
        'Manager'
      ],
      'address': {
        'address1': 'Foster Avenue',
        'city': 'Gracey',
        'state': 'Montana',
        'zipCode': 53357
      },
      'createdBy': '5857f60f48dee8c779f22efa'
    },
    {
      'firstName': 'Ross',
      'lastName': 'Baker',
      'email': 'rossbaker@gluid.com',
      'dob': '1997-05-21 03:48:41',
      'password': 'Arkansas12908',
      'salt': 'b335cda1-5f34-4079-8f78-3cc2e69cbca5',
      'resetPasswordToken': 'b6b33821-3e87-47e0-ba75-cd23cd821954',
      'resetPasswordExpires': '',
      'phone': 1590647680,
      'roles': [
        'Employee',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Miami Court',
        'city': 'Lindisfarne',
        'state': 'Vermont',
        'zipCode': 52700
      },
      'createdBy': '5857f60f72bd8d20eff512e9'
    },
    {
      'firstName': 'Jessica',
      'lastName': 'Mays',
      'email': 'jessicamays@gluid.com',
      'dob': '2009-08-26 01:03:45',
      'password': 'New Jersey16768',
      'salt': 'f54731c4-4ae1-4a1b-8b65-d2095644c2ed',
      'resetPasswordToken': '36ddb909-2ab1-48b9-a23a-fedc78ed82dd',
      'resetPasswordExpires': '',
      'phone': 1861828903,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Hornell Loop',
        'city': 'Monument',
        'state': 'Federated States Of Micronesia',
        'zipCode': 67570
      },
      'createdBy': '5857f60fe8facf5ab5f85d4e'
    },
    {
      'firstName': 'Mayer',
      'lastName': 'Hinton',
      'email': 'mayerhinton@gluid.com',
      'dob': '2014-01-18 08:28:29',
      'password': 'North Dakota14524',
      'salt': 'c406a59e-543f-454b-85b8-6d47fdfd7a35',
      'resetPasswordToken': '81d8a7e2-7872-47f3-aeb5-59c528923f87',
      'resetPasswordExpires': '',
      'phone': 1075914344,
      'roles': [
        'sysAdmin',
        'Employee'
      ],
      'address': {
        'address1': 'Tennis Court',
        'city': 'Yukon',
        'state': 'New York',
        'zipCode': 28127
      },
      'createdBy': '5857f60f555714453201e689'
    },
    {
      'firstName': 'Adele',
      'lastName': 'Burke',
      'email': 'adeleburke@gluid.com',
      'dob': '2011-04-15 12:06:38',
      'password': 'Nebraska11812',
      'salt': 'c8316aed-00f2-4d87-ab12-24903984b290',
      'resetPasswordToken': 'b7f81c76-a2a8-4961-89ff-b46036e523d2',
      'resetPasswordExpires': '',
      'phone': 1182740423,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Corbin Place',
        'city': 'Martell',
        'state': 'District Of Columbia',
        'zipCode': 88198
      },
      'createdBy': '5857f60ffd2b61530c29c707'
    },
    {
      'firstName': 'Martinez',
      'lastName': 'Zimmerman',
      'email': 'martinezzimmerman@gluid.com',
      'dob': '2015-10-10 06:00:06',
      'password': 'Massachusetts18423',
      'salt': '4303679e-97c0-462e-a24a-0170d1ec5fd6',
      'resetPasswordToken': '33194c6d-9fe8-4559-9f85-ffebd2eeba76',
      'resetPasswordExpires': '',
      'phone': 1748698631,
      'roles': [
        'sysAdmin',
        'Manager'
      ],
      'address': {
        'address1': 'Himrod Street',
        'city': 'Freeburn',
        'state': 'Illinois',
        'zipCode': 83252
      },
      'createdBy': '5857f60fdecedd8daa447abb'
    },
    {
      'firstName': 'Eugenia',
      'lastName': 'Moss',
      'email': 'eugeniamoss@gluid.com',
      'dob': '1994-11-05 05:22:13',
      'password': 'Michigan19913',
      'salt': 'c781ea45-d5f9-410f-beb1-856a5b297bc8',
      'resetPasswordToken': 'efdd3a76-439f-4a4a-bb60-d9cdd66b29f0',
      'resetPasswordExpires': '',
      'phone': 1286411732,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Quentin Road',
        'city': 'Spokane',
        'state': 'Washington',
        'zipCode': 63264
      },
      'createdBy': '5857f60f22c421739c7ee2cf'
    },
    {
      'firstName': 'Kirsten',
      'lastName': 'Suarez',
      'email': 'kirstensuarez@gluid.com',
      'dob': '2010-11-21 12:56:04',
      'password': 'American Samoa14280',
      'salt': '67c4d8e9-a0e7-4f5e-8435-5bab7454185b',
      'resetPasswordToken': '21fed9ab-9fd0-4e0a-95b7-78895ce85840',
      'resetPasswordExpires': '',
      'phone': 1076704906,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Troy Avenue',
        'city': 'Defiance',
        'state': 'Guam',
        'zipCode': 54163
      },
      'createdBy': '5857f60f20931dc3a364fad0'
    },
    {
      'firstName': 'Moran',
      'lastName': 'Martinez',
      'email': 'moranmartinez@gluid.com',
      'dob': '2013-09-28 01:04:18',
      'password': 'Colorado11825',
      'salt': '7b0dd90c-f6ab-4f31-82b4-6e5878b5ea21',
      'resetPasswordToken': 'fe0073af-6bae-4b60-8704-a1043b9eb638',
      'resetPasswordExpires': '',
      'phone': 1215048667,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Pulaski Street',
        'city': 'Beyerville',
        'state': 'Nevada',
        'zipCode': 25796
      },
      'createdBy': '5857f60fa97a470e4444436c'
    },
    {
      'firstName': 'Edith',
      'lastName': 'Preston',
      'email': 'edithpreston@gluid.com',
      'dob': '1992-07-13 09:51:02',
      'password': 'Iowa10210',
      'salt': 'b3d9309d-5446-4f2c-88ce-d69825ba0f74',
      'resetPasswordToken': 'f6ab22c2-aee4-44dd-9d48-cf14b7c7030b',
      'resetPasswordExpires': '',
      'phone': 1692103153,
      'roles': [
        'Admin',
        'Employee'
      ],
      'address': {
        'address1': 'Brighton Court',
        'city': 'Macdona',
        'state': 'Mississippi',
        'zipCode': 43183
      },
      'createdBy': '5857f60fd59db2a98dcc4a6c'
    },
    {
      'firstName': 'Kathleen',
      'lastName': 'Crane',
      'email': 'kathleencrane@gluid.com',
      'dob': '1990-06-14 01:40:33',
      'password': 'Northern Mariana Islands14550',
      'salt': 'e4100d5a-eb86-4620-94d8-e884cda43fa6',
      'resetPasswordToken': '4b0ae6f4-d450-49b9-a9ba-b14ebcc15464',
      'resetPasswordExpires': '',
      'phone': 1005253422,
      'roles': [
        'Admin',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Kings Hwy',
        'city': 'Succasunna',
        'state': 'New Mexico',
        'zipCode': 16561
      },
      'createdBy': '5857f60ff52ee5e5f0d2764e'
    },
    {
      'firstName': 'Valerie',
      'lastName': 'Cobb',
      'email': 'valeriecobb@gluid.com',
      'dob': '2000-05-26 07:07:21',
      'password': 'Oklahoma18305',
      'salt': 'c54164ef-7048-4d7c-b931-416bf1936321',
      'resetPasswordToken': 'be1bc433-6cd5-4ee0-bb64-e4322cd14ffd',
      'resetPasswordExpires': '',
      'phone': 1214550530,
      'roles': [
        'Employee',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Canarsie Road',
        'city': 'Thatcher',
        'state': 'Rhode Island',
        'zipCode': 56179
      },
      'createdBy': '5857f60fbcb7b549e530f9a5'
    },
    {
      'firstName': 'Jillian',
      'lastName': 'Strong',
      'email': 'jillianstrong@gluid.com',
      'dob': '2005-05-26 01:50:23',
      'password': 'Texas15814',
      'salt': '0b9e755c-b8ba-487c-b0d7-ccd82719c855',
      'resetPasswordToken': '9dd0752f-9654-4d1f-a664-0da0df14eeb8',
      'resetPasswordExpires': '',
      'phone': 1400860111,
      'roles': [
        'Manager',
        'Employee'
      ],
      'address': {
        'address1': 'Bowery Street',
        'city': 'Delwood',
        'state': 'Virgin Islands',
        'zipCode': 26135
      },
      'createdBy': '5857f60fe6b90295f9f2f848'
    },
    {
      'firstName': 'Barrett',
      'lastName': 'Trevino',
      'email': 'barretttrevino@gluid.com',
      'dob': '1995-12-05 04:24:22',
      'password': 'Wyoming17273',
      'salt': '244c1d37-759a-4851-93cb-0fa626a86de1',
      'resetPasswordToken': 'adca8b04-5bb6-419a-adbc-232519c93e81',
      'resetPasswordExpires': '',
      'phone': 1006134332,
      'roles': [
        'User',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Underhill Avenue',
        'city': 'Derwood',
        'state': 'Louisiana',
        'zipCode': 26827
      },
      'createdBy': '5857f60f909f4fa83449361e'
    },
    {
      'firstName': 'Roy',
      'lastName': 'Olson',
      'email': 'royolson@gluid.com',
      'dob': '2012-02-15 05:39:19',
      'password': 'Arizona13564',
      'salt': '8abfc0eb-9d35-4142-ac70-fc05a37d244a',
      'resetPasswordToken': '79e11bf2-2586-49a6-821c-c5fb17634032',
      'resetPasswordExpires': '',
      'phone': 1376829797,
      'roles': [
        'sysAdmin',
        'User'
      ],
      'address': {
        'address1': 'Oxford Street',
        'city': 'Salix',
        'state': 'Pennsylvania',
        'zipCode': 32247
      },
      'createdBy': '5857f60fc587184ca8fcffe4'
    },
    {
      'firstName': 'Barber',
      'lastName': 'Lott',
      'email': 'barberlott@gluid.com',
      'dob': '2003-05-09 02:20:31',
      'password': 'Wisconsin16447',
      'salt': '5214d706-026f-48ea-9703-79ed34a159cf',
      'resetPasswordToken': 'c6cb3be0-6717-4b70-a9b9-75b91ecf64b4',
      'resetPasswordExpires': '',
      'phone': 1628999117,
      'roles': [
        'User',
        'Manager'
      ],
      'address': {
        'address1': 'Hopkins Street',
        'city': 'Machias',
        'state': 'Ohio',
        'zipCode': 41400
      },
      'createdBy': '5857f60fc4ead2086f20a54f'
    },
    {
      'firstName': 'William',
      'lastName': 'Hancock',
      'email': 'williamhancock@gluid.com',
      'dob': '1996-02-17 10:17:35',
      'password': 'Kansas14283',
      'salt': '9138ce8e-14d1-4f7a-bf44-d8e4f00af697',
      'resetPasswordToken': '898ce096-4595-46dd-839c-cd0e9b8e99cd',
      'resetPasswordExpires': '',
      'phone': 1673261150,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Wyona Street',
        'city': 'Johnsonburg',
        'state': 'Idaho',
        'zipCode': 34224
      },
      'createdBy': '5857f60f9786d3eee0000588'
    },
    {
      'firstName': 'Irene',
      'lastName': 'Lowe',
      'email': 'irenelowe@gluid.com',
      'dob': '1992-06-10 01:18:07',
      'password': 'Marshall Islands14039',
      'salt': '5d53af6c-4007-4cc8-8349-133226ce5987',
      'resetPasswordToken': '18587957-18d1-4673-b797-e4e2128feb5f',
      'resetPasswordExpires': '',
      'phone': 1755786880,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Morton Street',
        'city': 'Riviera',
        'state': 'North Carolina',
        'zipCode': 55408
      },
      'createdBy': '5857f60ff57ac55605414282'
    },
    {
      'firstName': 'Dixie',
      'lastName': 'Spence',
      'email': 'dixiespence@gluid.com',
      'dob': '2000-09-16 02:18:26',
      'password': 'Georgia17348',
      'salt': '0fc53842-83c5-44b3-a47a-0380131482df',
      'resetPasswordToken': 'c47c1f73-404f-4238-a996-579679d21905',
      'resetPasswordExpires': '',
      'phone': 1457694637,
      'roles': [
        'Manager',
        'Employee'
      ],
      'address': {
        'address1': 'Highland Place',
        'city': 'Cedarville',
        'state': 'Kentucky',
        'zipCode': 68393
      },
      'createdBy': '5857f60fd682f85ed8f2ce35'
    },
    {
      'firstName': 'Brock',
      'lastName': 'Bender',
      'email': 'brockbender@gluid.com',
      'dob': '1992-10-29 08:59:59',
      'password': 'Minnesota11700',
      'salt': '96c2aad4-f45b-438e-8fe1-06dd6411a612',
      'resetPasswordToken': '14ad3c77-1868-4d21-aceb-bf2e5480a702',
      'resetPasswordExpires': '',
      'phone': 1112735869,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Dahlgreen Place',
        'city': 'Biddle',
        'state': 'Oregon',
        'zipCode': 71240
      },
      'createdBy': '5857f60fbb6d23b75cfc5d05'
    },
    {
      'firstName': 'Georgette',
      'lastName': 'Howell',
      'email': 'georgettehowell@gluid.com',
      'dob': '1997-04-20 04:45:08',
      'password': 'Puerto Rico18374',
      'salt': '074541d3-137d-4f9e-8b63-2787c64522ac',
      'resetPasswordToken': '9d70b597-db85-454d-bbed-45121b5cd9c3',
      'resetPasswordExpires': '',
      'phone': 1483778407,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Railroad Avenue',
        'city': 'Geyserville',
        'state': 'Alaska',
        'zipCode': 21017
      },
      'createdBy': '5857f60fea9beabf2d0c356a'
    },
    {
      'firstName': 'Crosby',
      'lastName': 'Duffy',
      'email': 'crosbyduffy@gluid.com',
      'dob': '2009-06-10 04:53:51',
      'password': 'Virginia16163',
      'salt': '0e511b68-5624-448e-a494-2f5259a8a0c8',
      'resetPasswordToken': '1cd5d70e-356e-4950-960e-72786d264d53',
      'resetPasswordExpires': '',
      'phone': 1881313924,
      'roles': [
        'User'
      ],
      'address': {
        'address1': 'John Street',
        'city': 'Callaghan',
        'state': 'New Hampshire',
        'zipCode': 81851
      },
      'createdBy': '5857f60ff04346f71cb8cae7'
    },
    {
      'firstName': 'Alexis',
      'lastName': 'Contreras',
      'email': 'alexiscontreras@gluid.com',
      'dob': '1992-12-16 05:48:47',
      'password': 'Tennessee15241',
      'salt': '3fa5b09f-ac28-41f5-a350-4f30289bf1b7',
      'resetPasswordToken': '508f2132-a70a-4ce6-888d-0e916c58461b',
      'resetPasswordExpires': '',
      'phone': 1219135455,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Calyer Street',
        'city': 'Galesville',
        'state': 'West Virginia',
        'zipCode': 49146
      },
      'createdBy': '5857f60f3436212d8aab7181'
    },
    {
      'firstName': 'Daniels',
      'lastName': 'Head',
      'email': 'danielshead@gluid.com',
      'dob': '2014-05-16 07:57:36',
      'password': 'Indiana14776',
      'salt': 'bd448aa7-eb79-4182-95df-9966d247b7d5',
      'resetPasswordToken': '54ec5ff9-bf7b-47bf-9be3-436e9196d982',
      'resetPasswordExpires': '',
      'phone': 1196528854,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Judge Street',
        'city': 'Century',
        'state': 'Alabama',
        'zipCode': 82070
      },
      'createdBy': '5857f60f5aca3ac2dc91fe31'
    },
    {
      'firstName': 'Rochelle',
      'lastName': 'Ferguson',
      'email': 'rochelleferguson@gluid.com',
      'dob': '1997-08-04 08:30:19',
      'password': 'Connecticut13832',
      'salt': '42b200c7-706c-421c-b332-7b8feece6613',
      'resetPasswordToken': 'd9c8b22f-0f6a-422b-9e6a-f6cc7dbd8366',
      'resetPasswordExpires': '',
      'phone': 1128647995,
      'roles': [
        'Admin'
      ],
      'address': {
        'address1': 'Folsom Place',
        'city': 'Chemung',
        'state': 'Florida',
        'zipCode': 45154
      },
      'createdBy': '5857f60f2b564c1b52a5c72c'
    },
    {
      'firstName': 'Hope',
      'lastName': 'Dalton',
      'email': 'hopedalton@gluid.com',
      'dob': '1993-06-13 03:05:56',
      'password': 'Delaware18652',
      'salt': '0db72325-00fe-4d7a-a09f-3fe8b5ce69c5',
      'resetPasswordToken': '6b668ca7-7558-41c2-9b36-1e0f1161f6c2',
      'resetPasswordExpires': '',
      'phone': 1521973265,
      'roles': [
        'sysAdmin',
        'User'
      ],
      'address': {
        'address1': 'Highlawn Avenue',
        'city': 'Aguila',
        'state': 'Maryland',
        'zipCode': 64708
      },
      'createdBy': '5857f60f6f5bb36b5f0a59a7'
    },
    {
      'firstName': 'Rita',
      'lastName': 'Jensen',
      'email': 'ritajensen@gluid.com',
      'dob': '1995-01-19 05:50:00',
      'password': 'Missouri14219',
      'salt': '0967cafb-4221-49ff-87a7-3add6e6a3e43',
      'resetPasswordToken': '246a84dd-9d3a-45dd-9f90-fa71b57e8269',
      'resetPasswordExpires': '',
      'phone': 1793937128,
      'roles': [
        'Manager',
        'User'
      ],
      'address': {
        'address1': 'Centre Street',
        'city': 'Stollings',
        'state': 'California',
        'zipCode': 28430
      },
      'createdBy': '5857f60f13dab904575bc7b7'
    },
    {
      'firstName': 'Courtney',
      'lastName': 'Bonner',
      'email': 'courtneybonner@gluid.com',
      'dob': '1993-05-14 11:35:41',
      'password': 'Utah13219',
      'salt': '1b0177b2-0539-4ec9-88de-932a24a35bc8',
      'resetPasswordToken': '780c8453-77c6-458a-82f8-8324a7f7814d',
      'resetPasswordExpires': '',
      'phone': 1638024887,
      'roles': [
        'User',
        'Employee'
      ],
      'address': {
        'address1': 'Locust Street',
        'city': 'Vallonia',
        'state': 'Hawaii',
        'zipCode': 32511
      },
      'createdBy': '5857f60f58765ad30e1e1932'
    },
    {
      'firstName': 'Ruth',
      'lastName': 'Lee',
      'email': 'ruthlee@gluid.com',
      'dob': '2006-09-18 11:24:02',
      'password': 'Maine18557',
      'salt': 'f9a737a9-4247-4630-96ff-dd826d1a5d5f',
      'resetPasswordToken': '8b8723e0-fa69-4ab7-8bf2-7480832ec523',
      'resetPasswordExpires': '',
      'phone': 1320732438,
      'roles': [
        'sysAdmin',
        'User'
      ],
      'address': {
        'address1': 'Cove Lane',
        'city': 'Cucumber',
        'state': 'South Dakota',
        'zipCode': 66365
      },
      'createdBy': '5857f60f92e7477163693150'
    },
    {
      'firstName': 'Gregory',
      'lastName': 'Adkins',
      'email': 'gregoryadkins@gluid.com',
      'dob': '1994-09-19 10:55:58',
      'password': 'Palau11450',
      'salt': '8ce509e6-dca3-4425-88bf-8119c2ceb062',
      'resetPasswordToken': '12c1c3d6-45dc-4f71-80db-0235568317d4',
      'resetPasswordExpires': '',
      'phone': 1778979268,
      'roles': [
        'User',
        'Admin'
      ],
      'address': {
        'address1': 'McKibbin Street',
        'city': 'Kiskimere',
        'state': 'Montana',
        'zipCode': 87233
      },
      'createdBy': '5857f60f9bf3e3ddccd726b1'
    },
    {
      'firstName': 'Cote',
      'lastName': 'Weiss',
      'email': 'coteweiss@gluid.com',
      'dob': '1991-03-21 06:40:07',
      'password': 'Arkansas11997',
      'salt': '2b5d6280-8fe3-4880-a93c-a7700c31bd71',
      'resetPasswordToken': '30f27b17-8508-498b-b124-cba5f03fc9d1',
      'resetPasswordExpires': '',
      'phone': 1123541501,
      'roles': [
        'sysAdmin',
        'Admin'
      ],
      'address': {
        'address1': 'Apollo Street',
        'city': 'Tioga',
        'state': 'Vermont',
        'zipCode': 87472
      },
      'createdBy': '5857f60f535170c90690ebaa'
    },
    {
      'firstName': 'Mullins',
      'lastName': 'Sweet',
      'email': 'mullinssweet@gluid.com',
      'dob': '2005-07-18 09:45:53',
      'password': 'New Jersey16730',
      'salt': '9e5e16f3-2264-4d62-81b4-c7c6d3206de3',
      'resetPasswordToken': '7ca09f69-b9d7-433d-ad92-675667006091',
      'resetPasswordExpires': '',
      'phone': 1205664303,
      'roles': [
        'Admin',
        'sysAdmin'
      ],
      'address': {
        'address1': 'Orange Street',
        'city': 'Catharine',
        'state': 'Federated States Of Micronesia',
        'zipCode': 80494
      },
      'createdBy': '5857f60fd6c9d290d9112e87'
    },
    {
      'firstName': 'Latasha',
      'lastName': 'Underwood',
      'email': 'latashaunderwood@gluid.com',
      'dob': '1992-03-19 11:04:52',
      'password': 'North Dakota11509',
      'salt': '9e972581-6405-471c-903e-dd3745c547b2',
      'resetPasswordToken': '40e65e3b-4538-4b6c-a1a4-def387362ab2',
      'resetPasswordExpires': '',
      'phone': 1057669539,
      'roles': [
        'Employee',
        'User'
      ],
      'address': {
        'address1': 'Ferris Street',
        'city': 'Craig',
        'state': 'New York',
        'zipCode': 36691
      },
      'createdBy': '5857f60f3a01bb1b61b28d3c'
    },
    {
      'firstName': 'Ewing',
      'lastName': 'Hurley',
      'email': 'ewinghurley@gluid.com',
      'dob': '1993-10-07 06:33:16',
      'password': 'Nebraska15083',
      'salt': '04d036cc-9bbc-4bdf-b085-99f2d595456f',
      'resetPasswordToken': 'cca9087e-c0d1-4ad6-bbd2-44879cc65f50',
      'resetPasswordExpires': '',
      'phone': 1254980499,
      'roles': [
        'Employee'
      ],
      'address': {
        'address1': 'Albany Avenue',
        'city': 'Floriston',
        'state': 'District Of Columbia',
        'zipCode': 66759
      },
      'createdBy': '5857f60f6e47e253db9acb22'
    },
    {
      'firstName': 'Bridget',
      'lastName': 'Barrett',
      'email': 'bridgetbarrett@gluid.com',
      'dob': '2001-08-22 09:47:02',
      'password': 'Massachusetts13024',
      'salt': 'eead9851-a52c-4872-a433-78eee91f277a',
      'resetPasswordToken': '8b038459-3a07-4667-805e-877675713a56',
      'resetPasswordExpires': '',
      'phone': 1254154600,
      'roles': [
        'User'
      ],
      'address': {
        'address1': 'Woods Place',
        'city': 'Turpin',
        'state': 'Illinois',
        'zipCode': 89340
      },
      'createdBy': '5857f60f9f40f0c346d0a637'
    },
    {
      'firstName': 'Gloria',
      'lastName': 'Norris',
      'email': 'glorianorris@gluid.com',
      'dob': '1991-07-07 08:46:40',
      'password': 'Michigan14949',
      'salt': '971b5ae8-3e22-4256-92ae-ce3f1569acb3',
      'resetPasswordToken': 'd254aa2b-585c-4159-a6f5-d3be0a539452',
      'resetPasswordExpires': '',
      'phone': 1779074667,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Montgomery Place',
        'city': 'Longbranch',
        'state': 'Washington',
        'zipCode': 74305
      },
      'createdBy': '5857f60f938ff34d1fd5c2b7'
    },
    {
      'firstName': 'Addie',
      'lastName': 'Shepherd',
      'email': 'addieshepherd@gluid.com',
      'dob': '2007-08-30 10:16:58',
      'password': 'American Samoa18129',
      'salt': '298d124f-3ab1-4b8f-bc31-12326e1369b3',
      'resetPasswordToken': '4e293c80-f803-4878-b1ae-4fde8f14de22',
      'resetPasswordExpires': '',
      'phone': 1301385747,
      'roles': [
        'Admin'
      ],
      'address': {
        'address1': 'Schenectady Avenue',
        'city': 'Websterville',
        'state': 'Guam',
        'zipCode': 75955
      },
      'createdBy': '5857f60f5c1dbb5d430290b8'
    },
    {
      'firstName': 'Maura',
      'lastName': 'Ayala',
      'email': 'mauraayala@gluid.com',
      'dob': '2004-07-17 02:52:22',
      'password': 'Colorado12187',
      'salt': 'b47aa84c-2126-4e54-9371-0c41b86a6802',
      'resetPasswordToken': '8946ee52-fcea-4979-a8a4-4c4d21d05627',
      'resetPasswordExpires': '',
      'phone': 1215199003,
      'roles': [
        'User',
        'Manager'
      ],
      'address': {
        'address1': 'Rutherford Place',
        'city': 'Henrietta',
        'state': 'Nevada',
        'zipCode': 14873
      },
      'createdBy': '5857f60f9d1d11f642c70d92'
    },
    {
      'firstName': 'Sanford',
      'lastName': 'Bryan',
      'email': 'sanfordbryan@gluid.com',
      'dob': '2011-03-14 12:26:09',
      'password': 'Iowa15296',
      'salt': 'e68af5e4-9e4d-4a4d-8133-0c586296fc84',
      'resetPasswordToken': '550893eb-3306-4b3b-b533-81b97d3c188a',
      'resetPasswordExpires': '',
      'phone': 1773999118,
      'roles': [
        'Manager'
      ],
      'address': {
        'address1': 'Tampa Court',
        'city': 'Jessie',
        'state': 'Mississippi',
        'zipCode': 33021
      },
      'createdBy': '5857f60f78715e796b406581'
    },
    {
      'firstName': 'Corrine',
      'lastName': 'Stevenson',
      'email': 'corrinestevenson@gluid.com',
      'dob': '2005-12-07 04:41:54',
      'password': 'Northern Mariana Islands19470',
      'salt': '67e68f81-6bad-4ffd-9f62-95adb56693b4',
      'resetPasswordToken': '8bf6eaf8-5d27-4c4a-a226-4a5f74073d51',
      'resetPasswordExpires': '',
      'phone': 1685522559,
      'roles': [
        'Employee',
        'User'
      ],
      'address': {
        'address1': 'Tehama Street',
        'city': 'Toftrees',
        'state': 'New Mexico',
        'zipCode': 54033
      },
      'createdBy': '5857f60fc62497e457b07c0b'
    },
    {
      'firstName': 'Franco',
      'lastName': 'Oconnor',
      'email': 'francooconnor@gluid.com',
      'dob': '1994-09-18 03:15:05',
      'password': 'Oklahoma16246',
      'salt': '0b4458e0-4451-47e8-94f1-24126c506d85',
      'resetPasswordToken': 'b5943d12-35f8-4644-b5bb-75da8d250ac1',
      'resetPasswordExpires': '',
      'phone': 1080511425,
      'roles': [
        'sysAdmin'
      ],
      'address': {
        'address1': 'Kent Street',
        'city': 'Nicut',
        'state': 'Rhode Island',
        'zipCode': 46447
      },
      'createdBy': '5857f60f0cc9a4ed959e656d'
    }
  ]
}

module.exports = data
