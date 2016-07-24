'use strict';

var mongoose = require('mongoose'),
    Car = require('../models/core.server.model.js');

module.exports.getCars = function (callback) {
    Car.find({},function (err, cars) {
        callback(err,cars);
    });
}

module.exports.saveCarDetails = function(savedCar, callback){

    var newCar = new Car(savedCar);
    newCar.save(function (err) {
         callback(err, newCar);
    });

    console.log('mongoose readyState is ' + mongoose.connection.readyState);// should be 1

}

module.exports.updateCarDetails = function (carID, updatedCar, callback) {

    Car.findByIdAndUpdate(carID,updatedCar, function(err, newCar) {
        callback(err);
    });

}

module.exports.deleteCarDetails = function (id,callback) {
    Car.findByIdAndRemove(id, function(err) {
        callback(err);
    });
}
    
module.exports.findCarById = function(id,callback){
    Car.findById(id, function(err, car) {
        callback(err,car);
    });
}

