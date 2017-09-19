var express = require('express');  
var app = express();  
var db  = require('./db');
var port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// include routes
var routes = require('./routes/index');
app.use('/', routes);


app.listen(port, () => { console.log(`Listening on port ${port}`) });  

