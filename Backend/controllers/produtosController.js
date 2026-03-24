const Produtos = require("../models/produtos");

exports.getAll = (req, res) => {
  Produtos.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.create = (req, res) => {
  Produtos.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ ...req.body, id: result.insertId });
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