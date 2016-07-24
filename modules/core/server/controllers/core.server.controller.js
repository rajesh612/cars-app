'use strict';

var carService = require('../services/core.server.service.js');

module.exports.getCars = function (req, res) {
    carService.getCars(function (err,cars) {
        if (err) {
            res
                .status(400)
                .send({message: "Error: Unable to get car details. Please try again later"})
        } else{
            res.status(200);
            res.json(cars);
        }
    });
}

module.exports.createCarDetails = function (req, res) {
    var carDetails = req.body;
    carService.saveCarDetails(carDetails, function (err, carDetails) {
        if (err) {
            res
                .status(400)
                .send({message: "Error: Internal error while saving data. Please try again later"})
        } else
        {
            res
                .status(200)
                .json(carDetails)
        }
    });
}

module.exports.updateCarDetails = function (req, res) {
    var updatedCar = req.body,
        carId = req.metadata.carId;

    carService.updateCarDetails(carId, updatedCar, function (err) {
        if (err) {
            res.status(400)
                .send({message: "Error:: Unable to update car details. Please try again!!"});
        } else {
            res.status(200)
                .send({message: "Updated car details successfully"});
        }
    });
}

module.exports.deleteCarDetails = function (req, res) {
    var carId = req.metadata.carId;

    carService.deleteCarDetails(carId,function (err) {
    if (err) {
        res.status(400)
            .send({message: "Error:: Unable to delete car details. Please try again!!"});
    } else {
        res.status(200)
            .send({message: "Successfully deleted car details."});
    }
});
}

module.exports.findCarById = function (req, res) {
    var carId = req.metadata.carId;

    carService.findCarById(carId, function (err, carDetails) {
        if (err) {
            res.status(400)
                .send({message: "Error:: Unable to find car details. Please try again!!"});
        } else {
            res.status(200)
                .json(carDetails);
        }
    });
}


module.exports.validateCarIdAndForward = function (req, res, next, id) {
    var metadata = req.metadata = {};
    metadata.carId = id;
    next();
}

