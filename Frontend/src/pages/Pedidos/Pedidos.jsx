import { useState, useEffect } from "react";
import api from "../../services/API";
import { Container, Header, Button, Card, Modal, ModalContent, Select, Input } from "./style";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    cliente_id: "",
    descricao: "",
    data_entrega: "",
    andamento: "pendente",
    prioridade: "media"
  });
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    carregarPedidos();
    carregarClientes();
  }, []);

  const carregarPedidos = async () => {
    const res = await api.get("/pedidos");
    setPedidos(res.data);
  };

  const carregarClientes = async () => {
    const res = await api.get("/clientes");
    setClientes(res.data);
  };

  const salvarPedido = async () => {
    if (!form.cliente_id || !form.descricao || !form.data_entrega) {
      return alert("Preencha todos os campos obrigatórios!");
    }

    try {
      if (edit) {
        await api.put(`/pedidos/${edit}`, form);
      } else {
        await api.post("/pedidos", form);
      }
      setForm({
        cliente_id: "",
        descricao: "",
        data_entrega: "",
        andamento: "pendente",
        prioridade: "media"
      });
      setEdit(null);
      setModalOpen(false);
      carregarPedidos();
    } catch (error) {
      console.error("Erro ao salvar pedido:", error);
      alert("Ocorreu um erro ao salvar o pedido. Verifique os dados e tente novamente.");
    }
  };

  const editarPedido = (p) => {
    setForm({
      cliente_id: p.cliente_id,
      descricao: p.descricao,
      data_entrega: p.data_entrega,
      andamento: p.andamento,
      prioridade: p.prioridade
    });
    setEdit(p.id);
    setModalOpen(true);
  };

  const deletarPedido = async (id) => {
    if (window.confirm("Deseja realmente excluir este pedido?")) {
      await api.delete(`/pedidos/${id}`);
      carregarPedidos();
    }
  };

  return (
    <Container>
      <Header>Pedidos</Header>
      <Button onClick={() => setModalOpen(true)}>Adicionar Pedido</Button>

      {modalOpen && (
        <Modal onClick={() => setModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Button style={{ alignSelf: "flex-end" }} onClick={() => setModalOpen(false)}>
              <FaTimes />
            </Button>
            <h2>{edit ? "Editar Pedido" : "Adicionar Pedido"}</h2>

            <Select
              value={form.cliente_id}
              onChange={e => setForm({ ...form, cliente_id: e.target.value })}
            >
              <option value="">Selecione o Cliente</option>
              {clientes.map(c => (
                <option key={c.id} value={c.id}>{c.nome}</option>
              ))}
            </Select>

            <Input
              type="text"
              placeholder="Descrição do Pedido"
              value={form.descricao}
              onChange={e => setForm({ ...form, descricao: e.target.value })}
            />

            <Input
              type="date"
              placeholder="Data de Entrega"
              value={form.data_entrega}
              onChange={e => setForm({ ...form, data_entrega: e.target.value })}
            />

            <Select
              value={form.andamento}
              onChange={e => setForm({ ...form, andamento: e.target.value })}
            >
              <option value="pendente">Pendente</option>
              <option value="em_producao">Em Produção</option>
              <option value="pronto">Pronto</option>
            </Select>

            <Select
              value={form.prioridade}
              onChange={e => setForm({ ...form, prioridade: e.target.value })}
            >
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </Select>

            <Button onClick={salvarPedido}>{edit ? "Atualizar" : "Salvar"}</Button>
          </ModalContent>
        </Modal>
      )}

      {pedidos.map(p => (
        <Card key={p.id}>
          <p><b>Cliente:</b> {p.cliente_nome}</p>
          <p><b>Descrição:</b> {p.descricao}</p>
          <p><b>Data de Entrega:</b> {p.data_entrega}</p>
          <p><b>Andamento:</b> {p.andamento}</p>
          <p><b>Prioridade:</b> {p.prioridade}</p>

          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={() => editarPedido(p)}><FaEdit /></Button>
            <Button onClick={() => deletarPedido(p.id)} style={{ backgroundColor: "#e74c3c" }}><FaTrash /></Button>
          </div>
        </Card>
      ))}
    </Container>
  );
}