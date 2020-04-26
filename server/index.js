const express = require('express');

// setup express app
const app = express();

app.get('/api/persons',  (req, res) => {

    var person = {
        name: 'Mehul',
        age: 31,
        location: 'Mumbai'
    };

    res.send(person);
});

app.get('/api/contacts',  (req, res) => {

    var person = {
        name: 'Mehul',
        age: 31,
        location: 'Mumbai'
    };
    console.log(person);
    res.send(person);
});


app.listen(4000, function () {
    console.log('listening for requests on port 4000');
});



