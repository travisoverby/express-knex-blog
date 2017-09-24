'use strict';

const express = require('express');  
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();  


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// include routes
const routes = require('./routes/index');
app.use('/', routes);

app.listen(3000, () => { console.log("Listening on port 3000"); });  
