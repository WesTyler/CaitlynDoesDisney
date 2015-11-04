var express         = require('express'),
    path            = require('path'),
    routes          = require('./routes'),
    requestHandler  = require('./requestHandlers');
    // bodyParser      = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname + '/../client')));
// app.use(bodyParser);
routes(app);

app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on port 3000')
});