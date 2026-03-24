const db = require("../config/db");

const Pedidos = {
  getAll: (callback) => {
    db.query(`
      SELECT 
        pedidos.*, 
        clientes.nome AS cliente_nome,
        produtos.nome AS produto_nome
      FROM pedidos
      LEFT JOIN clientes ON pedidos.cliente_id = clientes.id
      LEFT JOIN produtos ON pedidos.produto_id = produtos.id
    `, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  create: (pedido, callback) => {
    db.query("INSERT INTO pedidos SET ?", pedido, (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },

  update: (id, pedido, callback) => {
    db.query("UPDATE pedidos SET ? WHERE id = ?", [pedido, id], (err, result) => {
      if (err) return callback(err);
      if (result.affectedRows === 0) return callback(null, null);
      callback(null, result);
    });
  },

  delete: (id, callback) => {
    db.query("DELETE FROM pedidos WHERE id = ?", [id], (err, result) => {
      if (err) return callback(err);
      if (result.affectedRows === 0) return callback(null, null);
      callback(null, result);
    });
  }
};

module.exports = Pedidos;