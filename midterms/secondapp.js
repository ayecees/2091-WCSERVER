var express = require("Express");
var app = express();

const port = 2001;
const host = 'localhost';

app.get("/",function(req,res){
    res.send("You have successfully created your second app!")
});

app.listen(port, host, () => {
  console.log('Example app listening at http://ks:ks')
  host, port);
});