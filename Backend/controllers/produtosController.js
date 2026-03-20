const Produtos = require('../models/produtos.model');

exports.getAll = (req, res) => Produtos.getAll((err, data) => err ? res.status(500).json(err) : res.json(data));
exports.create = (req, res) => Produtos.create(req.body, (err) => err ? res.status(500).json(err) : res.json({ message: "Produto criado!" }));
exports.update = (req, res) => Produtos.update(req.params.id, req.body, (err) => err ? res.status(500).json(err) : res.json({ message: "Produto atualizado!" }));
exports.delete = (req, res) => Produtos.delete(req.params.id, (err) => err ? res.status(500).json(err) : res.json({ message: "Produto removido!" }));