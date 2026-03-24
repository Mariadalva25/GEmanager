const salvar = async () => {
  try {

    if (abaAtiva === "produto") {
      await api.post("/produtos", produtoForm);
      setAbaAtiva("cliente");
    }

    else if (abaAtiva === "cliente") {
      await api.post("/clientes", clienteForm);
      setAbaAtiva("pedido");
    }

    else {
      // ✅ VALIDAÇÃO
      if (!pedidoForm.cliente_id || !pedidoForm.produto_id || !pedidoForm.data_entrega) {
        alert("Preencha cliente, produto e data!");
        return;
      }

      // ✅ ENVIO CORRETO
      await api.post("/pedidos", {
        descricao: pedidoForm.descricao,
        data_entrega: pedidoForm.data_entrega,
        prioridade: pedidoForm.prioridade,
        andamento: pedidoForm.andamento,
        cliente_id: pedidoForm.cliente_id,
        produto_id: pedidoForm.produto_id
      });

      carregarTudo();
      onClose();
    }

  } catch (err) {
    console.error(err);
    alert("Erro ao salvar");
  }
};
export default AdicionarPedido;
