var mongoose = require('mongoose');
Schema = mongoose.Schema;

var TradeMessageSchema = new Schema({
  userId: String,
  currencyFrom: String,
  currencyTo: String,
  amountSell: Schema.Types.Decimal128,
  amountBuy: Schema.Types.Decimal128,
  rate: Schema.Types.Decimal128,
  timePlaced: String,
  originatingCountry: String

});

mongoose.model('TradeMessage', TradeMessageSchema);
