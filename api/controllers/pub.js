'use strict';

let express = require('express'),
	router  = module.exports = express.Router();

const util = require('util');
const Pub = require('../models/pub');

module.exports = {
	index: index,
	get: get,
	create: create,
	edit: edit,
	destroy: destroy
};

function index(req, res) {
	Pub.find().then(data => {
		return res.json(data);
	}).fail(err => {
		console.warn(err);
	});
}

function get(req, res) {
	Pub.find({'name': req.params.name }).then(data => {
		res.json(data);
	}).fail(err => {
		console.warn(err);
	});
}

function create(req, res) {
	var pub = new Pub({
		name: req.body.name,
		placeId: req.body.placeId,
		lng: req.body.lng,
		lat: req.body.lat
	});
	var newPub = pub.save().then(data => {
		res.json(data);
	}).fail(err => {
		console.warn(err);
	});
}

function edit(req, res) {
	//TODO EDIT
}

function destroy(req, res) {
	Pub.deleteOne({'name': req.params.name }).then(data => {
		res.json(data);
	}).fail(err => {
		console.warn(err);
	});
}


