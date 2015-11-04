var getColumns = module.exports.getColumns = function(req, res) {
  console.log('Received GET at /columns');
  res.sendStatus(200);
};

var getCards = module.exports.getCards = function(req, res) {
  console.log('Received GET at /cards');
  res.sendStatus(200);
};

var saveBoard = module.exports.saveBoard = function(req, res) {
  console.log('Received POST at /board');
  var data = req.body;
  res.sendStatus(201);
};