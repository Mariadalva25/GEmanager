const Pedido = require("../models/pedidos.model");

exports.getAll = (req, res) => {
  Pedido.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.getAtivos = (req, res) => {
  Pedido.getAtivos((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.create = (req, res) => {
  Pedido.create(req.body, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.update = (req, res) => {
  Pedido.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Atualizado" });
  });
};

exports.delete = (req, res) => {
  Pedido.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Deletado" });
  });
};