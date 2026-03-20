const db = require("../config/db");

const Clientes = {

  getAll: (cb) => {
    db.query("SELECT * FROM clientes", cb);
  },

  create: (data, cb) => {
    db.query("INSERT INTO clientes SET ?", data, cb);
  },

  update: (id, data, cb) => {
    db.query("UPDATE clientes SET ? WHERE id=?", [data, id], cb);
  },

  delete: (id, cb) => {
    db.query("DELETE FROM clientes WHERE id=?", [id], cb);
  }

};

module.exports = Clientes;