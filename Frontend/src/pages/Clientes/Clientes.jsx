import { useState, useEffect } from "react";
import api from "../../services/API";
import { Container, Header, Button, Card, Modal, ModalContent, Input } from "./style";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", endereco: "", telefone: "" });
  const [edit, setEdit] = useState(null);

  useEffect(() => { carregarClientes(); }, []);

  const carregarClientes = async () => {
    try {
      const res = await api.get("/clientes");
      setClientes(res.data);
    } catch (err) {
      console.error("Erro ao carregar clientes:", err);
    }
  };

  const salvarCliente = async () => {
    if (!form.nome || !form.endereco || !form.telefone) {
      return alert("Preencha todos os campos obrigatórios!");
    }

    try {
      if (edit) {
        await api.put(`/clientes/${edit}`, form);
      } else {
        await api.post("/clientes", form);
      }
      setForm({ nome: "", endereco: "", telefone: "" });
      setEdit(null);
      setModalOpen(false);
      carregarClientes();
    } catch (err) {
      console.error("Erro ao salvar cliente:", err);
      alert("Ocorreu um erro ao salvar o cliente.");
    }
  };

  const editarCliente = (c) => { setForm(c); setEdit(c.id); setModalOpen(true); };

  const deletarCliente = async (id) => {
    if (window.confirm("Deseja realmente excluir este cliente?")) {
      try {
        await api.delete(`/clientes/${id}`);
        carregarClientes();
      } catch (err) {
        console.error("Erro ao deletar cliente:", err);
        alert("Ocorreu um erro ao deletar o cliente.");
      }
    }
  };

  return (
    <Container>
      <Header>Clientes</Header>
      <Button onClick={() => setModalOpen(true)}>Adicionar Cliente</Button>

      {modalOpen && (
        <Modal onClick={() => setModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Button style={{ alignSelf: "flex-end" }} onClick={() => setModalOpen(false)}>
              <FaTimes />
            </Button>
            <h2>{edit ? "Editar Cliente" : "Adicionar Cliente"}</h2>
            <Input
              placeholder="Nome"
              value={form.nome}
              onChange={e => setForm({ ...form, nome: e.target.value })}
            />
            <Input
              placeholder="Endereço"
              value={form.endereco}
              onChange={e => setForm({ ...form, endereco: e.target.value })}
            />
            <Input
              placeholder="Telefone"
              value={form.telefone}
              onChange={e => setForm({ ...form, telefone: e.target.value })}
            />
            <Button onClick={salvarCliente}>{edit ? "Atualizar" : "Salvar"}</Button>
          </ModalContent>
        </Modal>
      )}

      {clientes.map(c => (
        <Card key={c.id}>
          <p><b>Nome:</b> {c.nome}</p>
          <p><b>Endereço:</b> {c.endereco}</p>
          <p><b>Telefone:</b> {c.telefone}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={() => editarCliente(c)}><FaEdit /></Button>
            <Button onClick={() => deletarCliente(c.id)} style={{ backgroundColor: "#e74c3c" }}>
              <FaTrash />
            </Button>
          </div>
        </Card>
      ))}
    </Container>
  );
}