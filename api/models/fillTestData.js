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
		lng: 5.3043074,
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
	Race.find({}).then(data => {
		if (data.length == 0) {
			console.log('Creating races testdata');
			User.findOne({firstname: 'Koen'}).then(testCreator => {
				Pub.findOne({placeId: 'ChIJJz7zfPbuxkcRubjnDwC0Wdk'}).then(testPub => {
					const testData = [{
						name: 'Race 1',
						description: 'Test race 1',
						status: 'notstarted',
						creator: testCreator,
						pubs: [testPub],
						users: [testCreator],
						starttime: Date.now(),
					}];
					testData.forEach(function (race) {
						console.log(race);
						new Race(race).save();
					});
					console.log("done races");
				});
			});



		} else {
			console.log('Testdata allready present');
		}
	});
};

module.exports = function () {
	q.fcall(fillTestPubs).then(fillTestUsers).then(fillTestRaces);
};