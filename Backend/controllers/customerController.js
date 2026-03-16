const db = require('../config/db');

exports.cadastrarClientes = (req, res) => {
  const { nome, endereco } = req.body;
  const sql = 'INSERT INTO clientes(nome,endereco) VALUES (?, ?)';
  db.query(sql, [nome, endereco], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro ao cadastrar cliente' });
    }
    res.json({ mensagem: 'Cliente cadastrado com sucesso!' });
  });
};

exports.listarClientes = (req, res) => {
  const sql = 'SELECT * FROM clientes ORDER BY id DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro ao listar clientes' });
    }
    res.json(results);
  });
};