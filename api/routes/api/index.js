const express = require('express'),
	  router = express.Router();

router.use('/users', require('./users'));
// router.use('/pubs', require('./pubs'));
// router.use('/races', require('./races'));

module.exports = router;