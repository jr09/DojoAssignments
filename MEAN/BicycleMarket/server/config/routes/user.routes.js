const userController = require('../../controllers/users');
const router = require('express').Router();

module.exports = router
    .post('/login', userController.login)
    .post('/register', userController.register)
    .delete('/logout', userController.logout)
    .get('/index/:id', userController.index)
    .get('/userBikes/:id', userController.getUserBikes)