const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and models for mongodb->person collection

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
    }
}, {
    collection: 'Persons'
});

const Person = mongoose.model('person', personSchema);

module.exports = Person;

