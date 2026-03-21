const Produtos = require("../models/produtos");

exports.getAll = (req, res) => {
  Produtos.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.getById = (req, res) => {
  Produtos.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Produto não encontrado" });
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
  Produtos.update(req.params.id, req.body, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Produto não encontrado" });
    res.json({ message: "Produto atualizado!" });
  });
};

exports.delete = (req, res) => {
  Produtos.delete(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Produto não encontrado" });
    res.json({ message: "Produto excluído!" });
  });
};