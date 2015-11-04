var express         = require('express'),
    path            = require('path'),
    routes          = require('./routes'),
    requestHandler = require('./requestHandlers');

var app = express();

app.use(express.static(path.join(__dirname + '/../client')));
routes(app);

app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on port 3000')
});