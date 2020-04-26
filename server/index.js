const express = require('express');
const routes = require('./routes/apiPerson');

//TODO: move to config 
const baseURL = '/api';


// setup express app
const app = express();

app.get('/api/contacts',  (req, res) => {

    var person = {
        name: 'Mehul',
        age: 31,
        location: 'Mumbai'
    };
    console.log(person);
    res.send(person);
});


app.use(baseURL, routes);

app.listen(4000, function () {
    console.log('listening for requests on port 4000');
});



