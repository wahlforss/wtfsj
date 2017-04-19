var express = require('express')
var app = express();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/front_page.html');
});

app.get('/info', function(req, res){
	res.sendFile(__dirname + '/text.html');
});
app.use(express.static(__dirname + '/images'));


app.get('/front_page.css', function(req, res){
	res.sendFile(__dirname + '/front_page.css');
});
app.get('/text.css', function(req, res){
	res.sendFile(__dirname + '/text.css');
});
app.get('/train.json', function(req, res){
	res.sendFile(__dirname + '/train.json');
});

app.get('/airplane.json', function(req, res){
	res.sendFile(__dirname + '/airplane.json');
});

app.get('/front_page.js', function(req, res){
	res.sendFile(__dirname + '/front_page.js')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//app.use(express.static('images'))