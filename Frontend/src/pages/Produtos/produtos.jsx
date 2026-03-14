// src/pages/Produtos/Produtos.jsx
import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Logo,
  Menu,
  MenuItem,
  ProductsContainer,
  ProductCard,
  ProductName,
  ProductPriority,
} from "./styles";

// Função para colorir andamento
const andamentoColor = (status) => {
  switch(status) {
    case "Em produção":
      return "orange";
    case "Em transporte":
      return "blue";
    case "Entregue":
      return "green";
    default:
      return "gray";
  }
};

const Produtos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulação de chamada API
    fetch("https://api.exemplo.com/pedidos") // substitua pela sua URL real
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar pedidos");
        return res.json();
      })
      .then((data) => {
        setPedidos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <Header>
          <Logo>Minha Loja</Logo>
          <Menu>
            <MenuItem><a href="/">Home</a></MenuItem>
            <MenuItem><a href="/produtos">Pedidos</a></MenuItem>
          </Menu>
        </Header>
        <p style={{padding: "40px", textAlign: "center"}}>Carregando pedidos...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header>
          <Logo>Minha Loja</Logo>
          <Menu>
            <MenuItem><a href="/">Home</a></MenuItem>
            <MenuItem><a href="/produtos">Pedidos</a></MenuItem>
          </Menu>
        </Header>
        <p style={{padding: "40px", textAlign: "center", color: "red"}}>{error}</p>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Logo>Minha Loja</Logo>
        <Menu>
          <MenuItem><a href="/">Home</a></MenuItem>
          <MenuItem><a href="/produtos">Pedidos</a></MenuItem>
        </Menu>
      </Header>

      <ProductsContainer>
        {pedidos.map(pedido => (
          <ProductCard key={pedido.id}>
            <ProductName>{pedido.name}</ProductName>
            <p>{pedido.specs}</p>
            <p>
              Andamento: <ProductPriority style={{backgroundColor: andamentoColor(pedido.andamento)}}>{pedido.andamento}</ProductPriority>
            </p>
            <p>Data de entrega: {pedido.dataEntrega}</p>
          </ProductCard>
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default Produtos;