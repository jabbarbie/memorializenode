var express = require('express');
var app = express();
// Routes
app.get('/', function (req, res) {
    res.send('Maintance, proses migrate dari laravel ke expressjs... ');
});
// Listen
var port = process.env.PORT || 3000;
app.listen(port); console.log('Listening on localhost:' + port);
