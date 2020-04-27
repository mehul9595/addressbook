const express = require('express');
const router = express.Router();
const _ = require('lodash');
const Person = require('../models/person');

// Persons API supports, GET All, Get Person by ID, Update By ID, Delete, and Add Person functions

let _id = 1;

let persons = [{
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
    res.send({
        type: 'get by id'
    });
});

router.put('/persons:id', (req, res) => {
    res.send({
        type: 'update by id'
    });
});

router.delete('/persons:id', (req, res) => {
    res.send({
        type: 'delete by id'
    });
});

router.post('/persons', (req, res, next) => {

    var obj = _.merge({
        id: _id++
    }, req.body);

    var p = new Person(req.body);
    p.save().then((obj)=>{
        res.send(obj);
    }).catch((next));
    
    // persons.push(obj);
    console.log(obj);
    
    //res.sendStatus(200);
});

module.exports = router;