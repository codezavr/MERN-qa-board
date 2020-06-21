var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index2', { title: 'Express' });
    res.json({ username: 'Flavio' })
});

module.exports = router;