//Allen Carlo S. Serrano
//WD - 201

//Express Web Server
const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('My New App!');
});

app.listen(3000, () => console.log('Listening on port 3000'));

 
//Simulating a simple API
app.get('/api/heroes', (req,res) => {
    res.send(['Superman','Iron Man','Batman','Hulk']);
});


//Express Route Paramets
app.get('/api/heroes/:id', (req,res) => {
    res.send(req.params.id);
});


//Multi Params
app.get('/api/heroes/:title/:publisher', (req,res) => {
    res.send(req.params);
});


//Query Parameters
app.get('/api/heroes/:title/:publisher', (req,res) => {
    res.send([req.params, req.query]);
});

