const mongoose       = require('mongoose'),
	  // bcrypt         = require('bcryptjs'),
	  // mongooseHidden = require('mongoose-hidden')(),
	  Schema         = mongoose.Schema;

const userSchema = new mongoose.Schema({

	local: {
		username: {
			type: String,
			unique: true,
			lowercase: true
		},

		password: {
			type: String,
			hide: true
		},
	},

	social: {
		facebookId: {
			type: String,
			hide: true
		}
	},

	roles: [{
		type: String,
		default: ['user'],
		lowercase: true,
		enum: ['user', 'admin']
	}],

	firstname: {
		type: String
	},

	lastname: {
		type: String
	},

	races: [{
		type: Schema.ObjectId, ref: 'Race'
	}]

}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);