'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    validator = require('validator');

var validateFieldStrategy = function(property){
    return property.length;
}

var CarSchema = new Schema({
    title:{
        type: String,
        default: '',
        trim: true,
        validate:[validateFieldStrategy, 'Title cannot be empty']
    },
    brand:{
        type: String,
        default: '',
        trim: true,
        validate:[validateFieldStrategy, 'Brand cannot be empty']
    },
    model:{
        type: String,
        default: '',
        trim: true,
        validate:[validateFieldStrategy, 'Model cannot be empty']
    },
    year:{
        type: String,
        default: '',
        trim: true,
        validate:[validateFieldStrategy, 'Year cannot be empty']
    },
    fuel:{
        type: String,
        default: '',
        trim: true,
        validate:[validateFieldStrategy, 'Fuel cannot be empty']
    },
    description:{
        type: String,
        default: '',
        trim: true,
        validate:[validateFieldStrategy, 'description cannot be empty']
    },
    images:{
        type: Array,
        properties:{
            image_id : {type : String},
            image_link : {type : String}
        },
        default: '',
        trim: true,
        validate:[validateFieldStrategy, 'Image cannot be empty']
    }
});

var Car = mongoose.model('cars', CarSchema);  //register collection for mongodb

module.exports = Car;