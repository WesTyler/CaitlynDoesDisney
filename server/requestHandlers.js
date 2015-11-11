var columns = {
  'quoteRequested': {label: 'Quote Requested', cards: [{name: 'Tyler Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids:0, agent: 'Caitlyn', notes: ''}], id: 'quoteRequested'},
  'quoteSent': {label: 'Quote Sent', cards: [{name: 'Boren Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids:0, agent: 'Emily', notes: ''}], id: 'quoteSent'},
  'depositPaid': {label: 'Deposit Paid', cards: [{name: 'Riggs Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids:0, agent: 'Beth', notes: ''}], id: 'depositPaid'},
  'tripPaid': {label: 'Paid in Full', cards: [{name: 'Redfearn Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids:0, agent: 'Caitlyn', notes: ''}], id: 'tripPaid'},
  'onVacation': {label: 'On Vacation!', cards: [], id: 'onVacation'}
};

var getColumns = module.exports.getColumns = function(req, res) {
  res.json(columns);
};

var saveBoard = module.exports.saveBoard = function(req, res) {
  var data = req.body;
  var newCardArrangement = [];
  columns = data.columns;
  res.sendStatus(201);
};