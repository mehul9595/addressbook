const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/personApi');
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('dotenv').config();
const envflow = require('dotenv-flow').config();

//TODO: move to config 
const baseURL = '/api';
// const options = {
//     index: 'index.html'
// };

// setup express app
const app = express();

// connect to mongodb

var mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    auth: {
        user: process.env.COSMODDB_USER,
        password: process.env.COSMOSDB_PASSWORD
    }
};

// 

mongoose.connect("mongodb://" + process.env.COSMOSDB_HOST + ":" + process.env.COSMOSDB_PORT + "/" + process.env.COSMOSDB_DBNAME + "?ssl=true&replicaSet=globaldb&retrywrites=" + process.env.RETRY_WRITES, mongooseOpts)
    .then(console.log('mongo db connecting...'))
    .catch((err) => {
        console.log('Something went wrong!!!'); //TODO: find out why this catch is not called!s
        console.log(err);
    });

mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.json());
app.use(baseURL, routes);
app.use(express.static(__dirname + '/public'));


// error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    // TODO: config status code
    res.status(422).send({
        error: err.message
    });
});

// app.listen(4000, function () {
//     console.log('listening for requests on port 4000');
// });


// app service runs on default port 8080
var service = app.listen(process.env.PORT || 4000, function () {
    console.log(service.address());
    console.log('listening for requests' + service.address() + " " + service.address().port);
});