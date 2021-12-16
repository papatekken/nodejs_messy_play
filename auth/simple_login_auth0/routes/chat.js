var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();


router.get('/chat', secured(), function (req, res, next) {
  res.render('chat', {
    title: 'Chat page'
  });
});

module.exports = router;
