const db = require('../config/db');

const Produtos = {
  getAll: (cb) => db.query("SELECT * FROM produtos WHERE ativo=1", cb),
  create: (data, cb) => db.query("INSERT INTO produtos SET ?", data, cb),
  update: (id, data, cb) => db.query("UPDATE produtos SET ? WHERE id=?", [data, id], cb),
  delete: (id, cb) => db.query("UPDATE produtos SET ativo=0 WHERE id=?", [id], cb) // soft delete
};

module.exports = Produtos;