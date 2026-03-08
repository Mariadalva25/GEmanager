const db = require('../config/db');
exports.cadastrarPedidos =(req,res) => {
    const{produtos,clientes} = req.body;
    if (!produtos || !clientes) {
    return res.status(400).json({ erro: "Preencha produtos e clientes" });
  }

  const sql =  'INSERT INTO pedidos(produtos,clientes) VALUES (?, ?)';

  db.query(sql, [produtos,clientes],(err, result) => {

    
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro ao realizar pedido' });
    }

    res.json({ mensagem: 'Pedido adicionado com sucesso!' });
    
  });
};
 