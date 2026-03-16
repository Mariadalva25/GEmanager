const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rota para cadastrar produto
router.post('/produtos', productController.cadastrarProduto);

// Rota para listar produtos
router.get('/produtos', productController.listarProdutos);

module.exports = router;