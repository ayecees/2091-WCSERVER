var express = require('express');
var app = express();

const port = 2001;
const host = 'localhost';

app.get('/', function (request, response) {
  response.send('You have successfully created your second app!');
});

app.listen(port, host, () => {
  console.log(`Example app listening at http://%s:%s`, host, port);
});
