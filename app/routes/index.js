'use strict';

const express = require('express');
const router = express.Router();

console.log(__basePath);
console.log(__dirname);
console.log(__dirname.split('/').pop());
process.exit();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

module.exports = router;
