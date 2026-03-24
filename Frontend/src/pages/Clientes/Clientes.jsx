import { useState, useEffect } from "react";
import api from "../../services/API";
import { Container, Header, Button, Card, Modal, ModalContent } from "./style";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", endereco: "", telefone: "" });
  const [edit, setEdit] = useState(null);

  useEffect(() => { carregarClientes(); }, []);

  const carregarClientes = async () => {
    const res = await api.get("/clientes");
    setClientes(res.data);
  };

  const salvarCliente = async () => {
    if (!form.nome || !form.endereco || !form.telefone) {
      return alert("Preencha tudo!");
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
      console.error(err);
      alert("Erro ao salvar cliente");
    }
  };

  const editarCliente = (c) => {
    setForm({
      nome: c.nome || "",
      endereco: c.endereco || "",
      telefone: c.telefone || ""
    });
    setEdit(c.id);
    setModalOpen(true);
  };

  const deletarCliente = async (id) => {
    if (window.confirm("Deseja excluir?")) {
      await api.delete(`/clientes/${id}`);
      carregarClientes();
    }
  };

  return (
    <Container>
      <Header>Clientes</Header>
      <Button onClick={() => setModalOpen(true)}>Adicionar Cliente</Button>

      {modalOpen && (
        <Modal onClick={() => setModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Button onClick={() => setModalOpen(false)}><FaTimes /></Button>

            <input placeholder="Nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} />
            <input placeholder="Endereço" value={form.endereco} onChange={e => setForm({ ...form, endereco: e.target.value })} />
            <input placeholder="Telefone" value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} />

            <Button onClick={salvarCliente}>{edit ? "Atualizar" : "Salvar"}</Button>
          </ModalContent>
        </Modal>
      )}

      {clientes.map(c => (
        <Card key={c.id}>
          <p><b>{c.nome}</b></p>
          <p><b>Endereço:</b> {c.endereco}</p>
          <p>{c.telefone}</p>

          <Button onClick={() => editarCliente(c)}><FaEdit /></Button>
          <Button onClick={() => deletarCliente(c.id)} style={{background:"#e74c3c"}}><FaTrash /></Button>
        </Card>
      ))}
    </Container>
  );
}