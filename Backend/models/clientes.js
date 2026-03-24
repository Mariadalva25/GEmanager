const db = require("../config/db");

const Clientes = {
  getAll: (callback) => {
    db.query("SELECT * FROM clientes", (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM clientes WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },

  create: (cliente, callback) => {
    db.query("INSERT INTO clientes SET ?", cliente, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  update: (id, cliente, callback) => {
    const query = `
      UPDATE clientes SET nome=?, endereco=?, telefone=?
      WHERE id=?
    `;
    const params = [
      cliente.nome,
      cliente.endereco,
      cliente.telefone,
      id
    ];
    db.query(query, params, (err, results) => {
      if (err) return callback(err);
      if (results.affectedRows === 0) return callback(null, null);
      callback(null, results);
    });
  },

  delete: (id, callback) => {
    db.query("DELETE FROM clientes WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err);
      if (results.affectedRows === 0) return callback(null, null);
      callback(null, results);
    });
  },
};

module.exports = Clientes;