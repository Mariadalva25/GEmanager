const db = require('../config/db');

const Pedidos = {
  getAll: (cb) => {
    const sql = `
      SELECT pedidos.*, clientes.nome AS cliente_nome, produtos.nome AS produto_nome, produtos.cor, produtos.tipo_tecido
      FROM pedidos
      LEFT JOIN clientes ON pedidos.cliente_id = clientes.id
      LEFT JOIN produtos ON pedidos.produto_id = produtos.id
    `;
    db.query(sql, cb);
  },

  getAtivos: (cb) => {
    const sql = `
      SELECT pedidos.*, clientes.nome AS cliente_nome, produtos.nome AS produto_nome
      FROM pedidos
      LEFT JOIN clientes ON pedidos.cliente_id = clientes.id
      LEFT JOIN produtos ON pedidos.produto_id = produtos.id
      WHERE pedidos.andamento != 'pronto'
      ORDER BY FIELD(pedidos.prioridade, 'alta','media','baixa') DESC, pedidos.data_entrega ASC
    `;
    db.query(sql, cb);
  },

  create: (data, cb) => db.query("INSERT INTO pedidos SET ?", data, cb),
  update: (id, data, cb) => db.query("UPDATE pedidos SET ? WHERE id=?", [data, id], cb),
  delete: (id, cb) => db.query("DELETE FROM pedidos WHERE id=?", [id], cb)
};

module.exports = Pedidos;