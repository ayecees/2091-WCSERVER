const express = require( 'express') ;
app = express();

app.use(express.static('public'));
//import statements for path, mimetype and multer

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

//use multer to support file upload feature
const fileStorage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/'); // specify the destination directory for the uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // use the original name of the file
    },
});

const upload = multer({ storage: fileStorage });

//file upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
    console.log(req.file);

//set the correct MIME type for the uploaded file,
//use to verify that the uploaded file is of the expected
//type before further processing it.
    req.file.mimetype = mime.lookup(req.file.originalname);

//send a customized page to the client
    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

//route to upload
app.get('/file-upload', (req, res) => {
    res.sendFile(__dirname + '/' + 'file-upload.html');
});

app.listen(2000,function(){
    console.log("Server is running on port 2000");
});