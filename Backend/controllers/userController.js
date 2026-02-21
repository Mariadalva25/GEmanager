const User = require('../models/User');

exports.registrarUsuario = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        await User.Create(NamedNodeMap, email, password);
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar no banco.'});
    }
};