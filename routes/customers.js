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

router.get('/orderinfo', function(req, res) {
  pool.connect(function(err, client, done) {
    console.log("hitting /orderinfo route");
    client.query('SELECT (customer_id), (first_name, last_name), (order_id), (street), (city), (zip), (description), (products.unit_price), (quantity)  FROM customers JOIN addresses ON customers.id = addresses.customer_id JOIN orders ON orders.address_id = addresses.id JOIN line_items ON line_items.order_id = orders.id JOIN products ON products.id = line_items.product_id;', function(err, result) {
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
