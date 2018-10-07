var mongoose = require('mongoose'),
TradeMessage = mongoose.model('TradeMessage');

exports.findAll = function(req, res){
    TradeMessage.find({},function(err, results) {
      return res.send(results);
    });
  };

exports.findByUserId = function() {};
exports.add = function(req, res) {
    console.log(req);
    TradeMessage.create(req.body, function (err, tradeMessage) {
      if (err) return console.log(err);
      return res.send(tradeMessage);
    });
  };