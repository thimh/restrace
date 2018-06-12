let User = require('../../models/user'),
	express = require('express'),
	router = module.exports = express.Router(),
	userController = require('../../controllers/user');

function index(req, res) {
	userController.index(req, res);
}

function get(req, res) {
	userController.get(req, res);
}

function create(req, res) {
	userController.create(req, res);
}

function edit() {

}

function destroy() {

}

router.get('/', index);
router.get('/:username', get);

router.post('/', create);