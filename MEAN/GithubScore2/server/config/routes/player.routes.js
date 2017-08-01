const playerController = require('../../controllers/players');
const router = require('express').Router();

module.exports = router
    .post('/', playerController.createPlayer)
    .get('/', playerController.getAllPlayersDescending)