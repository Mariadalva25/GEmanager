import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/API";
import { Container, Input, Select, Button, ModalOverlay, ModalBox } from "./Pedidos/style";

export default function AdicionarPedido() {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    cliente_id: "",
    produto_id: "",
    quantidade: "",
    andamento: "EM ANDAMENTO",
    prioridade: "MEDIA",
    data_entrega: ""
  });

  const [open, setOpen] = useState(true); // controla se o modal está aberto

  useEffect(() => {
    const carregar = async () => {
      const [c, p] = await Promise.all([api.get("/clientes"), api.get("/produtos")]);
      setClientes(c.data);
      setProdutos(p.data);
    };
    carregar();
  }, []);

  const salvar = async () => {
    if (!form.cliente_id || !form.produto_id || !form.quantidade) {
      return alert("Preencha todos os campos obrigatórios!");
    }
    await api.post("/pedidos", form);
    setForm({
      cliente_id: "",
      produto_id: "",
      quantidade: "",
      andamento: "EM ANDAMENTO",
      prioridade: "MEDIA",
      data_entrega: ""
    });
    setOpen(false); // fecha modal
    navigate("/home");
  };

  if (!open) return null; // se modal fechado, não renderiza nada

  return (
    <ModalOverlay>
      <ModalBox>
        <h3>Adicionar Pedido</h3>
        <Button onClick={() => setOpen(false)}>Fechar</Button>

        <div style={{ marginBottom: "10px" }}>
          <Button onClick={() => navigate("/clientes")}>Cadastrar Cliente</Button>
          <Button onClick={() => navigate("/produtos")}>Cadastrar Produto</Button>
        </div>

        <Select value={form.cliente_id} onChange={e => setForm({ ...form, cliente_id: e.target.value })}>
          <option value="">Selecione o cliente</option>
          {clientes.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
        </Select>

        <Select value={form.produto_id} onChange={e => setForm({ ...form, produto_id: e.target.value })}>
          <option value="">Selecione o produto</option>
          {produtos.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
        </Select>

        <Input type="number" placeholder="Quantidade" value={form.quantidade} onChange={e => setForm({ ...form, quantidade: e.target.value })} />

        <Select value={form.andamento} onChange={e => setForm({ ...form, andamento: e.target.value })}>
          <option value="EM ANDAMENTO">Em andamento</option>
          <option value="FINALIZADO">Finalizado</option>
          <option value="ATRASADO">Atrasado</option>
        </Select>

        <Select value={form.prioridade} onChange={e => setForm({ ...form, prioridade: e.target.value })}>
          <option value="ALTA">Alta</option>
          <option value="MEDIA">Média</option>
          <option value="BAIXA">Baixa</option>
        </Select>

        <Input type="date" value={form.data_entrega} onChange={e => setForm({ ...form, data_entrega: e.target.value })} />

        <Button onClick={salvar}>Salvar Pedido</Button>
      </ModalBox>
    </ModalOverlay>
  );
}