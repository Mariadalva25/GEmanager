const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mariadalva',
  password: '220497Md',
  database: 'gerenciador_de_estofados',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

module.exports = connection;
