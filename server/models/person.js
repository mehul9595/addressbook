const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and models for mongodb->person collection

/*
"geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  }
  */

const GeoSchema = new Schema({
    type:{
        type:'String',
        default:'Point'
    },
    coordinates:{
        type:[Number],
        ensureIndex: "2dsphere"
    }
});

const personSchema = new Schema({
    firstName: {
        type:'String',
        required:[true, 'first name is required']
    },
    lastName:{
        type: 'String'
    },
    age:{
        type:'Number',
        required:[true, 'age is required']
    },
    location:{
        type:'String'        
    },
    geometry: GeoSchema
}, {
    collection: 'Persons'
});

const Person = mongoose.model('person', personSchema);

module.exports = Person;

