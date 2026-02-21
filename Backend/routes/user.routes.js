const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/usuarios', userController.cadastrarUsuario);

module.exports = router;