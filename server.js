var express = require('express');
var app = express(); 
var db = require('./database.js');
var port = 3000; 
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/getScores', (req, res) => {
    console.log('getting');
    db.getScores((err, data) => {
        if(err){
            res.status(404).send(err);
            return;
        }
        res.status(200).send(data);
    })
})

app.post('/addToScore', (req, res) => {
   db.saveScore(req.body.score, (err, data) => {
       if(err){
           console.log(err);
       }
       res.status(201).send(data);
   })
})

app.listen(port, () => {console.log('Listening at 3000')});