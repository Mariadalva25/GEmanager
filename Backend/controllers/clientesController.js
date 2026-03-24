const Clientes = require("../models/clientes");

exports.getAll = (req, res) => {
  Clientes.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.getById = (req, res) => {
  Clientes.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Cliente não encontrado" });
    res.json(data);
  });
};

exports.create = (req, res) => {
  Clientes.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ ...req.body, id: result.insertId });
  });
};

exports.update = (req, res) => {
  Clientes.update(req.params.id, req.body, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Cliente não encontrado" });
    res.json({ message: "Cliente atualizado!" });
  });
};

exports.delete = (req, res) => {
  Clientes.delete(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Cliente não encontrado" });
    res.json({ message: "Cliente excluído!" });
  });
};