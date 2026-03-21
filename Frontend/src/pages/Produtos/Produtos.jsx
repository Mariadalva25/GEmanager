import { useState, useEffect } from "react";
import api from "../../services/API";
import { Container, Header, Button, Card, Modal, ModalContent } from "./style";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", quantidade: "", cor: "", tipo_tecido: "", observacao: "" });
  const [edit, setEdit] = useState(null);

  useEffect(() => { carregarProdutos(); }, []);
  const carregarProdutos = async () => { const res = await api.get("/produtos"); setProdutos(res.data); };

  const salvarProduto = async () => {
    if (!form.nome || !form.quantidade || !form.cor || !form.tipo_tecido) return alert("Preencha todos os campos!");
    if (edit) await api.put(`/produtos/${edit}`, form); else await api.post("/produtos", form);
    setForm({ nome: "", quantidade: "", cor: "", tipo_tecido: "", observacao: "" });
    setEdit(null);
    setModalOpen(false);
    carregarProdutos();
  };

  const editarProduto = (p) => { setForm(p); setEdit(p.id); setModalOpen(true); };
  const deletarProduto = async (id) => { if (window.confirm("Deseja realmente excluir este produto?")) { await api.delete(`/produtos/${id}`); carregarProdutos(); } };

  return (
    <Container>
      <Header>Produtos</Header>
      <Button onClick={() => setModalOpen(true)}>Adicionar Produto</Button>

      {modalOpen && (
        <Modal onClick={() => setModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Button style={{ alignSelf: "flex-end" }} onClick={() => setModalOpen(false)}><FaTimes /></Button>
            <h2>{edit ? "Editar Produto" : "Adicionar Produto"}</h2>
            <input placeholder="Nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} />
            <input type="number" placeholder="Quantidade" value={form.quantidade} onChange={e => setForm({ ...form, quantidade: e.target.value })} />
            <input placeholder="Cor" value={form.cor} onChange={e => setForm({ ...form, cor: e.target.value })} />
            <select value={form.tipo_tecido} onChange={e => setForm({ ...form, tipo_tecido: e.target.value })}>
              <option value="">Selecione o tecido</option>
              <option value="SUEDE">Suede</option>
              <option value="COURINHO">Courinho</option>
              <option value="LUXO">Luxo</option>
              <option value="LINHO">Linho</option>
            </select>
            <textarea placeholder="Observação" value={form.observacao} onChange={e => setForm({ ...form, observacao: e.target.value })} />
            <Button onClick={salvarProduto}>{edit ? "Atualizar" : "Salvar"}</Button>
          </ModalContent>
        </Modal>
      )}

      {produtos.map(p => (
        <Card key={p.id}>
          <p><b>Nome:</b> {p.nome}</p>
          <p><b>Qtd:</b> {p.quantidade}</p>
          <p><b>Cor:</b> {p.cor}</p>
          <p><b>Tecido:</b> {p.tipo_tecido}</p>
          <p><b>Obs:</b> {p.observacao}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={() => editarProduto(p)}><FaEdit /></Button>
            <Button onClick={() => deletarProduto(p.id)} style={{ backgroundColor: "#e74c3c" }}><FaTrash /></Button>
          </div>
        </Card>
      ))}
    </Container>
  );
}