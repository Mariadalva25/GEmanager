const db = require('../config/db');

exports.cadastrarUsuario = (req, res) => {

  const { nome, email, senha } = req.body;

  // validação
  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: "Preencha todos os campos" });
  }

  // verificar se email já existe
  const verificaEmail = "SELECT * FROM usuarios WHERE email = ?";

  db.query(verificaEmail, [email], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).json({ erro: "Erro no servidor" });
    }

    if (result.length > 0) {
      return res.status(400).json({ erro: "Email já cadastrado" });
    }

    const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

    db.query(sql, [nome, email, senha], (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).json({ erro: "Erro ao cadastrar usuário" });
      }

      res.status(201).json({
        mensagem: "Usuário cadastrado com sucesso",
        id: result.insertId
      });

    });

  });

};