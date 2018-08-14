var express = require('express');
var router = express.Router();
var sampleSession = require('./sampleSession');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.write('sample of session:\n');
	res.flush();
	res.write('- /session , GET, if set, show "Authorized", else show "non-Authorized"\n');
	res.write('- /session , PUT\n');
	res.end();
});

router.use('/', sampleSession);

module.exports = router;
