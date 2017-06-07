var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

var config = {
  database: 'omega',
  host: 'localhost',
  port: 5432,
  max: 30
}; // end config obj

var pool = new pg.Pool(config);
var sendBackData = [];

router.get('/customers', function(req, res) {
  pool.connect(function(err, client, done) {
    // if (err) {
    //   console.log('Error connecting to the DB', err);
    //   res.sendStatus(500);
    //   done();
    //   return;
    // }

    client.query('SELECT * FROM customers;', function(err, result) {
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }

      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});

module.exports = router;
