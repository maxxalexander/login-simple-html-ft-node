var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var conn = require('./src/db.connect');
const Router = require ('./src/routes/login');




var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});




app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3001
);
app.use('/', Router);

module.exports = app;