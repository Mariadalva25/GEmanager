const db = require('../config/db');

exports.cadastrarProduto = (req, res) => {
 const { nome, tipo_tecido, quantidade, andamento, prioridade } = req.body;

  const sql =  'INSERT INTO produtos(nome,tipo_tecido,quantidade,andamento,prioridade) VALUES (?, ?, ?,?,?)';

  db.query(sql, [nome,tipo_tecido,quantidade,andamento,prioridade], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro ao adicionar produto' });
    }

    res.json({ mensagem: 'Produto adicionado com sucesso!' });
  });
};