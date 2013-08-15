var express = require('express');
var app = express();
var fs = require('fs');
var buf = new Buffer(256);
app.use(express.logger());

app.get('/', function(request, response) {
 buf=fs.readFileSync('index.html'); 
 response.send('Hello World 3!' + buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
