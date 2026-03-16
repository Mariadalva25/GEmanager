const db = require('../config/db');

// Cadastrar produto (POST) — já existente
exports.cadastrarProduto = (req, res) => {
  const { nome, tipo_tecido, quantidade, andamento, prioridade } = req.body;

  const sql = 'INSERT INTO produtos(nome,tipo_tecido,quantidade,andamento,prioridade) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [nome, tipo_tecido, quantidade, andamento, prioridade], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro ao adicionar produto' });
    }
    res.json({ mensagem: 'Produto adicionado com sucesso!' });
  });
};

// Listar todos os produtos (GET) — nova função
exports.listarProdutos = (req, res) => {
  const sql = "SELECT * FROM produtos ORDER BY id DESC"; // mais recentes primeiro
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro ao listar produtos' });
    }
    res.json(results);
  });
};