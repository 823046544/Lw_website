var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: '凌威实业', cmp_name: '凌威实业'});
});

router.get('/', function(req, res, next) {
  res.render('hp');
});

module.exports = router;
