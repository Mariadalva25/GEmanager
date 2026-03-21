const Pedidos = require("../models/pedidos");

exports.getAll = (req, res) => {
  Pedidos.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.getById = (req, res) => {
  Pedidos.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Pedido não encontrado" });
    res.json(data);
  });
};

exports.create = (req, res) => {
  Pedidos.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Pedido criado!" });
  });
};

exports.update = (req, res) => {
  Pedidos.update(req.params.id, req.body, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Pedido não encontrado" });
    res.json({ message: "Pedido atualizado!" });
  });
};

exports.delete = (req, res) => {
  Pedidos.delete(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Pedido não encontrado" });
    res.json({ message: "Pedido excluído!" });
  });
};