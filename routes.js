var cors = require('cors');

module.exports = function(app){
    var tradeMessages = require('./controllers/tradeMessages');
    // Enable CORS for just this route
    app.get('/tradeMessages',cors(), tradeMessages.findAll);
    app.get('/tradeMessages/:userId', tradeMessages.findByUserId);
    app.post('/tradeMessages', tradeMessages.add);
    // I don't think an update or delete method is required
    //app.put('/tradeMessages/:id', tradeMessages.update);
    //app.delete('/tradeMessages/:id', tradeMessages.delete);
}