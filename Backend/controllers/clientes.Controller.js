const Clientes = require("../models/clientes");

exports.getAll = (req, res) => {
  Clientes.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.create = (req, res) => {
  Clientes.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Cliente criado!" });
  });
};

exports.update = (req, res) => {
  Clientes.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Cliente atualizado!" });
  });
};

exports.delete = (req, res) => {
  Clientes.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Cliente deletado!" });
  });
};