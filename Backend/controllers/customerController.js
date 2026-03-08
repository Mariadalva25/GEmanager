const db = require('../config/db');

exports.cadastrarClientes =(req,res) => {
     const{nome,endereco} = req.body;


  const sql = 'INSERT INTO clientes(nome,endereco) VALUES (?, ?)';

  db.query(sql, [nome,endereco],(err, result) => {

    
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro ao cadastrar cliente' });
    }

    res.json({ mensagem: ' cliente cadastrado com sucesso!' });
    
  });
};
 