// index.js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.send('Hello CICD for Dockerfile !');
});

var server = app.listen(4830, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
