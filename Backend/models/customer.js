const db = require('../config/db');

const customer= {
    create: async (nome,endereco) => {
        const sql = 'INSERT INTO clientes (nome,endereco) VALUES (?, ?)';
        return await db.execute(sql, [nome,endereco]);
    }
};

module.exports = customer;