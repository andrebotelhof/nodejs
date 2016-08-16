var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Listening on port: ' + port);
});

app.get('/', function(req, res) {
    res.end('Tá funcionando');
});
