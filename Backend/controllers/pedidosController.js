const Pedidos = require("../models/pedidos");

exports.getAll = (req, res) => {
  Pedidos.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.create = (req, res) => {
  const {
    descricao,
    data_entrega,
    prioridade,
    andamento,
    cliente_id,
    produto_id
  } = req.body;

  // ✅ VALIDAÇÃO (EVITA ERRO 500)
  if (!cliente_id || !produto_id || !data_entrega) {
    return res.status(400).json({
      message: "Cliente, produto e data de entrega são obrigatórios"
    });
  }

  const novoPedido = {
    descricao,
    data_entrega,
    prioridade: prioridade || "media",
    andamento: andamento || "pendente",
    cliente_id,
    produto_id
  };

  Pedidos.create(novoPedido, (err, result) => {
    if (err) {
      console.error("ERRO AO INSERIR PEDIDO:", err);
      return res.status(500).json(err);
    }

    res.json({ ...novoPedido, id: result.insertId });
  });
};

exports.update = (req, res) => {
  Pedidos.update(req.params.id, req.body, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Pedido não encontrado" });

    res.json({ message: "Pedido atualizado!" });
  });
};

exports.delete = (req, res) => {
  Pedidos.delete(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Pedido não encontrado" });

    res.json({ message: "Pedido excluído!" });
  });
};