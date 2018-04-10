'use strict';

let express = require('express'),
	router  = module.exports = express.Router();

const util = require('util');
const User = require('../models/user');

module.exports = {
	index: index,
	get: get,
	create: create,
	edit: edit,
	destroy: destroy
};

function index(req, res) {
	User.find().then(data => {
		return res.json(data);
	}).fail(err => {
		console.warn(err);
	});
}

async function get(req, res) {
	User.find(req.params.username).then(data => {
		res.json(data);
	}).fail(err => {
		console.warn(err);
	});
}

async function create(req, res) {
	// console.log('top');
	// console.log(req.body);
	// 	// const user = new User(req.body);
	//
	// var user = new User({
	// 	firstname: req.body.firstname,
	// 	lastname: req.body.lastname,
	// 	local: {
	// 		username: req.body.username,
	// 		password: req.body.password
	// 	},
	// 	roles: req.body.roles
	// });
	// console.log(user);
	// console.log('before save');
	// var newuser = await user.save();//.then(res.json(req.body));
	// console.log('after save');
	// console.log('after set header');
	// res.status(201);
	// return res.json(newuser);
	// console.log('after return json');
}

function edit() {

}

function destroy() {

}

router.post('/', create);


