const db = require("../config/db");

const Produtos = {
  getAll: (callback) => {
    db.query("SELECT * FROM produtos", (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM produtos WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },

  create: (produto, callback) => {
    db.query("INSERT INTO produtos SET ?", produto, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  update: (id, produto, callback) => {
    db.query("UPDATE produtos SET ? WHERE id = ?", [produto, id], (err, results) => {
      if (err) return callback(err);
      if (results.affectedRows === 0) return callback(null, null);
      callback(null, results);
    });
  },

  delete: (id, callback) => {
    db.query("DELETE FROM produtos WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err);
      if (results.affectedRows === 0) return callback(null, null);
      callback(null, results);
    });
  },
};

module.exports = Produtos;