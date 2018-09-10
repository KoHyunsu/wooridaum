var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html');
});

router.get('/login', function(req, res) {
  res.render('login.html');
});

router.get('/register', function(req, res) {
  res.render('register.html');
});

router.get('/forgot', function(req, res) {
  res.render('forgot-password.html');
});


module.exports = router;
