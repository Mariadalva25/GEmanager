const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.post('/pedidos', ordersController.cadastrarPedidos);

module.exports = router;