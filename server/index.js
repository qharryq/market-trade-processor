var express = require("express");
var bodyParser = require('body-parser');
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://localhost/db_tradeMessages';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('Unable to connect to the db' + mongoUri);
});

var app = express();
//Node.js body parsing middleware
app.use(bodyParser.json())

//Enable CORS across the entire app so that React client can get requests from Node backend
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/

require('./models/tradeMessage');
require('./routes')(app);

app.listen(3001, () => {
 console.log("Server running on port 3001");
});