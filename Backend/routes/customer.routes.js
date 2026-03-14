const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/clientes', customerController.cadastrarClientes);

module.exports = router;