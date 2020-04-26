const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/personApi');

//TODO: move to config 
const baseURL = '/api';

// setup express app
const app = express();

app.use(bodyParser.json());
app.use(baseURL, routes);

app.listen(4000, function () {
    console.log('listening for requests on port 4000');
});



