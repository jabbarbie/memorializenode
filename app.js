<<<<<<< HEAD
var express = require('express');
var app = express();
// Routes
app.get('/', function (req, res) {
    res.send('Maintance, proses migrate dari laravel ke expressjs... ');
});
// Listen
var port = process.env.PORT || 3000;
app.listen(port); console.log('Listening on localhost:' + port);
=======
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen();
>>>>>>> 2d7e1be (asd)
