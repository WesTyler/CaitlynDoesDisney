var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname+'/../client')));
console.log(path.join(__dirname+'/../client'));

app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on port 3000')
});