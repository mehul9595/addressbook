const express = require('express');
const router = express.Router();

// Persons API supports, GET All, Get Person by ID, Update By ID, Delete, and Add Person functions

let _id = 1;

let persons = [
    {
        id: _id++,
        firstName: 'Mehul',
        lastName: 'Makwana',
        age: 31,
        location: 'Mumbai'
    }, {
        id: _id++,
        firstName: 'Akanksha',
        lastName: 'Makwana',
        age: 31,
        location: 'Mumbai'
    }];

// get all persons
router.get('/persons', (req, res) => {
    res.send(persons);
});

router.get('/persons:id', (req, res) => {
    res.send({ type: 'get by id' });
});

router.put('/persons:id', (req, res) => {
    res.send({ type: 'update by id' });
});

router.delete('/persons:id', (req, res) => {
    res.send({ type: 'delete by id' });
});

router.post('/persons', (req, res) => {
    console.log(req.firstName);
    console.log(req.lastName);
    
    var p = {
        id: _id++,
        firstName: 'Akanksha',
        lastName: 'Makwana',
        age: 31,
        location: 'Mumbai'
    };
    persons.push(p);

    res.sendStatus(200);
});

module.exports = router;