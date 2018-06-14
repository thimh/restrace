let Pub = require('../../models/pub'),
	express = require('express'),
	router = module.exports = express.Router(),
	pubController = require('../../controllers/pub');

function index(req, res) {
	pubController.index(req, res);
}

function get(req, res) {
	pubController.get(req, res);
}

function create(req, res) {
	pubController.create(req, res);
}

function edit() {

}

function destroy(req, res) {
	pubController.destroy(req, res);
}

router.get('/', index);
router.get('/:name', get);

router.post('/', create);
router.delete('/:name', destroy);