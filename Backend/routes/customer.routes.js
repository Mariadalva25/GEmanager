const express = require('express');
const router = express.Router();

// Importar o controller corretamente
const customerController = require('../controllers/customerController');

// Rotas de cliente

// Cadastrar cliente
router.post('/clientes', customerController.cadastrarClientes);

// Listar clientes
router.get('/clientes', customerController.listarClientes);

module.exports = router;