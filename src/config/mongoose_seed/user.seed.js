const mongoDB = require('../../config/mongoose.collections.json')

// Data array containing seed data - documents organized by Model
var data = [
  {
    "email": "hamiltonberger@fitcore.com",
    "password": "Tennessee14926",
    "firstName": "Clayton",
    "lastName": "Gutierrez",
    "address": {
      "address1": "Amersfort Place",
      "city": "Greer",
      "state": "Connecticut",
      "zipCode": 12524
    }
  },
  {
    "email": "claytongutierrez@fitcore.com",
    "password": "Guam14296",
    "firstName": "Jennings",
    "lastName": "Rogers",
    "address": {
      "address1": "Coles Street",
      "city": "Coldiron",
      "state": "Kansas",
      "zipCode": 84620
    }
  },
  {
    "email": "jenningsrogers@fitcore.com",
    "password": "Louisiana16342",
    "firstName": "Gale",
    "lastName": "Lawson",
    "address": {
      "address1": "Railroad Avenue",
      "city": "Bannock",
      "state": "Illinois",
      "zipCode": 16877
    }
  },
  {
    "email": "galelawson@fitcore.com",
    "password": "Nevada19251",
    "firstName": "Leanna",
    "lastName": "Patrick",
    "address": {
      "address1": "Dikeman Street",
      "city": "Coultervillle",
      "state": "Rhode Island",
      "zipCode": 62958
    }
  },
  {
    "email": "leannapatrick@fitcore.com",
    "password": "Florida16734",
    "firstName": "Allyson",
    "lastName": "Morton",
    "address": {
      "address1": "Monaco Place",
      "city": "Caledonia",
      "state": "Maryland",
      "zipCode": 50491
    }
  },
  {
    "email": "allysonmorton@fitcore.com",
    "password": "Michigan19895",
    "firstName": "Agnes",
    "lastName": "Hurst",
    "address": {
      "address1": "Arkansas Drive",
      "city": "Adelino",
      "state": "West Virginia",
      "zipCode": 19099
    }
  },
  {
    "email": "agneshurst@fitcore.com",
    "password": "California19155",
    "firstName": "Kendra",
    "lastName": "Mcmillan",
    "address": {
      "address1": "Montana Place",
      "city": "Why",
      "state": "American Samoa",
      "zipCode": 16296
    }
  },
  {
    "email": "kendramcmillan@fitcore.com",
    "password": "Mississippi13765",
    "firstName": "Natalie",
    "lastName": "Wagner",
    "address": {
      "address1": "Albany Avenue",
      "city": "Robinson",
      "state": "Pennsylvania",
      "zipCode": 15359
    }
  },
  {
    "email": "nataliewagner@fitcore.com",
    "password": "Vermont13829",
    "firstName": "Dale",
    "lastName": "Beck",
    "address": {
      "address1": "Blake Avenue",
      "city": "Gloucester",
      "state": "North Dakota",
      "zipCode": 67150
    }
  },
  {
    "email": "dalebeck@fitcore.com",
    "password": "Missouri15565",
    "firstName": "Sondra",
    "lastName": "Rollins",
    "address": {
      "address1": "Church Avenue",
      "city": "Gambrills",
      "state": "Puerto Rico",
      "zipCode": 48618
    }
  },
  {
    "email": "sondrarollins@fitcore.com",
    "password": "New York17885",
    "firstName": "Betsy",
    "lastName": "Alvarado",
    "address": {
      "address1": "Claver Place",
      "city": "Devon",
      "state": "Georgia",
      "zipCode": 24794
    }
  },
  {
    "email": "betsyalvarado@fitcore.com",
    "password": "New Mexico16768",
    "firstName": "Virginia",
    "lastName": "Singleton",
    "address": {
      "address1": "Duffield Street",
      "city": "Nescatunga",
      "state": "Washington",
      "zipCode": 47165
    }
  },
  {
    "email": "virginiasingleton@fitcore.com",
    "password": "Oklahoma10958",
    "firstName": "Vickie",
    "lastName": "Bentley",
    "address": {
      "address1": "Dunne Place",
      "city": "Worton",
      "state": "Indiana",
      "zipCode": 47897
    }
  },
  {
    "email": "vickiebentley@fitcore.com",
    "password": "Northern Mariana Islands13499",
    "firstName": "Desiree",
    "lastName": "Dominguez",
    "address": {
      "address1": "Kansas Place",
      "city": "Rosburg",
      "state": "Palau",
      "zipCode": 63229
    }
  },
  {
    "email": "desireedominguez@fitcore.com",
    "password": "New Jersey16225",
    "firstName": "Willis",
    "lastName": "Wheeler",
    "address": {
      "address1": "Bay Street",
      "city": "Dalton",
      "state": "Minnesota",
      "zipCode": 15458
    }
  },
  {
    "email": "williswheeler@fitcore.com",
    "password": "Maine17414",
    "firstName": "Vega",
    "lastName": "Prince",
    "address": {
      "address1": "Fulton Street",
      "city": "Adamstown",
      "state": "Federated States Of Micronesia",
      "zipCode": 54440
    }
  },
  {
    "email": "vegaprince@fitcore.com",
    "password": "Alabama11025",
    "firstName": "Therese",
    "lastName": "Rivera",
    "address": {
      "address1": "Pitkin Avenue",
      "city": "Goochland",
      "state": "Wisconsin",
      "zipCode": 34246
    }
  },
  {
    "email": "thereserivera@fitcore.com",
    "password": "New Hampshire11567",
    "firstName": "Mendez",
    "lastName": "Robinson",
    "address": {
      "address1": "Nolans Lane",
      "city": "Winston",
      "state": "Utah",
      "zipCode": 67819
    }
  },
  {
    "email": "mendezrobinson@fitcore.com",
    "password": "Hawaii19958",
    "firstName": "Reese",
    "lastName": "Russo",
    "address": {
      "address1": "Campus Place",
      "city": "Grahamtown",
      "state": "Virgin Islands",
      "zipCode": 37782
    }
  },
  {
    "email": "reeserusso@fitcore.com",
    "password": "Oregon17366",
    "firstName": "Lottie",
    "lastName": "Mcdaniel",
    "address": {
      "address1": "Crystal Street",
      "city": "Bentley",
      "state": "Arkansas",
      "zipCode": 88299
    }
  },
  {
    "email": "lottiemcdaniel@fitcore.com",
    "password": "Kentucky19610",
    "firstName": "Deleon",
    "lastName": "Hubbard",
    "address": {
      "address1": "Malta Street",
      "city": "Newcastle",
      "state": "Virginia",
      "zipCode": 27083
    }
  },
  {
    "email": "deleonhubbard@fitcore.com",
    "password": "Wyoming11339",
    "firstName": "Tracie",
    "lastName": "Roberson",
    "address": {
      "address1": "Grand Street",
      "city": "Rosedale",
      "state": "District Of Columbia",
      "zipCode": 86562
    }
  },
  {
    "email": "tracieroberson@fitcore.com",
    "password": "South Dakota19085",
    "firstName": "Manuela",
    "lastName": "Howe",
    "address": {
      "address1": "Moore Place",
      "city": "Vicksburg",
      "state": "Alaska",
      "zipCode": 12230
    }
  },
  {
    "email": "manuelahowe@fitcore.com",
    "password": "Montana10106",
    "firstName": "Estes",
    "lastName": "Rutledge",
    "address": {
      "address1": "Seaview Court",
      "city": "Florence",
      "state": "Delaware",
      "zipCode": 23157
    }
  },
  {
    "email": "estesrutledge@fitcore.com",
    "password": "Iowa10364",
    "firstName": "Barr",
    "lastName": "Miranda",
    "address": {
      "address1": "Turnbull Avenue",
      "city": "Hegins",
      "state": "Texas",
      "zipCode": 88750
    }
  },
  {
    "email": "barrmiranda@fitcore.com",
    "password": "Arizona13610",
    "firstName": "Conner",
    "lastName": "Nielsen",
    "address": {
      "address1": "Kenmore Terrace",
      "city": "Bennett",
      "state": "South Carolina",
      "zipCode": 47284
    }
  },
  {
    "email": "connernielsen@fitcore.com",
    "password": "Massachusetts18659",
    "firstName": "Schwartz",
    "lastName": "Mccarthy",
    "address": {
      "address1": "Brevoort Place",
      "city": "Salvo",
      "state": "Colorado",
      "zipCode": 23089
    }
  },
  {
    "email": "schwartzmccarthy@fitcore.com",
    "password": "Nebraska14952",
    "firstName": "Janis",
    "lastName": "Rivers",
    "address": {
      "address1": "School Lane",
      "city": "Oneida",
      "state": "Ohio",
      "zipCode": 26718
    }
  },
  {
    "email": "janisrivers@fitcore.com",
    "password": "Marshall Islands17535",
    "firstName": "Alisha",
    "lastName": "Erickson",
    "address": {
      "address1": "Branton Street",
      "city": "Gilgo",
      "state": "North Carolina",
      "zipCode": 80195
    }
  },
  {
    "email": "alishaerickson@fitcore.com",
    "password": "Tennessee18551",
    "firstName": "Evelyn",
    "lastName": "Franco",
    "address": {
      "address1": "Independence Avenue",
      "city": "Tibbie",
      "state": "Connecticut",
      "zipCode": 14782
    }
  },
  {
    "email": "evelynfranco@fitcore.com",
    "password": "Guam10681",
    "firstName": "Giles",
    "lastName": "Hawkins",
    "address": {
      "address1": "Hart Street",
      "city": "Marshall",
      "state": "Kansas",
      "zipCode": 80385
    }
  },
  {
    "email": "gileshawkins@fitcore.com",
    "password": "Louisiana15169",
    "firstName": "Isabella",
    "lastName": "Bruce",
    "address": {
      "address1": "Garfield Place",
      "city": "Matheny",
      "state": "Illinois",
      "zipCode": 79215
    }
  },
  {
    "email": "isabellabruce@fitcore.com",
    "password": "Nevada19194",
    "firstName": "Nellie",
    "lastName": "Wiggins",
    "address": {
      "address1": "Commerce Street",
      "city": "Roberts",
      "state": "Rhode Island",
      "zipCode": 69837
    }
  },
  {
    "email": "nelliewiggins@fitcore.com",
    "password": "Florida19166",
    "firstName": "Morton",
    "lastName": "Hodge",
    "address": {
      "address1": "Sands Street",
      "city": "Noblestown",
      "state": "Maryland",
      "zipCode": 68286
    }
  },
  {
    "email": "mortonhodge@fitcore.com",
    "password": "Michigan17875",
    "firstName": "Fannie",
    "lastName": "Santana",
    "address": {
      "address1": "Clifton Place",
      "city": "Hayes",
      "state": "West Virginia",
      "zipCode": 39986
    }
  },
  {
    "email": "fanniesantana@fitcore.com",
    "password": "California15729",
    "firstName": "Ortega",
    "lastName": "Ballard",
    "address": {
      "address1": "Morton Street",
      "city": "Waumandee",
      "state": "American Samoa",
      "zipCode": 27276
    }
  },
  {
    "email": "ortegaballard@fitcore.com",
    "password": "Mississippi15082",
    "firstName": "Sullivan",
    "lastName": "Banks",
    "address": {
      "address1": "Newkirk Avenue",
      "city": "Hoagland",
      "state": "Pennsylvania",
      "zipCode": 54549
    }
  },
  {
    "email": "sullivanbanks@fitcore.com",
    "password": "Vermont11731",
    "firstName": "Grace",
    "lastName": "Barrera",
    "address": {
      "address1": "Joralemon Street",
      "city": "Edneyville",
      "state": "North Dakota",
      "zipCode": 83499
    }
  },
  {
    "email": "gracebarrera@fitcore.com",
    "password": "Missouri13475",
    "firstName": "Dennis",
    "lastName": "Espinoza",
    "address": {
      "address1": "Victor Road",
      "city": "Vienna",
      "state": "Puerto Rico",
      "zipCode": 67232
    }
  },
  {
    "email": "dennisespinoza@fitcore.com",
    "password": "New York16191",
    "firstName": "Richard",
    "lastName": "Burton",
    "address": {
      "address1": "Colonial Road",
      "city": "Highland",
      "state": "Georgia",
      "zipCode": 30003
    }
  },
  {
    "email": "richardburton@fitcore.com",
    "password": "New Mexico15809",
    "firstName": "Moon",
    "lastName": "Atkins",
    "address": {
      "address1": "Halleck Street",
      "city": "Hatteras",
      "state": "Washington",
      "zipCode": 34543
    }
  },
  {
    "email": "moonatkins@fitcore.com",
    "password": "Oklahoma19193",
    "firstName": "Lindsey",
    "lastName": "Alford",
    "address": {
      "address1": "Sullivan Place",
      "city": "Ada",
      "state": "Indiana",
      "zipCode": 39901
    }
  },
  {
    "email": "lindseyalford@fitcore.com",
    "password": "Northern Mariana Islands18020",
    "firstName": "Wilda",
    "lastName": "Roy",
    "address": {
      "address1": "Olive Street",
      "city": "Norwood",
      "state": "Palau",
      "zipCode": 24339
    }
  },
  {
    "email": "wildaroy@fitcore.com",
    "password": "New Jersey11449",
    "firstName": "Walsh",
    "lastName": "Boyd",
    "address": {
      "address1": "Junius Street",
      "city": "Fairacres",
      "state": "Minnesota",
      "zipCode": 51101
    }
  },
  {
    "email": "walshboyd@fitcore.com",
    "password": "Maine19813",
    "firstName": "Hinton",
    "lastName": "Gaines",
    "address": {
      "address1": "Lincoln Place",
      "city": "Kerby",
      "state": "Federated States Of Micronesia",
      "zipCode": 22312
    }
  },
  {
    "email": "hintongaines@fitcore.com",
    "password": "Alabama19951",
    "firstName": "Deana",
    "lastName": "Greene",
    "address": {
      "address1": "Hunts Lane",
      "city": "Maury",
      "state": "Wisconsin",
      "zipCode": 53181
    }
  },
  {
    "email": "deanagreene@fitcore.com",
    "password": "New Hampshire18448",
    "firstName": "Marcy",
    "lastName": "Bird",
    "address": {
      "address1": "Fuller Place",
      "city": "Brookfield",
      "state": "Utah",
      "zipCode": 51095
    }
  },
  {
    "email": "marcybird@fitcore.com",
    "password": "Hawaii13136",
    "firstName": "Cantrell",
    "lastName": "Wells",
    "address": {
      "address1": "Leonard Street",
      "city": "Robbins",
      "state": "Virgin Islands",
      "zipCode": 31578
    }
  },
  {
    "email": "cantrellwells@fitcore.com",
    "password": "Oregon16730",
    "firstName": "Lula",
    "lastName": "Cummings",
    "address": {
      "address1": "Cedar Street",
      "city": "Fruitdale",
      "state": "Arkansas",
      "zipCode": 22846
    }
  },
  {
    "email": "lulacummings@fitcore.com",
    "password": "Kentucky12861",
    "firstName": "Suzette",
    "lastName": "Medina",
    "address": {
      "address1": "Cass Place",
      "city": "Temperanceville",
      "state": "Virginia",
      "zipCode": 18892
    }
  },
  {
    "email": "suzettemedina@fitcore.com",
    "password": "Wyoming18411",
    "firstName": "Adela",
    "lastName": "Park",
    "address": {
      "address1": "Tapscott Avenue",
      "city": "Juarez",
      "state": "District Of Columbia",
      "zipCode": 80744
    }
  },
  {
    "email": "adelapark@fitcore.com",
    "password": "South Dakota18515",
    "firstName": "Shepard",
    "lastName": "Wood",
    "address": {
      "address1": "Guernsey Street",
      "city": "Hiwasse",
      "state": "Alaska",
      "zipCode": 44011
    }
  },
  {
    "email": "shepardwood@fitcore.com",
    "password": "Montana19977",
    "firstName": "Casey",
    "lastName": "Puckett",
    "address": {
      "address1": "Erskine Loop",
      "city": "Freeburn",
      "state": "Delaware",
      "zipCode": 57981
    }
  },
  {
    "email": "caseypuckett@fitcore.com",
    "password": "Iowa10189",
    "firstName": "Mindy",
    "lastName": "Alston",
    "address": {
      "address1": "Rewe Street",
      "city": "Lumberton",
      "state": "Texas",
      "zipCode": 55779
    }
  },
  {
    "email": "mindyalston@fitcore.com",
    "password": "Arizona19672",
    "firstName": "Raymond",
    "lastName": "Odonnell",
    "address": {
      "address1": "Norman Avenue",
      "city": "Sylvanite",
      "state": "South Carolina",
      "zipCode": 71750
    }
  },
  {
    "email": "raymondodonnell@fitcore.com",
    "password": "Massachusetts10547",
    "firstName": "Aisha",
    "lastName": "Villarreal",
    "address": {
      "address1": "Caton Place",
      "city": "Dargan",
      "state": "Colorado",
      "zipCode": 23115
    }
  },
  {
    "email": "aishavillarreal@fitcore.com",
    "password": "Nebraska11427",
    "firstName": "Summers",
    "lastName": "Oneill",
    "address": {
      "address1": "Riverdale Avenue",
      "city": "Jacumba",
      "state": "Ohio",
      "zipCode": 84150
    }
  },
  {
    "email": "summersoneill@fitcore.com",
    "password": "Marshall Islands13773",
    "firstName": "Bender",
    "lastName": "Stout",
    "address": {
      "address1": "Humboldt Street",
      "city": "Sterling",
      "state": "North Carolina",
      "zipCode": 63271
    }
  },
  {
    "email": "benderstout@fitcore.com",
    "password": "Tennessee13972",
    "firstName": "Duncan",
    "lastName": "Wallace",
    "address": {
      "address1": "National Drive",
      "city": "Taft",
      "state": "Connecticut",
      "zipCode": 20697
    }
  },
  {
    "email": "duncanwallace@fitcore.com",
    "password": "Guam10544",
    "firstName": "Keri",
    "lastName": "Miles",
    "address": {
      "address1": "Wythe Avenue",
      "city": "Belfair",
      "state": "Kansas",
      "zipCode": 10617
    }
  },
  {
    "email": "kerimiles@fitcore.com",
    "password": "Louisiana12235",
    "firstName": "Diana",
    "lastName": "Paul",
    "address": {
      "address1": "Roosevelt Place",
      "city": "Dahlen",
      "state": "Illinois",
      "zipCode": 23936
    }
  },
  {
    "email": "dianapaul@fitcore.com",
    "password": "Nevada14497",
    "firstName": "Lorena",
    "lastName": "Roman",
    "address": {
      "address1": "Downing Street",
      "city": "Urie",
      "state": "Rhode Island",
      "zipCode": 14835
    }
  },
  {
    "email": "lorenaroman@fitcore.com",
    "password": "Florida18430",
    "firstName": "Eddie",
    "lastName": "Gilmore",
    "address": {
      "address1": "Butler Place",
      "city": "Lewis",
      "state": "Maryland",
      "zipCode": 75937
    }
  },
  {
    "email": "eddiegilmore@fitcore.com",
    "password": "Michigan18537",
    "firstName": "Carson",
    "lastName": "Patel",
    "address": {
      "address1": "Karweg Place",
      "city": "Tampico",
      "state": "West Virginia",
      "zipCode": 16459
    }
  },
  {
    "email": "carsonpatel@fitcore.com",
    "password": "California11601",
    "firstName": "Buck",
    "lastName": "Boyer",
    "address": {
      "address1": "Dekalb Avenue",
      "city": "Caspar",
      "state": "American Samoa",
      "zipCode": 17891
    }
  },
  {
    "email": "buckboyer@fitcore.com",
    "password": "Mississippi18689",
    "firstName": "Gordon",
    "lastName": "Nash",
    "address": {
      "address1": "Vanderbilt Avenue",
      "city": "Westwood",
      "state": "Pennsylvania",
      "zipCode": 15207
    }
  },
  {
    "email": "gordonnash@fitcore.com",
    "password": "Vermont13406",
    "firstName": "Annabelle",
    "lastName": "Chan",
    "address": {
      "address1": "Luquer Street",
      "city": "Glenville",
      "state": "North Dakota",
      "zipCode": 82600
    }
  },
  {
    "email": "annabellechan@fitcore.com",
    "password": "Missouri18478",
    "firstName": "Bentley",
    "lastName": "Shaw",
    "address": {
      "address1": "Vanderveer Street",
      "city": "Muse",
      "state": "Puerto Rico",
      "zipCode": 54237
    }
  },
  {
    "email": "bentleyshaw@fitcore.com",
    "password": "New York12592",
    "firstName": "Benita",
    "lastName": "David",
    "address": {
      "address1": "Jefferson Street",
      "city": "Cumminsville",
      "state": "Georgia",
      "zipCode": 67367
    }
  },
  {
    "email": "benitadavid@fitcore.com",
    "password": "New Mexico19646",
    "firstName": "Johnson",
    "lastName": "Farmer",
    "address": {
      "address1": "Cove Lane",
      "city": "Sandston",
      "state": "Washington",
      "zipCode": 15667
    }
  },
  {
    "email": "johnsonfarmer@fitcore.com",
    "password": "Oklahoma13911",
    "firstName": "Wiley",
    "lastName": "Stephenson",
    "address": {
      "address1": "Fleet Walk",
      "city": "Sexton",
      "state": "Indiana",
      "zipCode": 24564
    }
  },
  {
    "email": "wileystephenson@fitcore.com",
    "password": "Northern Mariana Islands14837",
    "firstName": "Olivia",
    "lastName": "Harrington",
    "address": {
      "address1": "Etna Street",
      "city": "Cavalero",
      "state": "Palau",
      "zipCode": 64844
    }
  },
  {
    "email": "oliviaharrington@fitcore.com",
    "password": "New Jersey15354",
    "firstName": "Turner",
    "lastName": "Kelley",
    "address": {
      "address1": "Anna Court",
      "city": "Coleville",
      "state": "Minnesota",
      "zipCode": 19003
    }
  },
  {
    "email": "turnerkelley@fitcore.com",
    "password": "Maine19209",
    "firstName": "Claudine",
    "lastName": "Castillo",
    "address": {
      "address1": "Scholes Street",
      "city": "Navarre",
      "state": "Federated States Of Micronesia",
      "zipCode": 34992
    }
  },
  {
    "email": "claudinecastillo@fitcore.com",
    "password": "Alabama17432",
    "firstName": "Denise",
    "lastName": "Gallagher",
    "address": {
      "address1": "Temple Court",
      "city": "Lorraine",
      "state": "Wisconsin",
      "zipCode": 51245
    }
  },
  {
    "email": "denisegallagher@fitcore.com",
    "password": "New Hampshire11435",
    "firstName": "Greer",
    "lastName": "Gordon",
    "address": {
      "address1": "Lefferts Place",
      "city": "Blanco",
      "state": "Utah",
      "zipCode": 25589
    }
  },
  {
    "email": "greergordon@fitcore.com",
    "password": "Hawaii16264",
    "firstName": "Tammie",
    "lastName": "Lewis",
    "address": {
      "address1": "Livingston Street",
      "city": "Wikieup",
      "state": "Virgin Islands",
      "zipCode": 54214
    }
  },
  {
    "email": "tammielewis@fitcore.com",
    "password": "Oregon13876",
    "firstName": "Ruth",
    "lastName": "Morrison",
    "address": {
      "address1": "Dewitt Avenue",
      "city": "Turah",
      "state": "Arkansas",
      "zipCode": 60302
    }
  },
  {
    "email": "ruthmorrison@fitcore.com",
    "password": "Kentucky11613",
    "firstName": "Ana",
    "lastName": "Garrison",
    "address": {
      "address1": "Taaffe Place",
      "city": "Driftwood",
      "state": "Virginia",
      "zipCode": 46453
    }
  },
  {
    "email": "anagarrison@fitcore.com",
    "password": "Wyoming17436",
    "firstName": "Harrison",
    "lastName": "Burnett",
    "address": {
      "address1": "Campus Road",
      "city": "Delshire",
      "state": "District Of Columbia",
      "zipCode": 61309
    }
  },
  {
    "email": "harrisonburnett@fitcore.com",
    "password": "South Dakota16779",
    "firstName": "Ivy",
    "lastName": "Matthews",
    "address": {
      "address1": "Sullivan Street",
      "city": "Albrightsville",
      "state": "Alaska",
      "zipCode": 59538
    }
  },
  {
    "email": "ivymatthews@fitcore.com",
    "password": "Montana19890",
    "firstName": "Kelly",
    "lastName": "Leon",
    "address": {
      "address1": "Pioneer Street",
      "city": "Kidder",
      "state": "Delaware",
      "zipCode": 38244
    }
  },
  {
    "email": "kellyleon@fitcore.com",
    "password": "Iowa15013",
    "firstName": "Burnett",
    "lastName": "Campbell",
    "address": {
      "address1": "Krier Place",
      "city": "Chestnut",
      "state": "Texas",
      "zipCode": 10829
    }
  },
  {
    "email": "burnettcampbell@fitcore.com",
    "password": "Arizona12392",
    "firstName": "Rutledge",
    "lastName": "Hunter",
    "address": {
      "address1": "Tiffany Place",
      "city": "Orovada",
      "state": "South Carolina",
      "zipCode": 54934
    }
  },
  {
    "email": "rutledgehunter@fitcore.com",
    "password": "Massachusetts10129",
    "firstName": "Talley",
    "lastName": "Fields",
    "address": {
      "address1": "Berriman Street",
      "city": "Shawmut",
      "state": "Colorado",
      "zipCode": 42103
    }
  },
  {
    "email": "talleyfields@fitcore.com",
    "password": "Nebraska15252",
    "firstName": "Winters",
    "lastName": "Willis",
    "address": {
      "address1": "Mayfair Drive",
      "city": "Hebron",
      "state": "Ohio",
      "zipCode": 17413
    }
  },
  {
    "email": "winterswillis@fitcore.com",
    "password": "Marshall Islands12883",
    "firstName": "Watson",
    "lastName": "Beasley",
    "address": {
      "address1": "Monument Walk",
      "city": "Darbydale",
      "state": "North Carolina",
      "zipCode": 10331
    }
  },
  {
    "email": "watsonbeasley@fitcore.com",
    "password": "Tennessee19788",
    "firstName": "Camille",
    "lastName": "Mccormick",
    "address": {
      "address1": "Winthrop Street",
      "city": "Topaz",
      "state": "Connecticut",
      "zipCode": 71143
    }
  },
  {
    "email": "camillemccormick@fitcore.com",
    "password": "Guam10539",
    "firstName": "Ophelia",
    "lastName": "Clark",
    "address": {
      "address1": "Schermerhorn Street",
      "city": "Camptown",
      "state": "Kansas",
      "zipCode": 49030
    }
  },
  {
    "email": "opheliaclark@fitcore.com",
    "password": "Louisiana16658",
    "firstName": "Amalia",
    "lastName": "Gamble",
    "address": {
      "address1": "Imlay Street",
      "city": "Kapowsin",
      "state": "Illinois",
      "zipCode": 29009
    }
  },
  {
    "email": "amaliagamble@fitcore.com",
    "password": "Nevada18948",
    "firstName": "Le",
    "lastName": "Cantrell",
    "address": {
      "address1": "Montague Terrace",
      "city": "Wakarusa",
      "state": "Rhode Island",
      "zipCode": 19565
    }
  },
  {
    "email": "lecantrell@fitcore.com",
    "password": "Florida14620",
    "firstName": "Dollie",
    "lastName": "Turner",
    "address": {
      "address1": "Hill Street",
      "city": "Strykersville",
      "state": "Maryland",
      "zipCode": 50660
    }
  },
  {
    "email": "dollieturner@fitcore.com",
    "password": "Michigan11230",
    "firstName": "Carter",
    "lastName": "White",
    "address": {
      "address1": "Grove Street",
      "city": "Bowden",
      "state": "West Virginia",
      "zipCode": 78690
    }
  },
  {
    "email": "carterwhite@fitcore.com",
    "password": "California18300",
    "firstName": "Diaz",
    "lastName": "Hardy",
    "address": {
      "address1": "Withers Street",
      "city": "Umapine",
      "state": "American Samoa",
      "zipCode": 47887
    }
  },
  {
    "email": "diazhardy@fitcore.com",
    "password": "Mississippi11938",
    "firstName": "Ortiz",
    "lastName": "Gross",
    "address": {
      "address1": "Moultrie Street",
      "city": "Edenburg",
      "state": "Pennsylvania",
      "zipCode": 80326
    }
  },
  {
    "email": "ortizgross@fitcore.com",
    "password": "Vermont16024",
    "firstName": "Manning",
    "lastName": "Green",
    "address": {
      "address1": "Voorhies Avenue",
      "city": "Bakersville",
      "state": "North Dakota",
      "zipCode": 13092
    }
  },
  {
    "email": "manninggreen@fitcore.com",
    "password": "Missouri11201",
    "firstName": "Rosemary",
    "lastName": "Gibson",
    "address": {
      "address1": "Harway Avenue",
      "city": "Germanton",
      "state": "Puerto Rico",
      "zipCode": 66436
    }
  },
  {
    "email": "rosemarygibson@fitcore.com",
    "password": "New York16021",
    "firstName": "Marian",
    "lastName": "Huff",
    "address": {
      "address1": "Townsend Street",
      "city": "Edgewater",
      "state": "Georgia",
      "zipCode": 85986
    }
  },
  {
    "email": "marianhuff@fitcore.com",
    "password": "New Mexico11432",
    "firstName": "Ginger",
    "lastName": "Valencia",
    "address": {
      "address1": "Just Court",
      "city": "Drytown",
      "state": "Washington",
      "zipCode": 32738
    }
  },
  {
    "email": "gingervalencia@fitcore.com",
    "password": "Oklahoma10805",
    "firstName": "Maura",
    "lastName": "Blevins",
    "address": {
      "address1": "Georgia Avenue",
      "city": "Zortman",
      "state": "Indiana",
      "zipCode": 77934
    }
  }
]

module.exports = data
