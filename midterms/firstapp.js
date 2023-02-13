var express = require('express');

var app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Server running at http://localhost:3000');
});
