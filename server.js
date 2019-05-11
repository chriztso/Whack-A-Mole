var express = require('express');
var app = express(); 

var port = 3000; 

app.use(express.static(__dirname + 'public/'));
app.listen(port, () => {console.log('Listening at 3000')});