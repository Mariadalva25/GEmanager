const db = require('../config/db');

const product = {
    create: async (nome,tipo_tecido,quantidade,andamento,prioridade) => {
        const sql = 'INSERT INTO produtos (nome,tipo_tecido,quantidade,andamento,prioridade) VALUES (?, ?, ?,?,?)';
        return await db.execute(sql, [nome,tipo_tecido,quantidade,andamento,prioridade]);
    }
};

module.exports = product;