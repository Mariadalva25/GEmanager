const db = require('../config/db');

exports.login = (req, res) => {
  const { email, senha } = req.body;


  if (!email || !senha) {
    return res.status(400).json({ erro: "Preencha email e senha" });
  }

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';

  db.query(sql, [email, senha], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: "Erro no login" });
    }

    if (result.length === 0) {
      return res.status(401).json({ erro: "Email ou senha incorretos" });
    }


    res.json({ mensagem: "Login realizado com sucesso!", usuario: result[0] });
  });
};