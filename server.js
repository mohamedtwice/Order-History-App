//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var customers = require('./routes/customers');

//globals
var port = 8080;
var config = {
  database: 'omega',
  host: 'localhost',
  port: 5432,
  max: 30
}; // end config obj

var pool = new pg.Pool(config);

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/get', customers);

// spin up server
app.listen(port, function() {
  console.log('server is up on:', port);
});


// base url
app.get('/', function(req, res) {
  console.log('in base url');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end base url


// app.get('/customers', function(req, res) {
//   console.log('get tasks');
//   pool.connect(function(err, connection, done) {
//     if (err) {
//       console.log('error');
//       done();
//       res.send(400);
//     } else {
//       console.log('connected to db');
//       var allTasks = [];
//       var resultSet = connection.query('SELECT * FROM todolist');
//       resultSet.on('row', function(row) {
//         allTasks.push(row);
//       }); //end resultSet
//       resultSet.on('end', function() {
//         done();
//         res.send(allTasks);
//       }); //end end resultSet
//     }
//   });
// }); //done pool get
