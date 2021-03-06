var cors = require('cors');

module.exports = function(app){
    var tradeMessages = require('./controllers/tradeMessages');
    // Enable CORS for just this route
    app.get('/tradeMessages',cors(), tradeMessages.findAll);
    app.get('/tradeMessages/:userId', tradeMessages.findByUserId);
    app.post('/tradeMessages', tradeMessages.add);
}