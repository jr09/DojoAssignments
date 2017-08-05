const bikeController = require('../../controllers/bikes');
const router = require('express').Router();

module.exports = router
    .get('/', bikeController.getAllBikes)
    .post('/:id', bikeController.create)
    .put('/:id', bikeController.update)
    .delete('/:id', bikeController.delete)