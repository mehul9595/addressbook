const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/personApi');
const mongoose = require('mongoose');


//TODO: move to config 
const baseURL = '/api';

// setup express app
const app = express();

// connect to mongodb
mongoose.Promise = global.Promise;
var mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
mongoose.connect('mongodb://localhost:27017/addressbookdb', mongooseOpts)
    .then(console.log('mongo db connected...'));

app.use(bodyParser.json());
app.use(baseURL, routes);

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    // TODO: config status code
    res.status(422).send({
        error: err.message
    });
});

app.listen(4000, function () {
    console.log('listening for requests on port 4000');
});