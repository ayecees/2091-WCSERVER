//Allen Carlo S. Serrano
//WD-201

const express = require('express');
const app = express();

app.use(express.static('public'));

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage });
app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);
  req.file.mimetype = mime.lookup(req.file.originalname);
  res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

app.get('/file-upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'file-uploaded.html');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {
  response = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
