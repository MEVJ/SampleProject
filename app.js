var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');


var app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
	//__dirname : It will resolve to your project folder.
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon.ico'));

var server = app.listen(3000, function () {
	console.log('api listening on', server.address().port);

})
