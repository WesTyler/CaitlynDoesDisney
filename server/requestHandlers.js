var getColumns = module.exports.getColumns = function(req, res) {
  console.log('Received GET at /columns');
  res.sendStatus(200);
};

var getCards = module.exports.getCards = function(req, res) {
  console.log('Received GET at /cards');
  res.json([{name: 'Tyler Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids: 0, column: 'depositPaid'}, {name: 'Redfearn Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids: 0, column: 'quoteSent'}]);
};

var saveBoard = module.exports.saveBoard = function(req, res) {
  // var data = req.body;
  // console.log('Received POST at /board', req);
  res.sendStatus(201);
};