var centerLatLng = {
    lat: 12.9716,
    lng: 77.5946,
};

var mapZoom = 5;


let LocationByState = [
	{
        state: 'Karnataka',
        list: [
        	{
                title: 'Coorg',
                coordinate:[14.5203896, 75.7223521],
                description: 'Known as the “Scotland of India”, Coorg is one of the most visited places by nature-lovers. The green hills, rivers, culture, and people make it the most popular destination.',
                popularity: 1,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Gokarna',
                coordinate:[14.5478586, 74.31884099999999],
                description: '',
                popularity: 6,
                statePopularity: 2,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Hampi',
                coordinate:[15.3350132, 76.46002399999999],
                description: '',
                popularity: 7,
                statePopularity: 3,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Chikmagalur',
                coordinate:[13.3161441, 75.7720439],
                description: '',
                popularity: 25,
                statePopularity: 4,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Bengaluru',
                coordinate: [12.9715987, 77.5945627],
                description: "",
                popularity: 27,
                statePopularity: 5,
                nearBy: [
                	'Nandi Hills'
                ],
                idealTime: '',
            },
        ],
    },
    {
        state: 'Kerala',
        list: [
        	{
                title: 'Wayanad',
                coordinate:[11.6853575, 76.1319953],
                description: '',
                popularity: 2,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Varkala',
                coordinate:[8.7378685, 76.71633589999999],
                description: '',
                popularity: 8,
                statePopularity: 2,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Munnar',
                coordinate:[10.0889333, 77.05952479999999],
                description: '',
                popularity: 14,
                statePopularity: 3,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Alleppey',
                coordinate:[9.498066699999999, 76.3388484],
                description: '',
                popularity: 16,
                statePopularity: 4,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Kumarakom',
                coordinate:[9.6175449, 76.430095],
                description: '',
                popularity: 17,
                statePopularity: 5,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Kochi',
                coordinate:[9.9312328, 76.26730409999999],
                description: '',
                popularity: 18,
                statePopularity: 6,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Thekkady',
                coordinate:[9.6031088, 77.161458],
                description: '',
                popularity: 20,
                statePopularity: 7,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Thiruvananthapuram',
                coordinate:[8.5241391, 76.9366376],
                description: '',
                popularity: 21,
                statePopularity: 8,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Thrissur',
                coordinate:[10.5276416, 76.2144349],
                description: '',
                popularity: 29,
                statePopularity: 9,
                nearBy: [],
                idealTime: '',
            },
        ]
    },
    {
        state: 'Tamil Nadu',
        list: [
        	{
                title: 'Kodaikanal',
                coordinate:[10.2381136, 77.4891822],
                description: '',
                popularity: 3,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Ooty',
                coordinate:[11.4102038, 76.6950324],
                description: '',
                popularity: 4,
                statePopularity: 2,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Coonoor',
                coordinate:[11.3530022, 76.7959095],
                description: '',
                popularity: 4,
                statePopularity: 3,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Chennai',
                coordinate:[13.0826802, 80.2707184],
                description: '',
                popularity: 5,
                statePopularity: 4,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Mahabalipuram',
                coordinate:[12.6207821, 80.1944915 ],
                description: '',
                popularity: 9,
                statePopularity: 5,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Tanjore',
                coordinate:[10.7869994, 79.13782739999999],
                description: '',
                popularity: 10,
                statePopularity: 6,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Madurai',
                coordinate:[9.9252007, 78.1197754],
                description: '',
                popularity: 11,
                statePopularity: 7,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Kanchipuram',
                coordinate:[12.818456, 79.6946586],
                description: '',
                popularity: 12,
                statePopularity: 8,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Kanyakumari',
                coordinate:[8.0883064, 77.5384507],
                description: '',
                popularity: 19,
                statePopularity: 9,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Rameswaram',
                coordinate:[9.2876254, 79.31292909999999],
                description: '',
                popularity: 28,
                statePopularity: 10,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Coimbatore',
                coordinate:[11.0168445, 76.9558321],
                description: '',
                popularity: 30,
                statePopularity: 11,
                nearBy: [],
                idealTime: '',
            },
        ]
    },
    {
        state: 'Pondicherry',
        ut: true,
        list: [
	        {
	            title: 'Pondicherry',
	            coordinate:[11.9415915, 79.8083133],
	            description: '',
	            popularity: 13,
	            statePopularity: 1,
	            nearBy: [],
                idealTime: '',
	        },
	    ]
    },
    {
        state: 'Telangana',
        list: [
        	{
                title: 'Hyderabad',
                coordinate:[17.385044, 78.486671],
                description: '',
                popularity: 22,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Warangal',
                coordinate:[17.9689008, 79.59405439999999],
                description: '',
                popularity: 13,
                statePopularity: 2,
                nearBy: [],
                idealTime: '',
            },
        ]
    },
    {
        state: 'Andhra Pradesh',
        list: [
        	{
                title: 'Tirupati',
                coordinate:[13.6287557, 79.4191795],
                description: '',
                popularity: 15,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Araku Valley',
                coordinate:[18.3273486, 82.8775218],
                description: '',
                popularity: 24,
                statePopularity: 2,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Gandikota Canyon',
                coordinate:[14.8149269, 78.2862866],
                description: 'Gandikota Grand Canyon',
                popularity: 31,
                statePopularity: 3,
                nearBy: [],
                idealTime: '',
            }
        ]
    },
    {
        state: 'Odisha',
        list: [
        	{
                title: 'Chilka and Bhitarkanika',
                coordinate:[20, 86],
                description: 'Chilka is the largest brackish water lake in India and the largest wintering ground for migratory birds in the Indian sub-continent. Bhitarkanika wildlife sanctuary',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
        ]
    },
    {
        state: 'Goa',
        list: [
        	{
                title: 'Panjim',
                coordinate:[15.4909301, 73.8278496],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },

        ]
    },













    // North India
    {
        state: 'Himachal Pradesh',
        list: [
        	{
                title: 'Khajjiar',
                coordinate:[32.555795, 76.0655834],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [
                	'Dalhousie',

                ],
                idealTime: 'March to May. October to February is a good time to experience snow',
            },
            {
                title: 'Manali',
                coordinate:[32.2431872, 77.1891761],
                description: '',
                popularity: null,
                statePopularity: 2,
                nearBy: [
                	'Kufri',
                ],
                idealTime: 'March to June. December to February is ideal to experience snow.',
            },
            {
                title: 'Shimla',
                coordinate:[31.1048145, 77.17340329999999],
                description: '',
                popularity: null,
                statePopularity: 3,
                nearBy: [
                	'Solang Valley',
                	'Rohtang La',
                	'Bijli Mahadev',
                	'Parvati Valley'
                ],
                idealTime: 'March to June. November to February is ideal for experiencing snowfall.',
            },
            {
                title: 'Kasol',
                coordinate:[32.0099986, 77.3149625],
                description: '',
                popularity: null,
                statePopularity: 4,
                nearBy: [
                	'Chalal Trek',
                	'Kheerganga Waterfall',
                	'Parvati Valley'
                ],
                idealTime: 'April to May and October to November',
            },
            {
                title: 'McLeodganj',
                coordinate:[32.2425758, 76.3212781],
                description: '',
                popularity: null,
                statePopularity: 5,
                nearBy: [
                	'Dharmshala',
                	'Bhagsu Falls',
                	'Triund',
                ],
                idealTime: 'February to June',
            },
        ]
    },
    {
        state: 'Jammu and Kashmir',
        ut: true,
        list: [
        	{
                title: 'Snow Valley',
                coordinate:[34.22488209999999, -117.036177],
                description: 'Most beautiful place on earth situated between the mountain ranges of Pir Panjal and Karakoram',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
            	title: 'Kashmir Circuit',
                coordinate:[32.7293884, 74.8654689],
                description: 'Pahalgam, Sonmarg, Gulmarg, and Srinagar',
                popularity: null,
                statePopularity: 2,
                nearBy: [],
                idealTime: '',
            }
        ]
    },
    {
    	state: 'Ladakh',
    	ut: true,
    	list: [
    		{
                title: 'Leh',
                coordinate:[34.1525864, 77.57705349999999],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'March to August. December to February is a good time to enjoy snow',
            },
    	]
    },
    {
        state: 'Uttarakhand',
        list: [
        	{
                title: 'Pithoragarh',
                coordinate:[9.5828604, 80.2181884],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Valley of Flowers',
                coordinate:[30.72804, 79.605303],
                description: '',
                popularity: null,
                statePopularity: 2,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Mussoorie',
                coordinate:[30.4597892, 78.0643723],
                description: '',
                popularity: null,
                statePopularity: 3,
                nearBy: [
                	'Dehradun',
                	'Lal Tibba Scenic Point',
                	'Kempty Falls',

                ],
                idealTime: 'March to June. December to February is ideal to experience snow.',
            },
            {
                title: 'Jim Corbett',
                coordinate:[29.5300138, 78.7746603],
                description: 'Jim Corbett National Park',
                popularity: null,
                statePopularity: 4,
                nearBy: [
                	'Corbett Waterfall',
                	'Jim Corbett National Park',
                ],
                idealTime: 'November to February',
            },
            {
                title: 'Rishikesh',
                coordinate:[30.0869281, 78.2676116],
                description: '',
                popularity: null,
                statePopularity: 5,
                nearBy: [
                	'Haridwar',
                	'Har ki Pauri Ghat',
                	'Mansa Devi Temple',
                ],
                idealTime: 'March to June and October to November',
            },
            {
                title: 'Nainital',
                coordinate:[29.3919202, 79.4542033],
                description: '',
                popularity: null,
                statePopularity: 6,
                nearBy: [],
                idealTime: 'March to June. Late November to February is a good time to experience snow and winter carnival',
            },
            {
                title: 'Auli',
                coordinate:[30.949417, 77.7478028],
                description: '',
                popularity: null,
                statePopularity: 7,
                nearBy: [],
                idealTime: 'April to June. December to February is ideal for skiing.',
            },
        ]
    },
    {
        state: 'Rajasthan',
        list: [
        	{
                title: 'Jaipur',
                coordinate:[26.9124336, 75.7872709],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'October to March',
            },
            {
                title: 'Udaipur',
                coordinate:[24.585445, 73.712479],
                description: '',
                popularity: null,
                statePopularity: 2,
                nearBy: [],
                idealTime: 'September to March',
            },
            {
                title: 'Jaisalmer',
                coordinate:[26.9157487, 70.9083443],
                description: '',
                popularity: null,
                statePopularity: 3,
                nearBy: [],
                idealTime: 'October to March',
            },
            {
                title: 'Pushkar',
                coordinate:[26.4885822, 74.5509422],
                description: '',
                popularity: null,
                statePopularity: 4,
                nearBy: [],
                idealTime: 'November to March. October to November is the camel fair',
            },
            {
                title: 'Ranthambore',
                coordinate:[26.0173274, 76.5025742],
                description: '',
                popularity: null,
                statePopularity: 5,
                nearBy: [],
                idealTime: 'October to April',
            },
        ]
    },
    {
        state: 'Punjab',
        list: [
        	{
                title: 'Amritsar',
                coordinate:[31.6339793, 74.8722642],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [
                	'Jallianwala Bagh',
                	'Golden Temple'
                ],
                idealTime: 'October to March',
            },
            {
                title: 'Chandigarh',
                coordinate:[],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'October to March',
            },
        ]
    },
    {
        state: 'Chandigarh',
        ut: true,
        list: [
            {
                title: 'Chandigarh',
                coordinate:[30.7333148, 76.7794179],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'October to March',
            },
        ]
    },
    {
        state: 'Uttar Pradesh',
        list: [
        	{
                title: 'Varanasi',
                coordinate:[25.3176452, 82.9739144],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Agra',
                coordinate:[27.1766701, 78.00807449999999],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Mathura',
                coordinate:[27.4924134, 77.673673],
                description: 'Mathura and Vrindavan',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
        ]
    },












    // East India
    {
        state: 'Arunachal Pradesh',
        list: [
        	{
                title: 'Ziro',
                coordinate:[27.544912, 93.8196686],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Gorichen Peak,',
                coordinate:[27.7948951, 92.3875523],
                description: '',
                popularity: null,
                statePopularity: 2,
                nearBy: [],
                idealTime: 'April to June and September to October',
            },
            {
                title: 'Roing',
                coordinate:[28.1178597, 95.8225911],
                description: '',
                popularity: null,
                statePopularity: 2,
                nearBy: [],
                idealTime: 'March to June',
            },

        ]
    },
    {
        state: 'Nagaland',
        list: [
        	{
                title: 'Dzukou Valley',
                coordinate:[25.5596685, 94.1488485],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            
        ]
    },
    {
        state: 'Meghalaya',
        list: [
        	{
                title: 'Nohkalikai Falls',
                coordinate:[25.2754203, 91.68595619999999],
                description: 'Located in one of the wettest places on Earth, Cherrapunji, Nohkalikai Falls is the tallest plunge waterfall in India having a height of 340 meters',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: '',
            },
            {
                title: 'Goechala',
                coordinate:[27.607778, 88.186944],
                description: '',
                popularity: null,
                statePopularity: 2,
                nearBy: [],
                idealTime: 'March to April',
            },
            {
                title: 'Cherrapunji',
                coordinate:[25.2702095, 91.7322884],
                description: 'Cherrapunji and Mawsynram',
                popularity: null,
                statePopularity: 3,
                nearBy: [
                	'Mawsynram',
                ],
                idealTime: 'March to April',
            },
            {
                title: 'Mawlynnong Village',
                coordinate:[25.2017637, 91.9160305],
                description: '',
                popularity: null,
                statePopularity: 4,
                nearBy: [],
                idealTime: 'June to September',
            },
            {
                title: 'Shillong',
                coordinate:[25.5787726, 91.8932535],
                description: '',
                popularity: null,
                statePopularity: 5,
                nearBy: [],
                idealTime: 'September to May',
            },
            
        ]
    },
    {
        state: 'Sikkim',
        list: [
        	{
                title: 'Nathula Pass',
                coordinate:[27.3865684, 88.83087309999999],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'May to October',
            },
            {
                title: 'Tsomgo Lake',
                coordinate:[27.3741667, 88.76194439999999],
                description: '',
                popularity: null,
                statePopularity: 2,
                nearBy: [],
                idealTime: 'March to May, October to December',
            },
            {
                title: 'Goechala',
                coordinate:[27.607778, 88.186944],
                description: '',
                popularity: null,
                statePopularity: 3,
                nearBy: [],
                idealTime: 'March to April',
            },
            {
                title: 'Pelling',
                coordinate:[27.3197716, 88.2400333],
                description: '',
                popularity: null,
                statePopularity: 3,
                nearBy: [],
                idealTime: 'September to May',
            },
            {
                title: 'Gangtok',
                coordinate:[27.3313512, 88.6138113],
                description: '',
                popularity: null,
                statePopularity: 3,
                nearBy: [],
                idealTime: 'September to October and March to June',
            },
            
        ]
    },
    {
        state: 'Assam',
        list: [
        	{
                title: 'Majuli',
                coordinate:[27.0016172, 94.2242981],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'September to November',
            },
            {
                title: 'Dibrugarh',
                coordinate:[27.4728327, 94.9119621],
                description: '',
                popularity: null,
                statePopularity: 2,
                nearBy: [],
                idealTime: 'October to March',
            },
            {
                title: 'Guwahati',
                coordinate:[26.1445169, 91.7362365],
                description: '',
                popularity: null,
                statePopularity: 3,
                nearBy: [],
                idealTime: 'October to March',
            },

        ]
    },
    {
        state: 'Tripura',
        list: [
        	{
                title: 'Agartala',
                coordinate:[23.831457, 91.2867777],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'December to March',
            },

        ]
    },
    {
        state: 'Nagaland',
        list: [
        	{
                title: 'Dimapur',
                coordinate:[25.9091406, 93.72656049999999],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'October to June',
            },
            {
                title: 'Kohima',
                coordinate:[25.6751129, 94.10859980000001],
                description: '',
                popularity: null,
                statePopularity: 2,
                nearBy: [],
                idealTime: 'October to May',
            },

        ]
    },
    {
        state: 'Manipur',
        list: [
        	{
                title: 'Imphal',
                coordinate:[24.8170111, 93.9368439],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'September to April',
            },

        ]
    },
    {
        state: 'Mizoram',
        list: [
        	{
                title: 'Aizawl',
                coordinate:[23.7307175, 92.71731059999999],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'March to May',
            },
            {
                title: 'Lunglei',
                coordinate:[22.8670691, 92.7655358],
                description: '',
                popularity: null,
                statePopularity: 2,
                nearBy: [],
                idealTime: 'October to April',
            },

        ]
    },






    {
        state: 'Andaman and Nicobar Islands',
        ut: true,
        list: [
        	{
                title: 'Andaman and Nicobar',
                coordinate:[11.7400867, 92.6586401],
                description: '',
                popularity: null,
                statePopularity: 1,
                nearBy: [],
                idealTime: 'October',
            },

        ]
    },
]


const LocationList = LocationByState.reduce((accumulator, currentValue) => {
 	const stateList = currentValue.list;

 	stateList.map(listItem=> {
 		const newEle = listItem;
 		newEle.state = currentValue.state;

 		if (currentValue.ut) {
			newEle.ut = true;
 		} else {
 			newEle.ut = false;
 		}
 		return newEle
 	})


	let list = [...accumulator, ...stateList];
	return list

}, [])

const StateList = LocationByState.map((ele) => ele.state);

// console.log('StateList', StateList)
// console.log('LocationList', LocationList)

// Refs: https://www.fabhotels.com/blog/places-to-visit-in-south-india/
// https://www.fabhotels.com/blog/places-to-visit-in-north-india/
// https://www.fabhotels.com/blog/places-to-visit-in-northeast-india/
// https://www.mistay.in/travel-blog/10-places-in-india-to-travel-to-spend-some-time-with-nature/
