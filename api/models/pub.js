const mongoose = require('mongoose');

const pubSchema = new mongoose.Schema({
	name: {type: String, required: true},
	placeId: {type: String, required: true},
	lon: {type: Number, required: true},
	lat: {type: Number, required: true},
});

module.exports = mongoose.model('Pub', pubSchema);