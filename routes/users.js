var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ data: 'Your REST API works fine for REACT APP'});
});

module.exports = router;
