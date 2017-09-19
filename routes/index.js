'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  return res.render('index', { title: 'EJS BLOG' });
});

module.exports = router;
