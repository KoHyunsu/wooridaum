var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/main', function(req, res, next) {
  res.render('index.html');
});

router.get('/login', function(req, res, next) {
  res.render('login.html');
});

router.get('/phpmyadmin', function(req, res, next) {
});

module.exports = router;
