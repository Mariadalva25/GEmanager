const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

exports.register = async (req, res) => {
  try {
    const { nome, email, password } = req.body;

    // Verificar se email já existe
    const userExists = await prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    // Criptografar senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        nome,
        email,
        password: hashedPassword
      }
    });

    res.status(201).json({
      message: 'Usuário cadastrado com sucesso',
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};
