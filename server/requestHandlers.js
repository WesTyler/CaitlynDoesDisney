var columns = {
  'quoteRequested': {label: 'Quote Requested', cards: [{name: 'Tyler Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids:0}], id: 'quoteRequested'},
  'quoteSent': {label: 'Quote Sent', cards: [{name: 'Boren Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids:0}], id: 'quoteSent'},
  'depositPaid': {label: 'Deposit Paid', cards: [{name: 'Riggs Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids:0}], id: 'depositPaid'},
  'tripPaid': {label: 'Paid in Full', cards: [{name: 'Redfearn Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids:0}], id: 'tripPaid'},
  'onVacation': {label: 'On Vacation!', cards: [], id: 'onVacation'}
};

var getColumns = module.exports.getColumns = function(req, res) {
  console.log('Received GET at /columns');
  res.json(columns);
};

var saveBoard = module.exports.saveBoard = function(req, res) {
  var data = req.body;
  var newCardArrangement = [];
  console.log('Received POST at /board', Object.keys(data.columns));
  columns = data.columns;
  res.sendStatus(201);
};