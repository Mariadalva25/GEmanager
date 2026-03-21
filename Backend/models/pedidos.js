const db = require("../config/db");

const Pedidos = {
  getAll: (callback) => {
    db.query("SELECT * FROM pedidos", (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM pedidos WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },

  create: (pedido, callback) => {
    db.query("INSERT INTO pedidos SET ?", pedido, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  update: (id, pedido, callback) => {
    db.query("UPDATE pedidos SET ? WHERE id = ?", [pedido, id], (err, results) => {
      if (err) return callback(err);
      if (results.affectedRows === 0) return callback(null, null);
      callback(null, results);
    });
  },

  delete: (id, callback) => {
    db.query("DELETE FROM pedidos WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err);
      if (results.affectedRows === 0) return callback(null, null);
      callback(null, results);
    });
  },
};

module.exports = Pedidos;