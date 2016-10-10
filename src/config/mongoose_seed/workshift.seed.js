const mongoDB = require('../../config/mongoose.collections.json')

// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': mongoDB.Model.Workshift,
        'documents': [
            {
                "startDate": "2016-04-12 01:50:12",
                "endDate": "2014-12-24 08:38:28",
                "day": "Tuesday",
                "user": "57fb0d824cad8c4ad1b58757",
                "createdBy": "57fb0d8238ad6faec7efc0bb"
            },
            {
                "startDate": "2014-07-16 08:30:00",
                "endDate": "2015-09-16 06:49:15",
                "day": "Sunday",
                "user": "57fb0d826020ba42f5af47e5",
                "createdBy": "57fb0d821e0a9a0db185c6ff"
            },
            {
                "startDate": "2014-09-11 03:16:50",
                "endDate": "2016-05-11 07:26:04",
                "day": "Saturday",
                "user": "57fb0d826bf1ab0280da6265",
                "createdBy": "57fb0d8256bee49327aad2bb"
            },
            {
                "startDate": "2014-02-22 06:48:18",
                "endDate": "2015-10-13 04:33:58",
                "day": "Tuesday",
                "user": "57fb0d829ac1fbfa6b58d4ba",
                "createdBy": "57fb0d82495db2a5d46e4aaa"
            },
            {
                "startDate": "2014-04-04 01:47:48",
                "endDate": "2015-01-03 12:55:59",
                "day": "Monday",
                "user": "57fb0d82f95782097be90c97",
                "createdBy": "57fb0d82e372750941500d31"
            },
            {
                "startDate": "2016-08-11 05:21:26",
                "endDate": "2014-09-19 08:26:23",
                "day": "Wednesday",
                "user": "57fb0d82b67f7663162d6dc4",
                "createdBy": "57fb0d82047ccec18bf257a5"
            },
            {
                "startDate": "2016-05-03 09:49:09",
                "endDate": "2016-06-09 03:52:37",
                "day": "Saturday",
                "user": "57fb0d82b5c49eddaf2a2764",
                "createdBy": "57fb0d82bfe58331333ac328"
            },
            {
                "startDate": "2014-09-24 05:47:34",
                "endDate": "2014-11-19 12:10:11",
                "day": "Wednesday",
                "user": "57fb0d82b98e84b7e4155840",
                "createdBy": "57fb0d82022f0269d3e3e3c5"
            },
            {
                "startDate": "2014-07-28 04:09:04",
                "endDate": "2014-08-29 06:13:05",
                "day": "Friday",
                "user": "57fb0d82e1940091ca00ffe8",
                "createdBy": "57fb0d8270c4f94cabba2298"
            },
            {
                "startDate": "2014-02-09 04:22:41",
                "endDate": "2015-01-27 03:34:45",
                "day": "Wednesday",
                "user": "57fb0d826c12642ef90452bf",
                "createdBy": "57fb0d823a10df528aff9d1e"
            },
            {
                "startDate": "2015-04-30 11:41:52",
                "endDate": "2016-07-11 02:55:14",
                "day": "Sunday",
                "user": "57fb0d82077eaf2a13fe7614",
                "createdBy": "57fb0d82c4d2a4a5ef04bfc0"
            },
            {
                "startDate": "2016-05-17 04:26:11",
                "endDate": "2014-07-22 12:39:14",
                "day": "Wednesday",
                "user": "57fb0d82f473e863b6409a44",
                "createdBy": "57fb0d826eac36347d81b66a"
            },
            {
                "startDate": "2015-01-31 01:34:15",
                "endDate": "2015-09-28 09:11:44",
                "day": "Friday",
                "user": "57fb0d8288f20d2ded08183d",
                "createdBy": "57fb0d829b9e61b3e6136d32"
            },
            {
                "startDate": "2015-08-12 04:11:20",
                "endDate": "2015-10-03 09:01:15",
                "day": "Monday",
                "user": "57fb0d82bd4b2c65940572ca",
                "createdBy": "57fb0d82cc5d86f5b4e90853"
            },
            {
                "startDate": "2016-09-25 04:20:14",
                "endDate": "2015-03-22 04:29:00",
                "day": "Sunday",
                "user": "57fb0d826d6f6cf867039ec6",
                "createdBy": "57fb0d82afae9131877e233d"
            },
            {
                "startDate": "2016-03-22 03:22:01",
                "endDate": "2014-11-09 04:15:45",
                "day": "Saturday",
                "user": "57fb0d82daa3a825f1ee6073",
                "createdBy": "57fb0d82dbb9663bf371a37a"
            },
            {
                "startDate": "2014-01-04 02:23:54",
                "endDate": "2015-06-04 01:18:28",
                "day": "Saturday",
                "user": "57fb0d82c5c17dfe96dcc8e6",
                "createdBy": "57fb0d8221d2c812905dbf10"
            },
            {
                "startDate": "2016-05-13 05:20:30",
                "endDate": "2016-06-20 05:04:50",
                "day": "Sunday",
                "user": "57fb0d82421da308bb03f168",
                "createdBy": "57fb0d82b31fdb3fc58af6b8"
            },
            {
                "startDate": "2014-01-27 12:43:42",
                "endDate": "2016-02-03 05:18:08",
                "day": "Sunday",
                "user": "57fb0d821d71f18a29108da1",
                "createdBy": "57fb0d82398cca66bca3e917"
            },
            {
                "startDate": "2016-09-13 09:07:56",
                "endDate": "2016-07-04 06:35:06",
                "day": "Saturday",
                "user": "57fb0d82d3fc1b8a8a510c7a",
                "createdBy": "57fb0d8220e7579cd9f083e8"
            },
            {
                "startDate": "2016-08-19 02:45:32",
                "endDate": "2014-01-23 07:28:59",
                "day": "Thursday",
                "user": "57fb0d8236e902255bb16744",
                "createdBy": "57fb0d826eeaa92e69cf77c5"
            },
            {
                "startDate": "2015-09-08 02:08:21",
                "endDate": "2016-02-28 03:39:10",
                "day": "Saturday",
                "user": "57fb0d82c5b1c5fe768cb934",
                "createdBy": "57fb0d8277f47b3e5c865a49"
            },
            {
                "startDate": "2015-06-24 09:41:37",
                "endDate": "2015-12-31 08:51:55",
                "day": "Monday",
                "user": "57fb0d82eb0bfc9ce257e193",
                "createdBy": "57fb0d826871b19e27e80bdc"
            },
            {
                "startDate": "2014-12-23 09:17:08",
                "endDate": "2015-09-25 08:33:35",
                "day": "Wednesday",
                "user": "57fb0d822ad495b94bf67846",
                "createdBy": "57fb0d82b2ddabada5f04f1a"
            },
            {
                "startDate": "2016-08-15 07:23:41",
                "endDate": "2015-04-18 02:27:42",
                "day": "Monday",
                "user": "57fb0d82fd00c651bdbebebe",
                "createdBy": "57fb0d821f51e72f634ec306"
            },
            {
                "startDate": "2015-12-22 12:50:23",
                "endDate": "2015-09-07 04:58:29",
                "day": "Monday",
                "user": "57fb0d82ba6f495674dc3d0e",
                "createdBy": "57fb0d8296abac4d883c011e"
            },
            {
                "startDate": "2016-08-07 11:11:46",
                "endDate": "2014-03-26 10:29:40",
                "day": "Sunday",
                "user": "57fb0d82c26a32bb51424eac",
                "createdBy": "57fb0d82ebe29f2836c0ff27"
            },
            {
                "startDate": "2015-04-20 10:49:12",
                "endDate": "2016-09-05 09:13:51",
                "day": "Saturday",
                "user": "57fb0d825f40a2fbb9c0f500",
                "createdBy": "57fb0d823b86e5c435b3bd85"
            },
            {
                "startDate": "2014-08-23 01:11:05",
                "endDate": "2014-05-09 02:05:56",
                "day": "Thursday",
                "user": "57fb0d82ef9ed0282cabfd1f",
                "createdBy": "57fb0d821c908ba8aad40f61"
            },
            {
                "startDate": "2014-07-27 01:51:00",
                "endDate": "2016-08-30 03:11:31",
                "day": "Saturday",
                "user": "57fb0d827d985fb909c4cdba",
                "createdBy": "57fb0d82958437e9e331dbe7"
            },
            {
                "startDate": "2014-11-09 10:51:31",
                "endDate": "2016-01-07 09:03:55",
                "day": "Wednesday",
                "user": "57fb0d8210a7c88e122848e5",
                "createdBy": "57fb0d82cd247d1ed161ae61"
            },
            {
                "startDate": "2014-04-01 04:34:41",
                "endDate": "2015-10-28 07:43:40",
                "day": "Saturday",
                "user": "57fb0d825118395c3c6dce8c",
                "createdBy": "57fb0d82ff768c13129c208a"
            },
            {
                "startDate": "2014-07-11 05:37:36",
                "endDate": "2016-06-27 05:07:09",
                "day": "Friday",
                "user": "57fb0d82cb51414eb8d47ecc",
                "createdBy": "57fb0d822d10b465934b0168"
            },
            {
                "startDate": "2016-06-15 06:48:09",
                "endDate": "2015-10-22 04:53:55",
                "day": "Saturday",
                "user": "57fb0d82a6cc62b22670a9bc",
                "createdBy": "57fb0d8220919ee527a50873"
            },
            {
                "startDate": "2014-03-06 02:17:18",
                "endDate": "2016-01-04 04:10:37",
                "day": "Saturday",
                "user": "57fb0d82b090e1aff6d69083",
                "createdBy": "57fb0d826456f7148e6a675d"
            },
            {
                "startDate": "2014-01-02 09:36:52",
                "endDate": "2016-09-18 02:36:13",
                "day": "Wednesday",
                "user": "57fb0d82d55dca6a9dc4b6c0",
                "createdBy": "57fb0d82cf70229b6f709e2e"
            },
            {
                "startDate": "2015-12-10 12:14:43",
                "endDate": "2015-10-12 11:29:33",
                "day": "Sunday",
                "user": "57fb0d821c357ec53ae9ac40",
                "createdBy": "57fb0d821241485e2fc189c6"
            },
            {
                "startDate": "2015-11-25 01:13:41",
                "endDate": "2015-07-21 09:22:06",
                "day": "Friday",
                "user": "57fb0d824dddea6445abf1d9",
                "createdBy": "57fb0d82f4b13d8556fb0bc8"
            },
            {
                "startDate": "2015-02-06 11:05:53",
                "endDate": "2016-01-01 01:04:56",
                "day": "Friday",
                "user": "57fb0d82f1814d202c26aec9",
                "createdBy": "57fb0d8212e3ebfa5d8aa3ae"
            },
            {
                "startDate": "2014-06-13 11:13:45",
                "endDate": "2014-04-11 09:03:12",
                "day": "Monday",
                "user": "57fb0d820fa8b8c539000c37",
                "createdBy": "57fb0d82c10005dd608da2e3"
            },
            {
                "startDate": "2014-07-23 09:43:07",
                "endDate": "2015-02-12 05:18:42",
                "day": "Thursday",
                "user": "57fb0d82e01ee0a0a69ca74a",
                "createdBy": "57fb0d82e8ebc5e2025cb99c"
            },
            {
                "startDate": "2015-05-16 09:48:04",
                "endDate": "2015-02-01 10:39:22",
                "day": "Thursday",
                "user": "57fb0d8217d52fbcf761009a",
                "createdBy": "57fb0d8203c1bb7af7432f91"
            },
            {
                "startDate": "2014-05-09 09:55:05",
                "endDate": "2015-02-07 05:37:14",
                "day": "Wednesday",
                "user": "57fb0d820665a3c4e1f690f3",
                "createdBy": "57fb0d8219ac672c0de1ba69"
            },
            {
                "startDate": "2014-09-07 05:59:48",
                "endDate": "2015-05-28 06:25:32",
                "day": "Saturday",
                "user": "57fb0d8275119a3caeee1605",
                "createdBy": "57fb0d82d2b49d8a8f6eaee8"
            },
            {
                "startDate": "2015-05-11 11:15:57",
                "endDate": "2014-04-05 06:33:17",
                "day": "Wednesday",
                "user": "57fb0d82a839fc5a178b3144",
                "createdBy": "57fb0d82059b778f9265602e"
            },
            {
                "startDate": "2016-07-04 06:09:46",
                "endDate": "2014-05-18 07:32:08",
                "day": "Thursday",
                "user": "57fb0d82cd8dce15b6f08bfc",
                "createdBy": "57fb0d82cc8f35c5cd50d284"
            },
            {
                "startDate": "2015-06-10 02:50:27",
                "endDate": "2014-02-25 05:16:21",
                "day": "Saturday",
                "user": "57fb0d821825bc1d993bc052",
                "createdBy": "57fb0d82fa1cb0595a99a103"
            },
            {
                "startDate": "2014-01-04 09:01:45",
                "endDate": "2014-09-17 06:56:04",
                "day": "Monday",
                "user": "57fb0d824580e62d756ea3f5",
                "createdBy": "57fb0d82d2501a654b0ea016"
            },
            {
                "startDate": "2014-09-30 06:04:39",
                "endDate": "2016-05-30 11:42:56",
                "day": "Wednesday",
                "user": "57fb0d82d26d5c0f3284e010",
                "createdBy": "57fb0d8207579414b8175719"
            },
            {
                "startDate": "2014-12-24 02:39:45",
                "endDate": "2014-05-26 11:47:29",
                "day": "Monday",
                "user": "57fb0d82d66c66627d77e84e",
                "createdBy": "57fb0d820685320cf194f8bf"
            },
            {
                "startDate": "2014-11-07 12:28:52",
                "endDate": "2016-06-30 02:35:26",
                "day": "Friday",
                "user": "57fb0d825a08a4d6a6b2484a",
                "createdBy": "57fb0d825efd4360e48b509d"
            },
            {
                "startDate": "2015-04-08 06:55:37",
                "endDate": "2014-02-01 02:07:24",
                "day": "Monday",
                "user": "57fb0d82450fb1be3a320434",
                "createdBy": "57fb0d824302b87e4e4a6869"
            },
            {
                "startDate": "2014-10-21 04:27:00",
                "endDate": "2014-05-07 02:53:59",
                "day": "Monday",
                "user": "57fb0d82a10dcf7160dca1fb",
                "createdBy": "57fb0d82a41d3eeba612435b"
            },
            {
                "startDate": "2015-05-11 12:23:13",
                "endDate": "2016-05-17 07:33:29",
                "day": "Saturday",
                "user": "57fb0d8225bc2779031d41dd",
                "createdBy": "57fb0d827bb12d71e77fe493"
            },
            {
                "startDate": "2015-10-27 07:18:46",
                "endDate": "2014-03-02 02:52:57",
                "day": "Tuesday",
                "user": "57fb0d8231e994e7ec95976d",
                "createdBy": "57fb0d82996c1e3e858e8648"
            },
            {
                "startDate": "2016-05-29 08:26:00",
                "endDate": "2016-05-17 11:53:43",
                "day": "Saturday",
                "user": "57fb0d823290e219347daf96",
                "createdBy": "57fb0d8201bcfc7d6fa33e3a"
            },
            {
                "startDate": "2016-05-10 02:58:42",
                "endDate": "2015-12-01 05:50:10",
                "day": "Thursday",
                "user": "57fb0d82be9a54906b978604",
                "createdBy": "57fb0d824710cf5a063928cd"
            },
            {
                "startDate": "2014-11-20 04:34:39",
                "endDate": "2014-01-24 05:22:59",
                "day": "Sunday",
                "user": "57fb0d821246f18bd223c66d",
                "createdBy": "57fb0d8209cd2abe20a3533c"
            },
            {
                "startDate": "2015-04-01 11:32:13",
                "endDate": "2014-01-31 07:56:47",
                "day": "Sunday",
                "user": "57fb0d8219778ad861d1692c",
                "createdBy": "57fb0d825b21b18a1d0a79b1"
            },
            {
                "startDate": "2016-08-03 11:12:47",
                "endDate": "2015-06-22 01:59:46",
                "day": "Tuesday",
                "user": "57fb0d82a2dffac553eeee69",
                "createdBy": "57fb0d82d1c09bac7dafaa9d"
            },
            {
                "startDate": "2015-06-07 05:14:00",
                "endDate": "2014-08-30 06:00:01",
                "day": "Thursday",
                "user": "57fb0d82f2c13b2b4140c5ea",
                "createdBy": "57fb0d826f392619ffc5f7b0"
            },
            {
                "startDate": "2014-08-14 03:39:55",
                "endDate": "2015-11-30 08:12:10",
                "day": "Thursday",
                "user": "57fb0d826786fa2c6490eca3",
                "createdBy": "57fb0d821e11b873a62da9cf"
            },
            {
                "startDate": "2015-03-26 04:20:36",
                "endDate": "2014-10-18 04:50:01",
                "day": "Wednesday",
                "user": "57fb0d82d250d74cb52b9daa",
                "createdBy": "57fb0d8282f8380c3517fc94"
            },
            {
                "startDate": "2015-12-20 05:35:20",
                "endDate": "2016-04-23 10:04:39",
                "day": "Monday",
                "user": "57fb0d8287f75a61c28ba6e6",
                "createdBy": "57fb0d828bd5d5f2254ad28f"
            },
            {
                "startDate": "2015-10-05 07:50:00",
                "endDate": "2014-06-17 08:46:44",
                "day": "Sunday",
                "user": "57fb0d829e17ae3d4610b509",
                "createdBy": "57fb0d82e9960e93a2d0e9a9"
            },
            {
                "startDate": "2014-01-27 01:36:34",
                "endDate": "2014-07-13 08:46:13",
                "day": "Tuesday",
                "user": "57fb0d82dbfb84ed11b96049",
                "createdBy": "57fb0d82213a89802c448876"
            },
            {
                "startDate": "2015-12-20 05:11:02",
                "endDate": "2015-06-25 09:48:13",
                "day": "Monday",
                "user": "57fb0d82113cb1e6030b1b32",
                "createdBy": "57fb0d82aa5dfb56430fd9b2"
            },
            {
                "startDate": "2016-03-24 10:35:09",
                "endDate": "2015-07-07 09:20:26",
                "day": "Friday",
                "user": "57fb0d82ba94177f272f32c7",
                "createdBy": "57fb0d82f665e3e1110a0868"
            },
            {
                "startDate": "2014-06-24 01:29:02",
                "endDate": "2016-03-05 08:48:03",
                "day": "Sunday",
                "user": "57fb0d82d0b1af2c5b097c9e",
                "createdBy": "57fb0d824d9129e2db804317"
            },
            {
                "startDate": "2015-07-11 07:49:36",
                "endDate": "2016-01-29 10:59:16",
                "day": "Thursday",
                "user": "57fb0d82de3edb299ce87bba",
                "createdBy": "57fb0d82ae248904c604070b"
            },
            {
                "startDate": "2014-12-30 02:56:07",
                "endDate": "2015-02-01 06:55:31",
                "day": "Wednesday",
                "user": "57fb0d8298740a4f93d6a95a",
                "createdBy": "57fb0d828aa1c44b07eaf4af"
            },
            {
                "startDate": "2014-12-21 03:03:01",
                "endDate": "2014-02-24 11:55:42",
                "day": "Tuesday",
                "user": "57fb0d823156ce0f8af1386b",
                "createdBy": "57fb0d82954365d756422a59"
            },
            {
                "startDate": "2015-05-07 01:56:01",
                "endDate": "2016-05-23 01:47:07",
                "day": "Friday",
                "user": "57fb0d825fcfbe83dc30e645",
                "createdBy": "57fb0d822d7a1b36ae5202b5"
            },
            {
                "startDate": "2016-03-08 11:01:46",
                "endDate": "2016-04-19 09:48:32",
                "day": "Friday",
                "user": "57fb0d82e0efeb4e1b2d0356",
                "createdBy": "57fb0d82bfd79180d0af2154"
            },
            {
                "startDate": "2016-07-09 03:31:03",
                "endDate": "2014-02-28 04:36:43",
                "day": "Tuesday",
                "user": "57fb0d821a53423bdc1d8d43",
                "createdBy": "57fb0d8232857a3ccc40ff7e"
            },
            {
                "startDate": "2016-09-21 09:17:24",
                "endDate": "2015-06-14 05:31:43",
                "day": "Friday",
                "user": "57fb0d82512dd6adde326841",
                "createdBy": "57fb0d820763370bb672fee4"
            },
            {
                "startDate": "2014-01-12 04:23:05",
                "endDate": "2014-07-30 12:20:13",
                "day": "Monday",
                "user": "57fb0d82c77130def3d0954c",
                "createdBy": "57fb0d824c1cae760c5de31e"
            },
            {
                "startDate": "2015-11-06 11:02:30",
                "endDate": "2015-11-19 08:25:04",
                "day": "Monday",
                "user": "57fb0d82b647bfa7f0ff4bb4",
                "createdBy": "57fb0d8292b3265e7f94311b"
            },
            {
                "startDate": "2014-10-01 02:21:08",
                "endDate": "2014-04-25 04:16:49",
                "day": "Saturday",
                "user": "57fb0d82247be257ce6f67a8",
                "createdBy": "57fb0d828052bfeed85f3089"
            },
            {
                "startDate": "2016-01-26 07:18:18",
                "endDate": "2015-05-16 01:02:43",
                "day": "Friday",
                "user": "57fb0d8298e3e29c0f133456",
                "createdBy": "57fb0d829bbffb3057b9a6d8"
            },
            {
                "startDate": "2015-04-20 07:14:11",
                "endDate": "2014-02-24 12:49:28",
                "day": "Thursday",
                "user": "57fb0d821f7cc70f51f9c965",
                "createdBy": "57fb0d82889cc439aed7cfdf"
            },
            {
                "startDate": "2015-02-19 08:39:46",
                "endDate": "2015-12-30 05:51:31",
                "day": "Monday",
                "user": "57fb0d829add495b1b3b9f29",
                "createdBy": "57fb0d82d89a84cc8cd16bdf"
            },
            {
                "startDate": "2015-06-14 12:12:03",
                "endDate": "2016-08-23 04:43:33",
                "day": "Monday",
                "user": "57fb0d82713f5921ae56103c",
                "createdBy": "57fb0d828639138c206a0816"
            },
            {
                "startDate": "2014-06-21 05:44:18",
                "endDate": "2014-01-30 08:22:11",
                "day": "Saturday",
                "user": "57fb0d82551b954e45eb0725",
                "createdBy": "57fb0d8298d21d779d4b855d"
            },
            {
                "startDate": "2014-03-06 08:16:58",
                "endDate": "2014-06-21 01:16:32",
                "day": "Saturday",
                "user": "57fb0d82296ca980d0b56ed5",
                "createdBy": "57fb0d824f9ee2888ebbd98a"
            },
            {
                "startDate": "2014-11-04 01:24:41",
                "endDate": "2014-05-20 12:56:06",
                "day": "Thursday",
                "user": "57fb0d82dd7fff0a04c6a0d8",
                "createdBy": "57fb0d825e4e15048fab1b44"
            },
            {
                "startDate": "2016-02-28 05:30:05",
                "endDate": "2015-07-03 02:28:03",
                "day": "Friday",
                "user": "57fb0d826692284dde5a1929",
                "createdBy": "57fb0d82627bc699dbbb4b89"
            },
            {
                "startDate": "2014-08-05 12:36:04",
                "endDate": "2016-09-26 06:44:26",
                "day": "Friday",
                "user": "57fb0d82efbd91abde30abed",
                "createdBy": "57fb0d8246c5e478a200926e"
            },
            {
                "startDate": "2015-05-23 09:35:42",
                "endDate": "2016-08-10 03:18:46",
                "day": "Wednesday",
                "user": "57fb0d82f5669af4bf0dad84",
                "createdBy": "57fb0d82f59ef866e0f6c31e"
            },
            {
                "startDate": "2015-08-27 03:34:48",
                "endDate": "2015-10-22 03:26:35",
                "day": "Wednesday",
                "user": "57fb0d82bc72f09f1b548b03",
                "createdBy": "57fb0d82ca7855186ba07bae"
            },
            {
                "startDate": "2015-01-26 03:31:44",
                "endDate": "2016-03-25 02:26:52",
                "day": "Saturday",
                "user": "57fb0d824da761cdec49e858",
                "createdBy": "57fb0d824b8b6271ba760820"
            },
            {
                "startDate": "2014-08-26 03:13:58",
                "endDate": "2016-09-26 08:25:34",
                "day": "Thursday",
                "user": "57fb0d82291338aa61966ef2",
                "createdBy": "57fb0d822916d6461bff85e1"
            },
            {
                "startDate": "2016-08-26 03:05:17",
                "endDate": "2015-03-06 07:33:15",
                "day": "Sunday",
                "user": "57fb0d8235259d95e336d3dc",
                "createdBy": "57fb0d82ccbb344cac2c527c"
            },
            {
                "startDate": "2015-01-17 09:53:45",
                "endDate": "2014-05-18 08:44:51",
                "day": "Tuesday",
                "user": "57fb0d82917ccb147b48af9f",
                "createdBy": "57fb0d823830cbc45b18a883"
            },
            {
                "startDate": "2014-05-04 07:24:49",
                "endDate": "2014-05-11 04:05:43",
                "day": "Friday",
                "user": "57fb0d82975db0f07d5ece83",
                "createdBy": "57fb0d8249870c2dda858ddb"
            },
            {
                "startDate": "2014-04-05 07:22:40",
                "endDate": "2015-12-19 08:27:53",
                "day": "Wednesday",
                "user": "57fb0d828600b57ba4f71811",
                "createdBy": "57fb0d8202a5e2c29f9d08f9"
            },
            {
                "startDate": "2014-12-08 07:16:51",
                "endDate": "2015-04-14 04:27:24",
                "day": "Tuesday",
                "user": "57fb0d82704f8089bbd53fa0",
                "createdBy": "57fb0d823e349743dddee246"
            },
            {
                "startDate": "2014-12-01 10:24:48",
                "endDate": "2016-06-05 06:05:41",
                "day": "Monday",
                "user": "57fb0d825d6d025ceb521496",
                "createdBy": "57fb0d821aabd0001e4f5b7c"
            },
            {
                "startDate": "2015-01-28 09:51:18",
                "endDate": "2016-08-04 11:04:28",
                "day": "Monday",
                "user": "57fb0d82b158c8e698a38f4a",
                "createdBy": "57fb0d82f45a41fa3e9c1418"
            },
            {
                "startDate": "2015-06-07 10:34:22",
                "endDate": "2014-05-20 08:50:27",
                "day": "Monday",
                "user": "57fb0d82cf4edcbce63f3710",
                "createdBy": "57fb0d82f8fec9bb6fd54744"
            }
        ]
    }
]

module.exports = data
