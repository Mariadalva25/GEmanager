const Pedidos = require('../models/pedidos.model');

exports.getAll = (req, res) => Pedidos.getAll((err, data) => err ? res.status(500).json(err) : res.json(data));
exports.getAtivos = (req, res) => Pedidos.getAtivos((err, data) => err ? res.status(500).json(err) : res.json(data));
exports.create = (req, res) => Pedidos.create(req.body, (err, data) => err ? res.status(500).json(err) : res.json({ message: "Pedido criado!" }));
exports.update = (req, res) => Pedidos.update(req.params.id, req.body, (err) => err ? res.status(500).json(err) : res.json({ message: "Pedido atualizado!" }));
exports.delete = (req, res) => Pedidos.delete(req.params.id, (err) => err ? res.status(500).json(err) : res.json({ message: "Pedido deletado!" }));