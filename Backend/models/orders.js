const db = require('../config/db');

const orders= {
    create: async (produtos,clientes) => {
        const sql = 'INSERT INTO pedidos (produtos,clientes) VALUES (?, ?)';
        return await db.execute(sql, [produtos,clientes]);
    }
};

module.exports = orders;