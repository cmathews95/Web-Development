var express = require('express');
var app = express();
var path = require('path');

//I changed this part of the server because
//I was having trouble with the server finding
//the directory/file of my static files inside client
//and I just added the client/cards for good measure.

app.use(express.static('client'));
app.use(express.static('client/cards'))

app.listen(8080);

app.get('/', function (req, res) {
	res.sendFile('index.html');
});