var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/roll', function(req, res, next) {
  const select = Math.floor(Math.random(0,1)*5)+2;
  res.send({mes:'hehe'});
});


module.exports = router;
