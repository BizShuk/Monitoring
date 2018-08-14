var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.send('log api');
});


// Create a log
router.put('/', (req, res, next) => {

	res.end();
});


module.exports = router;
