'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: null, name: null });
});

router.get('/profile', (req, res, next) => {
  res.render('profile', { title: null, name: null });
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: null, name: null });
});

router.get('/register', (req, res, next) => {
  res.render('register', { title: null, name: null });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { title: null, name: null });
});

router.get('/admin', (req, res, next) => {
  res.render('admin', { title: null, name: null });
});

router.get('/secret', (req, res, next) => {
  res.render('secret', { title: null, name: null });
});

router.get('/login', (req, res, next) => {
  res.render('login', { title: null, name: null });
});



module.exports = router;
