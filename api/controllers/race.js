'use strict';

let express = require('express'),
	router  = module.exports = express.Router();

const util = require('util');
const Race = require('../models/race');

module.exports = {
	index: index,
	get: get,
	create: create,
	edit: edit,
	destroy: destroy
};

function index(req, res) {
	Race.find().then(data => {
		return res.json(data);
	}).fail(err => {
		console.warn(err);
	});
}

function get(req, res) {
	Race.find({'name': req.params.name }).then(data => {
		res.json(data);
	}).fail(err => {
		console.warn(err);
	});
}

function create(req, res) {
	/*var user = new User({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		local: {
			username: req.body.username,
			password: req.body.password
		},
		roles: req.body.roles
	});
	var newuser = user.save().then(data => {
		res.json(data);
	}).fail(err => {
		console.warn(err);
	});*/
}

function edit(req, res) {
	//TODO EDIT
}

function destroy(req, res) {
	Race.deleteOne({'name': req.params.name }).then(data => {
		res.json(data);
	}).fail(err => {
		console.warn(err);
	});
}


