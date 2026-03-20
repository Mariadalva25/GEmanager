const db = require("../config/db");

const Produtos = {

  getAll: (cb) => {
    db.query("SELECT * FROM produtos", cb);
  },

  create: (data, cb) => {
    db.query("INSERT INTO produtos SET ?", data, cb);
  },

  update: (id, data, cb) => {
    db.query("UPDATE produtos SET ? WHERE id=?", [data, id], cb);
  },

  delete: (id, cb) => {
    db.query("DELETE FROM produtos WHERE id=?", [id], cb);
  }

};

module.exports = Produtos;