import express from 'express';

const app = express();

// Routes
app.get('/', function (req, res) {
    res.send('maintance, proses migrate dari laravel ke expressjs...');
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port); console.log('Listening on localhost:' + port);