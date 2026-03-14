import React, { useState } from "react";
import { Card, Title, Label, Input, Select, Button } from "./style";

function CriarPedido() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [andamento, setAndamento] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [tecido, setTecido] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoPedido = {
      produto,
      quantidade,
      andamento,
      prioridade,
      tecido,
    };

    try {
      const response = await fetch("http://localhost:3000/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoPedido),
      });

      if (!response.ok) throw new Error("Erro ao criar pedido");

      alert("Pedido criado com sucesso!");
      // Resetar formulário
      setProduto("");
      setQuantidade("");
      setAndamento("");
      setPrioridade("");
      setTecido("");
    } catch (error) {
      console.error(error);
      alert("Falha ao criar pedido");
    }
  };

  return (
    <Card>
      <Title>Criar Pedido</Title>
      <form onSubmit={handleSubmit}>
        <Label>Produto:</Label>
        <Input
          type="text"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          required
        />

        <Label>Quantidade:</Label>
        <Input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
        />

        <Label>Andamento:</Label>
        <Select
          value={andamento}
          onChange={(e) => setAndamento(e.target.value)}
          required
        >
          <option value="">Selecionar</option>
          <option value="Não iniciado">Não iniciado</option>
          <option value="Em produção">Em produção</option>
          <option value="Entregue">Entregue</option>
        </Select>

        <Label>Prioridade:</Label>
        <Select
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
          required
        >
          <option value="">Selecionar</option>
          <option value="Alta">Alta</option>
          <option value="Média">Média</option>
          <option value="Baixa">Baixa</option>
        </Select>

        <Label>Tecido:</Label>
        <Select
          value={tecido}
          onChange={(e) => setTecido(e.target.value)}
          required
        >
          <option value="">Selecionar</option>
          <option value="Suede Luxo">Suede Luxo</option>
          <option value="Courinho">Courinho</option>
          <option value="Linho">Linho</option>
        </Select>

        <Button type="submit">Salvar Pedido</Button>
      </form>
    </Card>
  );
}

export default CriarPedido;