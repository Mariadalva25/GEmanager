const db = require('../config/db');

exports.cadastrarUsuario = (req, res) => {
  const { nome, email, senha } = req.body;

  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';

  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro ao cadastrar' });
    }

    res.json({ mensagem: 'Cadastrado com sucesso!' });
  });
};