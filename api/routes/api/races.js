let Race = require('../../models/race'),
	express = require('express'),
	router = module.exports = express.Router(),
	raceController = require('../../controllers/race');

function index(req, res) {
	raceController.index(req, res);
}

function get(req, res) {
	raceController.get(req, res);
}

function create(req, res) {
	raceController.create(req, res);
}

function edit(req, res) {
	raceController.edit(req, res);
}

function destroy(req, res) {
	raceController.destroy(req, res);
}

router.get('/', index);
router.get('/:name', get);

router.post('/', create);
router.delete('/:name', destroy);