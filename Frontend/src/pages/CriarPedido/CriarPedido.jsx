import { useState, useEffect } from "react";

export default function CriarPedido({ fechar, atualizarLista }) {
  const [form, setForm] = useState({
    produto: "",
    quantidade: "",
    cliente: "",
    endereco: "",
    tecido: "",
    andamento: "",
    entrega: "",
    prioridade: ""
  });

  const [produtos, setProdutos] = useState([]);
  const [clientes, setClientes] = useState([]);

  // Buscar produtos e clientes do backend ao carregar o form
  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then(res => res.json())
      .then(data => setProdutos(data));

    fetch("http://localhost:3000/clientes")
      .then(res => res.json())
      .then(data => setClientes(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarPedido = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/pedidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      alert("Pedido criado com sucesso!");
      setForm({
        produto: "",
        quantidade: "",
        cliente: "",
        endereco: "",
        tecido: "",
        andamento: "",
        entrega: "",
        prioridade: ""
      });
      if (atualizarLista) atualizarLista(); // atualiza lista de pedidos no Home
      fechar();
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form
        onSubmit={enviarPedido}
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "8px",
          width: "400px"
        }}
      >
        <h2>Novo Pedido</h2>

        {/* Select de Produtos */}
        <select name="produto" value={form.produto} onChange={handleChange} required>
          <option value="">Selecione um produto</option>
          {produtos.map((p) => (
            <option key={p.id} value={p.nome}>{p.nome}</option>
          ))}
        </select>

        <br/><br/>

        <input
          type="number"
          name="quantidade"
          placeholder="Quantidade"
          value={form.quantidade}
          onChange={handleChange}
          required
        />

        <br/><br/>

        {/* Select de Clientes */}
        <select name="cliente" value={form.cliente} onChange={handleChange} required>
          <option value="">Selecione um cliente</option>
          {clientes.map((c) => (
            <option key={c.id} value={c.nome}>{c.nome}</option>
          ))}
        </select>

        <br/><br/>

        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={form.endereco}
          onChange={handleChange}
          required
        />

        <br/><br/>

        {/* Tecido */}
        <select name="tecido" value={form.tecido} onChange={handleChange} required>
          <option value="">Tipo de tecido</option>
          <option value="linho">Linho</option>
          <option value="luxo">Luxo</option>
          <option value="courinho">Courinho</option>
          <option value="suede">Suede</option>
        </select>

        <br/><br/>

        {/* Andamento */}
        <select name="andamento" value={form.andamento} onChange={handleChange} required>
          <option value="">Andamento</option>
          <option value="novo">Novo</option>
          <option value="producao">Em produção</option>
          <option value="finalizado">Finalizado</option>
        </select>

        <br/><br/>

        <input
          type="date"
          name="entrega"
          value={form.entrega}
          onChange={handleChange}
          required
        />

        <br/><br/>

        {/* Prioridade */}
        <select name="prioridade" value={form.prioridade} onChange={handleChange} required>
          <option value="">Prioridade</option>
          <option value="baixa">Baixa</option>
          <option value="media">Média</option>
          <option value="alta">Alta</option>
        </select>

        <br/><br/>

        <button type="submit">Salvar Pedido</button>
        <button
          type="button"
          onClick={fechar}
          style={{ marginLeft: "10px" }}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}