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

// next() => error handling middleware setup in index.js

// get all persons
router.get('/persons', (req, res, next) => {
    Person.find({}).then((doc) => {
        res.send(doc);
    }).catch(next);
});

router.get('/persons/:id', (req, res, next) => {
    Person.findById(req.params.id).then((doc) => {
        res.send(doc);
    }).catch(next);
});

router.get('/persons', (req, res, next) => {
    Person.geoSearch({
        type: 'point',
        coordinates: [parseFloat(req.query.lat), parseFloat(req.query.lng)]
    }, {
        maxDistance: 100,
        speherical: true
    }).then((doc) => {
        res.send(doc);
    });
});

router.put('/persons/:id', (req, res, next) => {

    Person.findByIdAndUpdate(req.params.id, req.body).then(() => {
        Person.findOne({
            _id: req.params.id
        }).then((doc) => {
            res.send(doc);
        });
    }).catch(next);
});


router.delete('/persons/:id', (req, res, next) => {
    console.log(req.params.id);

    Person.findByIdAndDelete(req.params.id).then(function (p) {
        res.send({
            type: 'DELETE',
            data: p
        });
        console.log('delete done');
    }).catch(next);
});

router.post('/persons', (req, res, next) => {

    var obj = _.merge({
        id: _id++
    }, req.body);

    var p = new Person(req.body);
    p.save().then((obj) => {
        res.send(obj);
    }).catch((next));

    // persons.push(obj);
    console.log(obj);

    //res.sendStatus(200);
});

module.exports = router;