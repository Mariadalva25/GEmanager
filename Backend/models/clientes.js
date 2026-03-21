const db = require("../config/db"); // ajuste o caminho para sua conexão MySQL

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
    db.query("UPDATE clientes SET ? WHERE id = ?", [cliente, id], (err, results) => {
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