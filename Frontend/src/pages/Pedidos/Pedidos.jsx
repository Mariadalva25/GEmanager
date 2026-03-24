import { useState, useEffect } from "react";
import api from "../../services/API";

import {
  Container,
  Header,
  Button,
  Card,
  Modal,
  ModalContent,
  Select,
  Input,
  FormGroup,
  Label,
  Badge
} from "./style";

import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    cliente_id: "",
    produto_id: "",
    descricao: "",
    data_entrega: "",
    andamento: "pendente",
    prioridade: "media"
  });

  const [edit, setEdit] = useState(null);

  useEffect(() => {
    carregarTudo();
  }, []);

  const carregarTudo = async () => {
    const [p, c, pr] = await Promise.all([
      api.get("/pedidos"),
      api.get("/clientes"),
      api.get("/produtos")
    ]);

    setPedidos(p.data);
    setClientes(c.data);
    setProdutos(pr.data);
  };

  const salvarPedido = async () => {
    if (!form.cliente_id || !form.produto_id || !form.data_entrega) {
      return alert("Preencha os campos obrigatórios!");
    }

    if (edit) {
      await api.put(`/pedidos/${edit}`, form);
    } else {
      await api.post("/pedidos", form);
    }

    setForm({
      cliente_id: "",
      produto_id: "",
      descricao: "",
      data_entrega: "",
      andamento: "pendente",
      prioridade: "media"
    });

    setEdit(null);
    setModalOpen(false);
    carregarTudo();
  };

  const editarPedido = (p) => {
    setForm({
      cliente_id: p.cliente_id,
      produto_id: p.produto_id,
      descricao: p.descricao,
      data_entrega: p.data_entrega?.split("T")[0],
      andamento: p.andamento,
      prioridade: p.prioridade
    });

    setEdit(p.id);
    setModalOpen(true);
  };

  const deletarPedido = async (id) => {
    if (window.confirm("Deseja excluir?")) {
      await api.delete(`/pedidos/${id}`);
      carregarTudo();
    }
  };

  return (
    <Container>
      <Header>Pedidos</Header>

      <Button onClick={() => setModalOpen(true)}>Novo Pedido</Button>

      {modalOpen && (
        <Modal onClick={() => setModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>

            <Button onClick={() => setModalOpen(false)}>
              <FaTimes />
            </Button>

            <h2>{edit ? "Editar" : "Novo"} Pedido</h2>

            <FormGroup>
              <Label>Cliente</Label>
              <Select
                value={form.cliente_id}
                onChange={e => setForm({ ...form, cliente_id: e.target.value })}
              >
                <option value="">Selecione</option>
                {clientes.map(c => (
                  <option key={c.id} value={c.id}>{c.nome}</option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Produto</Label>
              <Select
                value={form.produto_id}
                onChange={e => setForm({ ...form, produto_id: e.target.value })}
              >
                <option value="">Selecione</option>
                {produtos.map(p => (
                  <option key={p.id} value={p.id}>{p.nome}</option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Descrição</Label>
              <Input
                value={form.descricao}
                onChange={e => setForm({ ...form, descricao: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label>Data</Label>
              <Input
                type="date"
                value={form.data_entrega}
                onChange={e => setForm({ ...form, data_entrega: e.target.value })}
              />
            </FormGroup>

            <Button onClick={salvarPedido}>
              {edit ? "Atualizar" : "Salvar"}
            </Button>

          </ModalContent>
        </Modal>
      )}

      {pedidos.map(p => (
        <Card key={p.id}>
          <p><b>{p.produto_nome}</b></p>
          <p>Cliente: {p.cliente_nome}</p>
          <p>{p.descricao}</p>
          <p>{p.data_entrega?.split("T")[0]}</p>

          <Badge tipo="andamento">{p.andamento}</Badge>
          <Badge tipo="prioridade">{p.prioridade}</Badge>

          <div>
            <Button onClick={() => editarPedido(p)}><FaEdit /></Button>
            <Button onClick={() => deletarPedido(p.id)}><FaTrash /></Button>
          </div>
        </Card>
      ))}
    </Container>
  );
}