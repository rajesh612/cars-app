'use strict';

module.exports = function(app){

    var controller = require('../controllers/core.server.controller');

    app
        .route('/api/car')
        .get(controller.getCars)
        .post(controller.createCarDetails);

    // Update and delete operations
    app
        .route('/api/car/:carId')
        .get(controller.findCarById)
        .put(controller.updateCarDetails)
        .delete(controller.deleteCarDetails);

    app.param ('carId', controller.validateCarIdAndForward)

}