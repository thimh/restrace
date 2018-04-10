let User = require('../../models/user'),
	express = require('express'),
	router = module.exports = express.Router(),
	userController = require('../../controllers/user');

function index(req, res) {
	userController.index(req, res);
}

function get(req, res) {
	User.find(req.params.username).then(data => {
		res.json(data);
	}).fail(err => {
		console.warn(err);
	});
}

async function create(req, res) {
	console.log('users route req.body');
	// userController.create(req, res);
	console.log('top');
	// const user = new User(req.body);

	var user = new User({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		local: {
			username: req.body.username,
			password: req.body.password
		},
		roles: req.body.roles
	});
	console.log(user);
	console.log('before save');
	var newuser = await user.save();//.then(res.json(req.body));
	console.log('after save');
	console.log('after set header');
	res.status(201);
	res.json(newuser);
	console.log('after return json');
}

function edit() {

}

function destroy() {

}

router.get('/', index);

router.post('/', create);