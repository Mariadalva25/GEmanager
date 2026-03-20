const Produtos = require("../models/produtos");

exports.getAll = (req, res) => {
  Produtos.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.create = (req, res) => {
  Produtos.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Produto criado!" });
  });
};

exports.update = (req, res) => {
  Produtos.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Produto atualizado!" });
  });
};

exports.delete = (req, res) => {
  Produtos.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Produto deletado!" });
  });
};