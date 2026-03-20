const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.post('/pedidos', ordersController.cadastrarPedidos);

router.get('/pedidos', ordersController.listarPedidos);

module.exports = router;