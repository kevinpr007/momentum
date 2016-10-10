const mongoDB = require('../../config/mongoose.collections.json')

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': mongoDB.Model.User,
    'documents': [
      {
        'email': 'maddencruz@biohab.com',
        'password': 'Florida10514',
        'firstName': 'Florine',
        'lastName': 'Jensen',
        'address': {
          'address1': 'Perry Terrace',
          'city': 'Loveland',
          'state': 'Puerto Rico',
          'zipCode': 7173
        }
      },
      {
        'email': 'florinejensen@biohab.com',
        'password': 'Oregon15875',
        'firstName': 'Jan',
        'lastName': 'Bonner',
        'address': {
          'address1': 'Coventry Road',
          'city': 'Sussex',
          'state': 'Northern Mariana Islands',
          'zipCode': 3336
        }
      },
      {
        'email': 'janbonner@biohab.com',
        'password': 'Wyoming14319',
        'firstName': 'Jensen',
        'lastName': 'Sawyer',
        'address': {
          'address1': 'Irving Avenue',
          'city': 'Draper',
          'state': 'Guam',
          'zipCode': 5710
        }
      },
      {
        'email': 'jensensawyer@biohab.com',
        'password': 'Idaho14968',
        'firstName': 'Mosley',
        'lastName': 'Serrano',
        'address': {
          'address1': 'Kings Place',
          'city': 'Unionville',
          'state': 'Tennessee',
          'zipCode': 4383
        }
      },
      {
        'email': 'mosleyserrano@biohab.com',
        'password': 'Arizona12046',
        'firstName': 'Baxter',
        'lastName': 'Lester',
        'address': {
          'address1': 'Clarendon Road',
          'city': 'Gerber',
          'state': 'New Jersey',
          'zipCode': 434
        }
      },
      {
        'email': 'baxterlester@biohab.com',
        'password': 'Alabama11738',
        'firstName': 'Tillman',
        'lastName': 'Roberts',
        'address': {
          'address1': 'Butler Place',
          'city': 'Kylertown',
          'state': 'Palau',
          'zipCode': 4111
        }
      },
      {
        'email': 'tillmanroberts@biohab.com',
        'password': 'Oklahoma10619',
        'firstName': 'Ericka',
        'lastName': 'Gentry',
        'address': {
          'address1': 'Senator Street',
          'city': 'Layhill',
          'state': 'New Mexico',
          'zipCode': 4099
        }
      },
      {
        'email': 'erickagentry@biohab.com',
        'password': 'California17138',
        'firstName': 'Acosta',
        'lastName': 'Hart',
        'address': {
          'address1': 'Oliver Street',
          'city': 'Jacksonburg',
          'state': 'Missouri',
          'zipCode': 7701
        }
      },
      {
        'email': 'acostahart@biohab.com',
        'password': 'North Dakota12389',
        'firstName': 'Rios',
        'lastName': 'Rojas',
        'address': {
          'address1': 'Downing Street',
          'city': 'Windsor',
          'state': 'Wisconsin',
          'zipCode': 9436
        }
      },
      {
        'email': 'riosrojas@biohab.com',
        'password': 'Virginia17138',
        'firstName': 'Gordon',
        'lastName': 'Levy',
        'address': {
          'address1': 'Adams Street',
          'city': 'Carbonville',
          'state': 'Texas',
          'zipCode': 936
        }
      },
      {
        'email': 'gordonlevy@biohab.com',
        'password': 'Colorado19641',
        'firstName': 'Nieves',
        'lastName': 'Curry',
        'address': {
          'address1': 'Tompkins Place',
          'city': 'Enetai',
          'state': 'New York',
          'zipCode': 6445
        }
      },
      {
        'email': 'nievescurry@biohab.com',
        'password': 'Arkansas17240',
        'firstName': 'Ruiz',
        'lastName': 'Holloway',
        'address': {
          'address1': 'Ira Court',
          'city': 'Mansfield',
          'state': 'Vermont',
          'zipCode': 6351
        }
      },
      {
        'email': 'ruizholloway@biohab.com',
        'password': 'Iowa14654',
        'firstName': 'Staci',
        'lastName': 'Donaldson',
        'address': {
          'address1': 'Lloyd Street',
          'city': 'Muir',
          'state': 'Hawaii',
          'zipCode': 4746
        }
      },
      {
        'email': 'stacidonaldson@biohab.com',
        'password': 'Ohio13965',
        'firstName': 'Bernadette',
        'lastName': 'Brock',
        'address': {
          'address1': 'Aurelia Court',
          'city': 'Yettem',
          'state': 'Virgin Islands',
          'zipCode': 6926
        }
      },
      {
        'email': 'bernadettebrock@biohab.com',
        'password': 'Utah16209',
        'firstName': 'Nadine',
        'lastName': 'Shaffer',
        'address': {
          'address1': 'President Street',
          'city': 'Corriganville',
          'state': 'Georgia',
          'zipCode': 7617
        }
      },
      {
        'email': 'nadineshaffer@biohab.com',
        'password': 'Montana14156',
        'firstName': 'Wanda',
        'lastName': 'Sosa',
        'address': {
          'address1': 'Green Street',
          'city': 'Hampstead',
          'state': 'South Carolina',
          'zipCode': 162
        }
      },
      {
        'email': 'wandasosa@biohab.com',
        'password': 'Michigan19767',
        'firstName': 'Underwood',
        'lastName': 'Tate',
        'address': {
          'address1': 'Union Street',
          'city': 'Magnolia',
          'state': 'American Samoa',
          'zipCode': 6366
        }
      },
      {
        'email': 'underwoodtate@biohab.com',
        'password': 'Illinois13419',
        'firstName': 'Gutierrez',
        'lastName': 'Lee',
        'address': {
          'address1': 'Clymer Street',
          'city': 'Blanco',
          'state': 'Marshall Islands',
          'zipCode': 9767
        }
      },
      {
        'email': 'gutierrezlee@biohab.com',
        'password': 'North Carolina17961',
        'firstName': 'Bessie',
        'lastName': 'Flynn',
        'address': {
          'address1': 'Montauk Court',
          'city': 'Urbana',
          'state': 'District Of Columbia',
          'zipCode': 8245
        }
      },
      {
        'email': 'bessieflynn@biohab.com',
        'password': 'Delaware10541',
        'firstName': 'Bryan',
        'lastName': 'Hall',
        'address': {
          'address1': 'Surf Avenue',
          'city': 'Machias',
          'state': 'Louisiana',
          'zipCode': 8308
        }
      },
      {
        'email': 'bryanhall@biohab.com',
        'password': 'Alaska12336',
        'firstName': 'Gilliam',
        'lastName': 'Horne',
        'address': {
          'address1': 'Hancock Street',
          'city': 'Brogan',
          'state': 'Washington',
          'zipCode': 4747
        }
      },
      {
        'email': 'gilliamhorne@biohab.com',
        'password': 'Massachusetts13462',
        'firstName': 'Allie',
        'lastName': 'Riggs',
        'address': {
          'address1': 'Story Street',
          'city': 'Topanga',
          'state': 'Nebraska',
          'zipCode': 7084
        }
      },
      {
        'email': 'allieriggs@biohab.com',
        'password': 'Maine16598',
        'firstName': 'Manuela',
        'lastName': 'Ortega',
        'address': {
          'address1': 'Brigham Street',
          'city': 'Homestead',
          'state': 'Rhode Island',
          'zipCode': 1946
        }
      },
      {
        'email': 'manuelaortega@biohab.com',
        'password': 'New Hampshire17700',
        'firstName': 'Vargas',
        'lastName': 'Miles',
        'address': {
          'address1': 'Ellery Street',
          'city': 'Dyckesville',
          'state': 'Indiana',
          'zipCode': 2912
        }
      },
      {
        'email': 'vargasmiles@biohab.com',
        'password': 'Pennsylvania19193',
        'firstName': 'Merle',
        'lastName': 'Barker',
        'address': {
          'address1': 'Brooklyn Road',
          'city': 'Harmon',
          'state': 'Minnesota',
          'zipCode': 9120
        }
      },
      {
        'email': 'merlebarker@biohab.com',
        'password': 'South Dakota16595',
        'firstName': 'Miller',
        'lastName': 'Ellis',
        'address': {
          'address1': 'Lyme Avenue',
          'city': 'Shaft',
          'state': 'West Virginia',
          'zipCode': 7493
        }
      },
      {
        'email': 'millerellis@biohab.com',
        'password': 'Kansas12600',
        'firstName': 'Julia',
        'lastName': 'Sanchez',
        'address': {
          'address1': 'Meadow Street',
          'city': 'Bowie',
          'state': 'Federated States Of Micronesia',
          'zipCode': 720
        }
      },
      {
        'email': 'juliasanchez@biohab.com',
        'password': 'Mississippi14070',
        'firstName': 'Dalton',
        'lastName': 'Trevino',
        'address': {
          'address1': 'Wilson Street',
          'city': 'Robbins',
          'state': 'Kentucky',
          'zipCode': 3997
        }
      },
      {
        'email': 'daltontrevino@biohab.com',
        'password': 'Nevada12164',
        'firstName': 'Estela',
        'lastName': 'Morse',
        'address': {
          'address1': 'Montauk Avenue',
          'city': 'Nipinnawasee',
          'state': 'Maryland',
          'zipCode': 226
        }
      },
      {
        'email': 'estelamorse@biohab.com',
        'password': 'Florida15428',
        'firstName': 'Letitia',
        'lastName': 'Lynch',
        'address': {
          'address1': 'Locust Street',
          'city': 'Gibbsville',
          'state': 'Puerto Rico',
          'zipCode': 1571
        }
      },
      {
        'email': 'letitialynch@biohab.com',
        'password': 'Oregon19563',
        'firstName': 'Osborn',
        'lastName': 'Gillespie',
        'address': {
          'address1': 'Moultrie Street',
          'city': 'Hessville',
          'state': 'Northern Mariana Islands',
          'zipCode': 8874
        }
      },
      {
        'email': 'osborngillespie@biohab.com',
        'password': 'Wyoming13887',
        'firstName': 'Marsh',
        'lastName': 'Russell',
        'address': {
          'address1': 'Jamaica Avenue',
          'city': 'Hemlock',
          'state': 'Guam',
          'zipCode': 4279
        }
      },
      {
        'email': 'marshrussell@biohab.com',
        'password': 'Idaho10402',
        'firstName': 'Harriet',
        'lastName': 'Sullivan',
        'address': {
          'address1': 'Polhemus Place',
          'city': 'Ogema',
          'state': 'Tennessee',
          'zipCode': 3423
        }
      },
      {
        'email': 'harrietsullivan@biohab.com',
        'password': 'Arizona16955',
        'firstName': 'Odessa',
        'lastName': 'Bolton',
        'address': {
          'address1': 'Lorimer Street',
          'city': 'Beaverdale',
          'state': 'New Jersey',
          'zipCode': 9510
        }
      },
      {
        'email': 'odessabolton@biohab.com',
        'password': 'Alabama18132',
        'firstName': 'Joanne',
        'lastName': 'Pennington',
        'address': {
          'address1': 'Ocean Avenue',
          'city': 'Stevens',
          'state': 'Palau',
          'zipCode': 1482
        }
      },
      {
        'email': 'joannepennington@biohab.com',
        'password': 'Oklahoma12347',
        'firstName': 'Snow',
        'lastName': 'Mullins',
        'address': {
          'address1': 'Monument Walk',
          'city': 'Bath',
          'state': 'New Mexico',
          'zipCode': 9263
        }
      },
      {
        'email': 'snowmullins@biohab.com',
        'password': 'California13005',
        'firstName': 'Alma',
        'lastName': 'Ellison',
        'address': {
          'address1': 'Vanderbilt Street',
          'city': 'Vivian',
          'state': 'Missouri',
          'zipCode': 9099
        }
      },
      {
        'email': 'almaellison@biohab.com',
        'password': 'North Dakota10979',
        'firstName': 'Workman',
        'lastName': 'Spence',
        'address': {
          'address1': 'Bristol Street',
          'city': 'Belvoir',
          'state': 'Wisconsin',
          'zipCode': 546
        }
      },
      {
        'email': 'workmanspence@biohab.com',
        'password': 'Virginia16020',
        'firstName': 'Mills',
        'lastName': 'Potts',
        'address': {
          'address1': 'Monitor Street',
          'city': 'Marion',
          'state': 'Texas',
          'zipCode': 6702
        }
      },
      {
        'email': 'millspotts@biohab.com',
        'password': 'Colorado17906',
        'firstName': 'Robin',
        'lastName': 'Shelton',
        'address': {
          'address1': 'Battery Avenue',
          'city': 'Edgar',
          'state': 'New York',
          'zipCode': 6986
        }
      },
      {
        'email': 'robinshelton@biohab.com',
        'password': 'Arkansas10911',
        'firstName': 'King',
        'lastName': 'Obrien',
        'address': {
          'address1': 'Concord Street',
          'city': 'Manchester',
          'state': 'Vermont',
          'zipCode': 1594
        }
      },
      {
        'email': 'kingobrien@biohab.com',
        'password': 'Iowa15611',
        'firstName': 'Dean',
        'lastName': 'Sheppard',
        'address': {
          'address1': 'Crooke Avenue',
          'city': 'Chelsea',
          'state': 'Hawaii',
          'zipCode': 8816
        }
      },
      {
        'email': 'deansheppard@biohab.com',
        'password': 'Ohio19544',
        'firstName': 'Alberta',
        'lastName': 'Ingram',
        'address': {
          'address1': 'Ash Street',
          'city': 'Elizaville',
          'state': 'Virgin Islands',
          'zipCode': 1845
        }
      },
      {
        'email': 'albertaingram@biohab.com',
        'password': 'Utah12093',
        'firstName': 'Constance',
        'lastName': 'Chen',
        'address': {
          'address1': 'Everett Avenue',
          'city': 'Monument',
          'state': 'Georgia',
          'zipCode': 8255
        }
      },
      {
        'email': 'constancechen@biohab.com',
        'password': 'Montana10349',
        'firstName': 'Schmidt',
        'lastName': 'Shepard',
        'address': {
          'address1': 'Driggs Avenue',
          'city': 'Twilight',
          'state': 'South Carolina',
          'zipCode': 8854
        }
      },
      {
        'email': 'schmidtshepard@biohab.com',
        'password': 'Michigan13409',
        'firstName': 'Arnold',
        'lastName': 'Olson',
        'address': {
          'address1': 'Falmouth Street',
          'city': 'Allensworth',
          'state': 'American Samoa',
          'zipCode': 7924
        }
      },
      {
        'email': 'arnoldolson@biohab.com',
        'password': 'Illinois14002',
        'firstName': 'Kristina',
        'lastName': 'Powers',
        'address': {
          'address1': 'Ditmas Avenue',
          'city': 'Welda',
          'state': 'Marshall Islands',
          'zipCode': 2417
        }
      },
      {
        'email': 'kristinapowers@biohab.com',
        'password': 'North Carolina11900',
        'firstName': 'Sonya',
        'lastName': 'Wiley',
        'address': {
          'address1': 'Commercial Street',
          'city': 'Marbury',
          'state': 'District Of Columbia',
          'zipCode': 8599
        }
      },
      {
        'email': 'sonyawiley@biohab.com',
        'password': 'Delaware13163',
        'firstName': 'Dee',
        'lastName': 'Dean',
        'address': {
          'address1': 'Newkirk Placez',
          'city': 'Kiskimere',
          'state': 'Louisiana',
          'zipCode': 2091
        }
      },
      {
        'email': 'deedean@biohab.com',
        'password': 'Alaska14171',
        'firstName': 'Sheila',
        'lastName': 'Whitehead',
        'address': {
          'address1': 'Ebony Court',
          'city': 'Swartzville',
          'state': 'Washington',
          'zipCode': 6842
        }
      },
      {
        'email': 'sheilawhitehead@biohab.com',
        'password': 'Massachusetts18445',
        'firstName': 'Ursula',
        'lastName': 'Roman',
        'address': {
          'address1': 'Whitty Lane',
          'city': 'Ona',
          'state': 'Nebraska',
          'zipCode': 5497
        }
      },
      {
        'email': 'ursularoman@biohab.com',
        'password': 'Maine16014',
        'firstName': 'Hughes',
        'lastName': 'Shields',
        'address': {
          'address1': 'Sullivan Street',
          'city': 'Westerville',
          'state': 'Rhode Island',
          'zipCode': 5206
        }
      },
      {
        'email': 'hughesshields@biohab.com',
        'password': 'New Hampshire12245',
        'firstName': 'Penny',
        'lastName': 'Rice',
        'address': {
          'address1': 'Cropsey Avenue',
          'city': 'Wakulla',
          'state': 'Indiana',
          'zipCode': 2869
        }
      },
      {
        'email': 'pennyrice@biohab.com',
        'password': 'Pennsylvania10277',
        'firstName': 'Bennett',
        'lastName': 'Hancock',
        'address': {
          'address1': 'Harbor Court',
          'city': 'Chumuckla',
          'state': 'Minnesota',
          'zipCode': 7791
        }
      },
      {
        'email': 'bennetthancock@biohab.com',
        'password': 'South Dakota14023',
        'firstName': 'Mullins',
        'lastName': 'Hill',
        'address': {
          'address1': 'Clark Street',
          'city': 'Greenbush',
          'state': 'West Virginia',
          'zipCode': 1039
        }
      },
      {
        'email': 'mullinshill@biohab.com',
        'password': 'Kansas17794',
        'firstName': 'Sanford',
        'lastName': 'Bradley',
        'address': {
          'address1': 'Friel Place',
          'city': 'Whitewater',
          'state': 'Federated States Of Micronesia',
          'zipCode': 1356
        }
      },
      {
        'email': 'sanfordbradley@biohab.com',
        'password': 'Mississippi13665',
        'firstName': 'Higgins',
        'lastName': 'Barber',
        'address': {
          'address1': 'Atlantic Avenue',
          'city': 'Nicholson',
          'state': 'Kentucky',
          'zipCode': 9294
        }
      },
      {
        'email': 'higginsbarber@biohab.com',
        'password': 'Nevada18890',
        'firstName': 'Valerie',
        'lastName': 'Holcomb',
        'address': {
          'address1': 'Kenilworth Place',
          'city': 'Strykersville',
          'state': 'Maryland',
          'zipCode': 5703
        }
      },
      {
        'email': 'valerieholcomb@biohab.com',
        'password': 'Florida16536',
        'firstName': 'Delacruz',
        'lastName': 'Lindsey',
        'address': {
          'address1': 'Campus Place',
          'city': 'Cashtown',
          'state': 'Puerto Rico',
          'zipCode': 7961
        }
      },
      {
        'email': 'delacruzlindsey@biohab.com',
        'password': 'Oregon15815',
        'firstName': 'Fanny',
        'lastName': 'Bray',
        'address': {
          'address1': 'Langham Street',
          'city': 'Nile',
          'state': 'Northern Mariana Islands',
          'zipCode': 5157
        }
      },
      {
        'email': 'fannybray@biohab.com',
        'password': 'Wyoming19852',
        'firstName': 'Hilda',
        'lastName': 'Norris',
        'address': {
          'address1': 'Minna Street',
          'city': 'Woodburn',
          'state': 'Guam',
          'zipCode': 5637
        }
      },
      {
        'email': 'hildanorris@biohab.com',
        'password': 'Idaho19226',
        'firstName': 'Christi',
        'lastName': 'Kirkland',
        'address': {
          'address1': 'Conway Street',
          'city': 'Stagecoach',
          'state': 'Tennessee',
          'zipCode': 3081
        }
      },
      {
        'email': 'christikirkland@biohab.com',
        'password': 'Arizona17856',
        'firstName': 'Simone',
        'lastName': 'Moody',
        'address': {
          'address1': 'Linden Boulevard',
          'city': 'Gilgo',
          'state': 'New Jersey',
          'zipCode': 4850
        }
      },
      {
        'email': 'simonemoody@biohab.com',
        'password': 'Alabama17604',
        'firstName': 'Burch',
        'lastName': 'Moore',
        'address': {
          'address1': 'Wyona Street',
          'city': 'Cetronia',
          'state': 'Palau',
          'zipCode': 1144
        }
      },
      {
        'email': 'burchmoore@biohab.com',
        'password': 'Oklahoma12333',
        'firstName': 'Eddie',
        'lastName': 'Hodge',
        'address': {
          'address1': 'Gerry Street',
          'city': 'Woodruff',
          'state': 'New Mexico',
          'zipCode': 5697
        }
      },
      {
        'email': 'eddiehodge@biohab.com',
        'password': 'California19091',
        'firstName': 'Haley',
        'lastName': 'Rush',
        'address': {
          'address1': 'Lawton Street',
          'city': 'Leeper',
          'state': 'Missouri',
          'zipCode': 6858
        }
      },
      {
        'email': 'haleyrush@biohab.com',
        'password': 'North Dakota15137',
        'firstName': 'Kara',
        'lastName': 'Hooper',
        'address': {
          'address1': 'Lewis Avenue',
          'city': 'Dexter',
          'state': 'Wisconsin',
          'zipCode': 4559
        }
      },
      {
        'email': 'karahooper@biohab.com',
        'password': 'Virginia17882',
        'firstName': 'Lila',
        'lastName': 'Walton',
        'address': {
          'address1': 'Huntington Street',
          'city': 'Crenshaw',
          'state': 'Texas',
          'zipCode': 5424
        }
      },
      {
        'email': 'lilawalton@biohab.com',
        'password': 'Colorado12946',
        'firstName': 'Zamora',
        'lastName': 'Sandoval',
        'address': {
          'address1': 'Lawrence Avenue',
          'city': 'Trail',
          'state': 'New York',
          'zipCode': 7260
        }
      },
      {
        'email': 'zamorasandoval@biohab.com',
        'password': 'Arkansas13652',
        'firstName': 'Misty',
        'lastName': 'Dillon',
        'address': {
          'address1': 'Irvington Place',
          'city': 'Keller',
          'state': 'Vermont',
          'zipCode': 5161
        }
      },
      {
        'email': 'mistydillon@biohab.com',
        'password': 'Iowa16744',
        'firstName': 'Delia',
        'lastName': 'Diaz',
        'address': {
          'address1': 'Malbone Street',
          'city': 'Rodanthe',
          'state': 'Hawaii',
          'zipCode': 4993
        }
      },
      {
        'email': 'deliadiaz@biohab.com',
        'password': 'Ohio18439',
        'firstName': 'Wolfe',
        'lastName': 'Mayo',
        'address': {
          'address1': 'Fuller Place',
          'city': 'Hendersonville',
          'state': 'Virgin Islands',
          'zipCode': 3776
        }
      },
      {
        'email': 'wolfemayo@biohab.com',
        'password': 'Utah12728',
        'firstName': 'Evangeline',
        'lastName': 'Mcmahon',
        'address': {
          'address1': 'Hamilton Walk',
          'city': 'Hinsdale',
          'state': 'Georgia',
          'zipCode': 1923
        }
      },
      {
        'email': 'evangelinemcmahon@biohab.com',
        'password': 'Montana17639',
        'firstName': 'Goodman',
        'lastName': 'Vincent',
        'address': {
          'address1': 'Cherry Street',
          'city': 'Leroy',
          'state': 'South Carolina',
          'zipCode': 5726
        }
      },
      {
        'email': 'goodmanvincent@biohab.com',
        'password': 'Michigan17643',
        'firstName': 'Wise',
        'lastName': 'Graves',
        'address': {
          'address1': 'Dorchester Road',
          'city': 'Dawn',
          'state': 'American Samoa',
          'zipCode': 5442
        }
      },
      {
        'email': 'wisegraves@biohab.com',
        'password': 'Illinois11625',
        'firstName': 'Wheeler',
        'lastName': 'Cote',
        'address': {
          'address1': 'Pierrepont Place',
          'city': 'Tampico',
          'state': 'Marshall Islands',
          'zipCode': 7211
        }
      },
      {
        'email': 'wheelercote@biohab.com',
        'password': 'North Carolina17715',
        'firstName': 'Ashlee',
        'lastName': 'Buckner',
        'address': {
          'address1': 'Kay Court',
          'city': 'Conway',
          'state': 'District Of Columbia',
          'zipCode': 256
        }
      },
      {
        'email': 'ashleebuckner@biohab.com',
        'password': 'Delaware15562',
        'firstName': 'Parrish',
        'lastName': 'Lyons',
        'address': {
          'address1': 'Cleveland Street',
          'city': 'Kansas',
          'state': 'Louisiana',
          'zipCode': 6970
        }
      },
      {
        'email': 'parrishlyons@biohab.com',
        'password': 'Alaska12275',
        'firstName': 'Nash',
        'lastName': 'Harrington',
        'address': {
          'address1': 'Aviation Road',
          'city': 'Bainbridge',
          'state': 'Washington',
          'zipCode': 8323
        }
      },
      {
        'email': 'nashharrington@biohab.com',
        'password': 'Massachusetts10636',
        'firstName': 'Gale',
        'lastName': 'Dunlap',
        'address': {
          'address1': 'Coleman Street',
          'city': 'Waterford',
          'state': 'Nebraska',
          'zipCode': 1674
        }
      },
      {
        'email': 'galedunlap@biohab.com',
        'password': 'Maine17907',
        'firstName': 'Lupe',
        'lastName': 'Bartlett',
        'address': {
          'address1': 'King Street',
          'city': 'Groveville',
          'state': 'Rhode Island',
          'zipCode': 6033
        }
      },
      {
        'email': 'lupebartlett@biohab.com',
        'password': 'New Hampshire19625',
        'firstName': 'Britt',
        'lastName': 'Maddox',
        'address': {
          'address1': 'Thames Street',
          'city': 'Fredericktown',
          'state': 'Indiana',
          'zipCode': 3071
        }
      },
      {
        'email': 'brittmaddox@biohab.com',
        'password': 'Pennsylvania14626',
        'firstName': 'Bobbie',
        'lastName': 'Wolf',
        'address': {
          'address1': 'Jackson Court',
          'city': 'Riviera',
          'state': 'Minnesota',
          'zipCode': 8515
        }
      },
      {
        'email': 'bobbiewolf@biohab.com',
        'password': 'South Dakota14089',
        'firstName': 'Tracie',
        'lastName': 'Booth',
        'address': {
          'address1': 'Franklin Street',
          'city': 'Seymour',
          'state': 'West Virginia',
          'zipCode': 6341
        }
      },
      {
        'email': 'traciebooth@biohab.com',
        'password': 'Kansas14872',
        'firstName': 'Slater',
        'lastName': 'Hurst',
        'address': {
          'address1': 'Lancaster Avenue',
          'city': 'Savage',
          'state': 'Federated States Of Micronesia',
          'zipCode': 1638
        }
      },
      {
        'email': 'slaterhurst@biohab.com',
        'password': 'Mississippi16933',
        'firstName': 'Valencia',
        'lastName': 'Harvey',
        'address': {
          'address1': 'Sumner Place',
          'city': 'Harrison',
          'state': 'Kentucky',
          'zipCode': 2434
        }
      },
      {
        'email': 'valenciaharvey@biohab.com',
        'password': 'Nevada17629',
        'firstName': 'Silvia',
        'lastName': 'Delaney',
        'address': {
          'address1': 'Guernsey Street',
          'city': 'Why',
          'state': 'Maryland',
          'zipCode': 6477
        }
      },
      {
        'email': 'silviadelaney@biohab.com',
        'password': 'Florida19656',
        'firstName': 'Bentley',
        'lastName': 'Goodwin',
        'address': {
          'address1': 'River Street',
          'city': 'Gardiner',
          'state': 'Puerto Rico',
          'zipCode': 9192
        }
      },
      {
        'email': 'bentleygoodwin@biohab.com',
        'password': 'Oregon19707',
        'firstName': 'Jennie',
        'lastName': 'Wong',
        'address': {
          'address1': 'Terrace Place',
          'city': 'Hartsville/Hartley',
          'state': 'Northern Mariana Islands',
          'zipCode': 9940
        }
      },
      {
        'email': 'jenniewong@biohab.com',
        'password': 'Wyoming11889',
        'firstName': 'Gilbert',
        'lastName': 'Dunn',
        'address': {
          'address1': 'Rose Street',
          'city': 'Hiseville',
          'state': 'Guam',
          'zipCode': 4072
        }
      },
      {
        'email': 'gilbertdunn@biohab.com',
        'password': 'Idaho12988',
        'firstName': 'Bowen',
        'lastName': 'Bell',
        'address': {
          'address1': 'Lafayette Walk',
          'city': 'Wescosville',
          'state': 'Tennessee',
          'zipCode': 9366
        }
      },
      {
        'email': 'bowenbell@biohab.com',
        'password': 'Arizona14432',
        'firstName': 'Kimberly',
        'lastName': 'Maynard',
        'address': {
          'address1': 'Madison Place',
          'city': 'Bellfountain',
          'state': 'New Jersey',
          'zipCode': 9371
        }
      },
      {
        'email': 'kimberlymaynard@biohab.com',
        'password': 'Alabama12508',
        'firstName': 'Michael',
        'lastName': 'Burks',
        'address': {
          'address1': 'Broome Street',
          'city': 'Belva',
          'state': 'Palau',
          'zipCode': 9037
        }
      },
      {
        'email': 'michaelburks@biohab.com',
        'password': 'Oklahoma12992',
        'firstName': 'Dianna',
        'lastName': 'Stanton',
        'address': {
          'address1': 'Amber Street',
          'city': 'Mooresburg',
          'state': 'New Mexico',
          'zipCode': 8695
        }
      },
      {
        'email': 'diannastanton@biohab.com',
        'password': 'California10924',
        'firstName': 'Ramsey',
        'lastName': 'Roach',
        'address': {
          'address1': 'McClancy Place',
          'city': 'Bordelonville',
          'state': 'Missouri',
          'zipCode': 2100
        }
      },
      {
        'email': 'ramseyroach@biohab.com',
        'password': 'North Dakota18105',
        'firstName': 'Decker',
        'lastName': 'Fowler',
        'address': {
          'address1': 'Carlton Avenue',
          'city': 'Kanauga',
          'state': 'Wisconsin',
          'zipCode': 8699
        }
      },
      {
        'email': 'deckerfowler@biohab.com',
        'password': 'Virginia14095',
        'firstName': 'Graves',
        'lastName': 'Browning',
        'address': {
          'address1': 'Remsen Avenue',
          'city': 'Enoree',
          'state': 'Texas',
          'zipCode': 6174
        }
      },
      {
        'email': 'gravesbrowning@biohab.com',
        'password': 'Colorado16689',
        'firstName': 'Briggs',
        'lastName': 'Buckley',
        'address': {
          'address1': 'Bushwick Court',
          'city': 'Calpine',
          'state': 'New York',
          'zipCode': 1921
        }
      },
      {
        'email': 'briggsbuckley@biohab.com',
        'password': 'Arkansas16590',
        'firstName': 'Mcfarland',
        'lastName': 'Garza',
        'address': {
          'address1': 'Poplar Avenue',
          'city': 'Juarez',
          'state': 'Vermont',
          'zipCode': 6325
        }
      },
      {
        'email': 'mcfarlandgarza@biohab.com',
        'password': 'Iowa14117',
        'firstName': 'Head',
        'lastName': 'Massey',
        'address': {
          'address1': 'Hopkins Street',
          'city': 'Kula',
          'state': 'Hawaii',
          'zipCode': 266
        }
      }
    ]
  }
]

module.exports = data
