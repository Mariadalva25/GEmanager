import { useState, useEffect } from "react";
import api from "../../services/API";
import { Container, Header, Button, Card, Badge, Modal, ModalContent, SubModal, SubModalContent } from "./style";
import { FaTimes, FaTrash } from "react-icons/fa";

export default function Home() {
  const [pedidos, setPedidos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [subModal, setSubModal] = useState({ cliente: false, produto: false });
  const [form, setForm] = useState({
    cliente_id: "",
    produto_id: "",
    quantidade: "",
    andamento: "EM ANDAMENTO",
    prioridade: "",
    data_entrega: "",
  });
  const [clienteForm, setClienteForm] = useState({ nome: "", email: "", telefone: "" });
  const [produtoForm, setProdutoForm] = useState({ nome: "", quantidade: "", cor: "", tipo_tecido: "", observacao: "" });

  useEffect(() => { carregarTudo(); }, []);

  const carregarTudo = async () => {
    const [p, c, pr] = await Promise.all([api.get("/pedidos"), api.get("/clientes"), api.get("/produtos")]);
    setPedidos(p.data.filter(p => p.andamento === "EM ANDAMENTO")); // apenas em andamento
    setClientes(c.data);
    setProdutos(pr.data);
  };

  const salvarPedido = async () => {
    if (!form.cliente_id || !form.produto_id || !form.quantidade || !form.prioridade) {
      return alert("Preencha todos os campos obrigatórios!");
    }
    await api.post("/pedidos", form);
    setForm({ cliente_id: "", produto_id: "", quantidade: "", andamento: "EM ANDAMENTO", prioridade: "", data_entrega: "" });
    setModalOpen(false);
    carregarTudo();
  };

  const deletarPedido = async (id) => {
    if (window.confirm("Deseja realmente excluir este pedido?")) {
      await api.delete(`/pedidos/${id}`);
      carregarTudo();
    }
  };

  const salvarCliente = async () => {
    if (!clienteForm.nome || !clienteForm.email) return alert("Preencha todos os campos!");
    await api.post("/clientes", clienteForm);
    setClienteForm({ nome: "", email: "", telefone: "" });
    setSubModal({ ...subModal, cliente: false });
    carregarTudo();
  };

  const salvarProduto = async () => {
    if (!produtoForm.nome || !produtoForm.quantidade || !produtoForm.cor || !produtoForm.tipo_tecido)
      return alert("Preencha todos os campos!");
    await api.post("/produtos", produtoForm);
    setProdutoForm({ nome: "", quantidade: "", cor: "", tipo_tecido: "", observacao: "" });
    setSubModal({ ...subModal, produto: false });
    carregarTudo();
  };

  return (
    <Container>
      <Header>Gerenciador de Estofados</Header>
      <Button onClick={() => setModalOpen(true)}>Adicionar Pedido</Button>

      {/* MODAL PEDIDO */}
      {modalOpen && (
        <Modal onClick={() => setModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Button style={{ alignSelf: "flex-end" }} onClick={() => setModalOpen(false)}><FaTimes /></Button>
            <h2>Adicionar Pedido</h2>

            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <Button onClick={() => setSubModal({ ...subModal, cliente: true })}>Cadastrar Cliente</Button>
              <Button onClick={() => setSubModal({ ...subModal, produto: true })}>Cadastrar Produto</Button>
            </div>

            <select value={form.cliente_id} onChange={e => setForm({ ...form, cliente_id: e.target.value })}>
              <option value="">Selecione Cliente</option>
              {clientes.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
            </select>

            <select value={form.produto_id} onChange={e => setForm({ ...form, produto_id: e.target.value })}>
              <option value="">Selecione Produto</option>
              {produtos.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
            </select>

            <input type="number" placeholder="Quantidade" value={form.quantidade} onChange={e => setForm({ ...form, quantidade: e.target.value })} />

            <select value={form.prioridade} onChange={e => setForm({ ...form, prioridade: e.target.value })}>
              <option value="">Selecione Prioridade</option>
              <option value="ALTA">Alta</option>
              <option value="MEDIA">Média</option>
              <option value="BAIXA">Baixa</option>
            </select>

            <input type="date" value={form.data_entrega} onChange={e => setForm({ ...form, data_entrega: e.target.value })} />

            <Button onClick={salvarPedido}>Salvar Pedido</Button>
          </ModalContent>
        </Modal>
      )}

      {/* SUBMODAL CLIENTE */}
      {subModal.cliente && (
        <SubModal onClick={() => setSubModal({ ...subModal, cliente: false })}>
          <SubModalContent onClick={e => e.stopPropagation()}>
            <Button style={{ alignSelf: "flex-end" }} onClick={() => setSubModal({ ...subModal, cliente: false })}><FaTimes /></Button>
            <h3>Adicionar Cliente</h3>
            <input placeholder="Nome" value={clienteForm.nome} onChange={e => setClienteForm({ ...clienteForm, nome: e.target.value })} />
            <input placeholder="Email" value={clienteForm.email} onChange={e => setClienteForm({ ...clienteForm, email: e.target.value })} />
            <input placeholder="Telefone" value={clienteForm.telefone} onChange={e => setClienteForm({ ...clienteForm, telefone: e.target.value })} />
            <Button onClick={salvarCliente}>Salvar Cliente</Button>
          </SubModalContent>
        </SubModal>
      )}

      {/* SUBMODAL PRODUTO */}
      {subModal.produto && (
        <SubModal onClick={() => setSubModal({ ...subModal, produto: false })}>
          <SubModalContent onClick={e => e.stopPropagation()}>
            <Button style={{ alignSelf: "flex-end" }} onClick={() => setSubModal({ ...subModal, produto: false })}><FaTimes /></Button>
            <h3>Adicionar Produto</h3>
            <input placeholder="Nome" value={produtoForm.nome} onChange={e => setProdutoForm({ ...produtoForm, nome: e.target.value })} />
            <input type="number" placeholder="Quantidade" value={produtoForm.quantidade} onChange={e => setProdutoForm({ ...produtoForm, quantidade: e.target.value })} />
            <input placeholder="Cor" value={produtoForm.cor} onChange={e => setProdutoForm({ ...produtoForm, cor: e.target.value })} />
            <select value={produtoForm.tipo_tecido} onChange={e => setProdutoForm({ ...produtoForm, tipo_tecido: e.target.value })}>
              <option value="">Selecione Tecido</option>
              <option value="SUEDE">Suede</option>
              <option value="COURINHO">Courinho</option>
              <option value="LUXO">Luxo</option>
              <option value="LINHO">Linho</option>
            </select>
            <textarea placeholder="Observação" value={produtoForm.observacao} onChange={e => setProdutoForm({ ...produtoForm, observacao: e.target.value })} />
            <Button onClick={salvarProduto}>Salvar Produto</Button>
          </SubModalContent>
        </SubModal>
      )}

      {/* LISTA PEDIDOS */}
      {pedidos.map(p => (
        <Card key={p.id}>
          <p><b>Cliente:</b> {p.cliente_nome}</p>
          <p><b>Produto:</b> {p.produto_nome}</p>
          <p><b>Qtd:</b> {p.quantidade}</p>
          <p><b>Status:</b> <Badge tipo="status">{p.andamento}</Badge></p>
          <p><b>Prioridade:</b> <Badge tipo="prioridade">{p.prioridade}</Badge></p>
          <p><b>Entrega:</b> {p.data_entrega}</p>
          <Button onClick={() => deletarPedido(p.id)} style={{ backgroundColor: "#e74c3c" }}>
            <FaTrash /> Deletar
          </Button>
        </Card>
      ))}
    </Container>
  );
}