var columns = {
  'quoteRequested': {label: 'Quote Requested', cards: []},
  'quoteSent': {label: 'Quote Sent', cards: []},
  'depositPaid': {label: 'Deposit Paid', cards: []},
  'tripPaid': {label: 'Paid in Full', cards: []},
  'onVacation': {label: 'On Vacation!', cards: []}
};
var cards = [
  {name: 'Tyler Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids: 0, column: 'depositPaid'},
  {name: 'Boren Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids: 0, column: 'quoteRequested'},
  {name: 'Riggs Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids: 0, column: 'depositPaid'},
  {name: 'Redfearn Family', tripDate: '05/04/2016 - 05/11/2016', destination: 'Disney World', pixie: 'None', adults: 2, kids: 0, column: 'quoteSent'}
];


var getColumns = module.exports.getColumns = function(req, res) {
  console.log('Received GET at /columns');
  res.json(columns);
};

var getCards = module.exports.getCards = function(req, res) {
  console.log('Received GET at /cards');
  res.json(cards);
};

var saveBoard = module.exports.saveBoard = function(req, res) {
  var data = req.body;
  var newCardArrangement = [];
  console.log('Received POST at /board', Object.keys(data.columns));
  Object.keys(data.columns).forEach(function(columnlabel) {
    data.columns[columnlabel].cards.forEach(function(card) {
      console.log('Column',columnlabel, 'Card Column', card.column)
      // newCardArrangement.push
    })
  })
  res.sendStatus(201);
};