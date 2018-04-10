const q = require('q');

const mongoose = require('mongoose');
User = mongoose.model('User');
Pub = mongoose.model('Pub');
Race = mongoose.model('Race');

function fillTestUsers(callback) {
	const testData = [
		{
			local: {
				username: 'admin',
				password: 'test'
			},
			social: {
				facebookId: '1'
			},
			roles: ['user', 'admin'],
			firstname: 'Koen',
			lastname: 'Jansen',
			races: []
		}
	];

	User.find({})
		.then(data => {
			if (data.length == 0) {
				console.log('Creating user testdata');

				testData.forEach(function (user) {
					new User(user).save();
				});
			} else {
				console.log('Tesatdata already exists');
			}

			return;
		});
};

function fillTestPubs() {
	const testData = [{
		name: 'Bitterzoet',
		placeId: 'ChIJJz7zfPbuxkcRubjnDwC0Wdk',
		lon: 5.3043074,
		lat: 51.6880754
	}];

	Pub.find({}).then(data => {
		if (data.length == 0) {
			console.log('Creating pubs testdata');

			testData.forEach(function (pub) {
				new Pub(pub).save();
			});
		} else {
			console.log('Testdata allready present');
		}
	});
};

function fillTestRaces() {
	const testCreator = User.findOne({firstname: 'Koen'});
	const testPub = Pub.findOne({placeId: 'ChIJJz7zfPbuxkcRubjnDwC0Wdk'});

	const testData = [{
		name: 'Race 1',
		description: 'Test race 1',
		status: 'notstarted',
		creator: testCreator._id,
		pubs: [testPub._id],
		users: [],
		starttime: null
	}];

	Race.find({}).then(data => {
		if (data.length == 0) {
			console.log('Creating races testdata');

			testData.forEach(function (race) {
				new Race(race).save();
			});
		} else {
			console.log('Testdata allready present');
		}
	});
};

module.exports = function () {
	q.fcall(fillTestPubs).then(fillTestUsers).then(fillTestRaces);
};