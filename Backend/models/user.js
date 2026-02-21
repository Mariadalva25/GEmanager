const db = require('../config/db');

const User = {
    create: async (nome, email, password) => {
        const sql = 'INSERT INTO usuarios (nome, email, password) VALUES (?, ?, ?)';
        return await db.execute(sql, [nome, email, password]);
    }
};

module.exports = User;