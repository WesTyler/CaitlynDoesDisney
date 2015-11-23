var MongoClient = require('mongodb').MongoClient;

var mongoUrl = process.env.MONGOLAB_URI || require('./config.js').mongoUrl;

var getColumns = module.exports.getColumns = function(req, res) {
   MongoClient.connect(mongoUrl, function(err, db) {
    if(err) console.log('MONGO ERR', err);

    var clients = db.collection('clients');

    clients.find({id: 1}).toArray(function(err, result) {
      if(err) console.log('MONGO ERR', err);

      res.json(result[0].data);
      db.close();
    });
  });

};

var saveBoard = module.exports.saveBoard = function(req, res) {
  var data = req.body;
  var newCardArrangement = [];
  var columns = data.columns;

  MongoClient.connect(mongoUrl, function(err, db) {
    if(err) console.log('MONGO ERR', err);

    var clients = db.collection('clients');

    clients.findOneAndUpdate({id: 1}, {$set: {data: columns}}, function(err, result) {
      if(err) console.log('MONGO ERR', err);

      res.sendStatus(201, result);
      db.close();
    });
  });
};