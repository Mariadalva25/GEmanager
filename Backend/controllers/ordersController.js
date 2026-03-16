const db = require('../config/db');

// Cadastrar pedido completo
exports.cadastrarPedidos = (req, res) => {
  const { produto, quantidade, cliente, endereco, tecido, andamento, entrega, prioridade } = req.body;

  // validação simples
  if (!produto || !cliente) {
    return res.status(400).json({ erro: "Preencha pelo menos produto e cliente" });
  }

  const sql = `
    INSERT INTO pedidos(produto, quantidade, cliente, endereco, tecido, andamento, entrega, prioridade)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [produto, quantidade, cliente, endereco, tecido, andamento, entrega, prioridade],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ erro: 'Erro ao realizar pedido' });
      }
      res.json({ mensagem: 'Pedido adicionado com sucesso!' });
    }
  );
};

// Listar todos os pedidos
exports.listarPedidos = (req, res) => {
  const sql = "SELECT * FROM pedidos ORDER BY id DESC"; // mostra os mais recentes primeiro

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro ao listar pedidos' });
    }
    res.json(results);
  });
};