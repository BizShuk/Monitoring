var express = require('express');
var router = express.Router();

router.get('/session', (req, res, next) => {
        let isAuthorized = "non-Authorized";
        if (req.session.auth) isAuthorized = "Authorized";
        res.write(JSON.stringify(req.session));
        res.write(isAuthorized);
        res.end();
});


router.put('/session', (req, res, next) => {
        req.session.auth = true;
        res.send('Session set.');
        res.end();
});

module.exports = router;
