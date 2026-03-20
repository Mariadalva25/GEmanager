const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM pedidos", callback);
};

exports.getAtivos = (callback) => {
  db.query("SELECT * FROM pedidos WHERE andamento != 'pronto'", callback);
};

exports.create = (data, callback) => {
  db.query("INSERT INTO pedidos SET ?", data, callback);
};

exports.update = (id, data, callback) => {
  db.query("UPDATE pedidos SET ? WHERE id=?", [data, id], callback);
};

exports.delete = (id, callback) => {
  db.query("DELETE FROM pedidos WHERE id=?", [id], callback);
};