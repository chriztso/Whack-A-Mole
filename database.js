var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'yourpassword',
    database : 'mole'
});

connection.connect(() => {console.log('CONNECTED TO DB')});

var getScores = (callback) => {
    var query = "SELECT score FROM scores ORDER BY score DESC LIMIT 3";
    connection.query(query, (err, data) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, data);
    })
}
var saveScore = (score, callback) => {
  var query = `INSERT INTO scores (score) VALUES ('${score}')`;
  connection.query(query, (err, data) => {
      if(err){
          callback(err, null);
          return;
      }
      callback(null, data);
  })
}

exports.saveScore = saveScore;
exports.getScores = getScores;