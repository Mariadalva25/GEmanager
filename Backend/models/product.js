const db = require('../config/db');

const Product = {
    create: async (nome,tipo_tecido,quantidade,status,prioridade) => {
        const sql = 'INSERT INTO produtos (nome,tipo_tecido,quantidade,status,prioridade) VALUES (?, ?, ?)';
        return await db.execute(sql, [nome,tipo_tecido,quantidade,status,prioridade]);
    }
};

module.exports = Product;