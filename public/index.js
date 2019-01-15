'use strict';

//list of bars
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const bars = [{
    'id': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
    'name': 'freemousse-bar',
    'pricePerHour': 50,
    'pricePerPerson': 20
}, {
    'id': '165d65ec-5e3f-488e-b371-d56ee100aa58',
    'name': 'solera',
    'pricePerHour': 100,
    'pricePerPerson': 40
}, {
    'id': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
    'name': 'la-poudriere',
    'pricePerHour': 250,
    'pricePerPerson': 80
}];

//list of current booking events
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful from step 4
const events = [{
    'id': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
    'booker': 'esilv-bde',
    'barId': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
    'time': 4,
    'persons': 8,
    'options': {
        'deductibleReduction': false
    },
    'price': (4*50+8*20),
    'commission': {
        'insurance': ((4*50+8*20)*0.3)*0.5,
        'treasury': 4,
        'privateaser': (((4*50+8*20)*0.3)*0.5)-4
    }
}, {
    'id': '65203b0a-a864-4dea-81e2-e389515752a8',
    'booker': 'societe-generale',
    'barId': '165d65ec-5e3f-488e-b371-d56ee100aa58',
    'time': 8,
    'persons': 30,
    'options': {
        'deductibleReduction': true
    },
    'price': ((8*100+30*40)*0.8)+30,
    'commission': {
        'insurance': ((8*100+30*40)*0.8)*0.5,
        'treasury': 30,
        'privateaser': ((((8*100+30*40)*0.8)*0.3)*0.5)-30
    }
}, {
    'id': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
    'booker': 'otacos',
    'barId': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
    'time': 5,
    'persons': 80,
    'options': {
        'deductibleReduction': true
    },
    'price':((5*250+80*80)*0.5)+80,
    'commission': {
        'insurance': ((5*250+80*80)*0.5)*0.5,
        'treasury': 80,
        'privateaser': (((5*250+80*80)*0.5)*0.5)-80
    }
}];

//list of actors for payment
//useful from step 5
const actors = [{
    'eventId': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
    'payment': [{
        'who': 'booker',
        'type': 'debit',
        'amount': (4*50+8*20)
    }, {
        'who': 'bar',
        'type': 'credit',
        'amount': (4*50+8*20) - ((4*50+8*20)*0.3)
    }, {
        'who': 'insurance',
        'type': 'credit',
        'amount': ((4*50+8*20)*0.3)*0.5
    }, {
        'who': 'treasury',
        'type': 'credit',
        'amount': 8
    }, {
        'who': 'privateaser',
        'type': 'credit',
        'amount': ((4*50+8*20)*0.3) - (((4*50+8*20)*0.3)*0.5 + 8)
    }]
}, {
    'eventId': '65203b0a-a864-4dea-81e2-e389515752a8',
    'payment': [{
        'who': 'booker',
        'type': 'debit',
        'amount': ((8*100+30*40)*0.8)+30
    }, {
        'who': 'bar',
        'type': 'credit',
        'amount': ((8*100+30*40)*0.8) -(((8*100+30*40)*0.8)*0.3)
    }, {
        'who': 'insurance',
        'type': 'credit',
        'amount': (((8*100+30*40)*0.8)*0.3)*0.5
    }, {
        'who': 'treasury',
        'type': 'credit',
        'amount': 30
    }, {
        'who': 'privateaser',
        'type': 'credit',
        'amount': (((8*100+30*40)*0.8)*0.3) -(((((8*100+30*40)*0.8)*0.3)*0.5) - 30) +30
    }]
}, {
    'eventId': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
    'payment': [{
        'who': 'booker',
        'type': 'debit',
        'amount': ((5*250+80*80)*0.5)+80
    }, {
        'who': 'bar',
        'type': 'credit',
        'amount': ((5*250+80*80)*0.5) - (((5*250+80*80)*0.5)*0.3)
    }, {
        'who': 'insurance',
        'type': 'credit',
        'amount': (((5*250+80*80)*0.5)*0.3)*0.5
    }, {
        'who': 'treasury',
        'type': 'credit',
        'amount': 80
    }, {
        'who': 'privateaser',
        'type': 'credit',
        'amount': (((5*250+80*80)*0.5)*0.3) -((((5*250+80*80)*0.5)*0.3)*0.5 + 80) + 80
    }]
},
];
console.log(bars);
console.log(events);
console.log(actors);

