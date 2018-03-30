'use strict';

global.__basePath = __dirname;

const express = require('express');  
const bodyParser = require('body-parser');
const path = require('path')
const expressLayouts = require('express-ejs-layouts');

const app = express();  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// include routes
const routes = require(path.join(__dirname, 'routes', 'index'));
app.use('/', routes);

app.use((req, res, next) => {
  var err = new Error('WHOOPS');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000, () => { 
  console.log("Listening on port 3000"); 
});  
