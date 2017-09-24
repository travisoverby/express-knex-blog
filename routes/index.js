'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  if (!req.cookies.name) {
    res.render('index', { title: 'EJS BLOG', name: req.cookies.name });
  } else {
    res.redirect('about');
  }
});

router.post('/', (req, res, next) => {
  res.cookie('name', req.body.name);
	console.log(req.body);
  res.redirect('/about');
});

router.get('/about', (req, res, next) => {
  if (req.cookies.name) {
    res.render('about', { title: 'EJS BLOG', name: req.cookies.name });
  } else {
    res.redirect('/');
  }
});



module.exports = router;
