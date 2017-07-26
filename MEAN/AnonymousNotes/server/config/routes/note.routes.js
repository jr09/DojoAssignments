const noteController = require('../../controllers/notes');
const router = require('express').Router();

module.exports = router
    .post('/', noteController.create)
