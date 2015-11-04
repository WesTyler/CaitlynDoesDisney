var requestHandler = require('./requestHandlers');

module.exports = function(app){
   app.get('/columns', requestHandler.getColumns);
   app.get('/cards', requestHandler.getCards);
};
