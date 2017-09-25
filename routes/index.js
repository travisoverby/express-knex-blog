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

router.post('/hipchat', (req, res, next) => {
  
  let message = req.body.item.message.message;
  const name = req.body.item.message.from.name;
  message = message.split(' ');
  message.shift();
  message = message.join(' ');
  console.log(message);

  res.json({ message: `${name} entered the following text: ${message}` });
});

router.get('/hipchat', (req, res, next) => {
  res.render('index', {title: 'EXPRESS', name: 'Blog' });
});

module.exports = router;
