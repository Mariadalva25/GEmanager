import { useState, useEffect } from "react";

export default function CadastrarClientes({ atualizarLista }) {
  const [form, setForm] = useState({
    nome: "",
    endereco: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarCliente = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/clientes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      alert("Cliente cadastrado com sucesso!");
      setForm({ nome: "", endereco: "" });
      if (atualizarLista) atualizarLista(); // atualiza lista de clientes em outro componente, se necessário
    });
  };

  return (
    <form onSubmit={enviarCliente} style={{ marginBottom: "16px" }}>
      <input
        type="text"
        name="nome"
        placeholder="Nome do cliente"
        value={form.nome}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={form.endereco}
        onChange={handleChange}
        required
      />
      <button type="submit">Salvar Cliente</button>
    </form>
  );
}