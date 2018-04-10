const mongoose                                            = require('mongoose'),
	  Schema                                              = mongoose.Schema;
	  // {NotFoundError, ValidationError, UnauthorizedError} = require('./errors');

const raceSchema = new mongoose.Schema({
	name: {type: String, required: true},
	description: String,

	status: {
		type: String,
		default: 'notstarted',
		enum: {
			values: ['notstarted', 'started', 'ended']
		}
	},

	creator: {
		type: Schema.ObjectId, ref: 'User'
	},

	pubs: [{
		type: Schema.ObjectId, ref: 'Pub'
	}],

	users: [{
		type: Schema.ObjectId, ref: 'User'
	}],

	starttime: {
		type: Date,
		required: true,
	}

}, {timestamps: true});

module.exports = mongoose.model('Race', raceSchema);