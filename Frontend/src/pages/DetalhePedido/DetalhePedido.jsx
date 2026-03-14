import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Container,
  Header,
  Logo,
  Menu,
  MenuItem,
  DetailContainer,
  Title,
  Info,
  Label,
  Value,
  BackButton
} from "./style";

function DetalhePedido() {
  const { id } = useParams();
  const [pedido, setPedido] = useState(null); // estado inicial vazio
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Busca o pedido no backend pelo id
    fetch(`https://api.exemplo.com/pedidos/${id}`) // substitua pela sua URL real
      .then((res) => {
        if (!res.ok) throw new Error("Pedido não encontrado");
        return res.json();
      })
      .then((data) => {
        setPedido(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Container><p style={{padding: "40px", textAlign:"center"}}>Carregando pedido...</p></Container>;
  }

  if (error) {
    return <Container><p style={{padding: "40px", textAlign:"center", color:"red"}}>{error}</p></Container>;
  }

  return (
    <Container>

      <Header>
        <Logo>Minha Loja</Logo>
        <Menu>
          <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem><Link to="/produtos">Produtos</Link></MenuItem>
          <MenuItem><Link to="/login">Login</Link></MenuItem>
        </Menu>
      </Header>

      <DetailContainer>
        <Title>Detalhes do Pedido #{pedido.id}</Title>

        <Info>
          <Label>Produto:</Label>
          <Value>{pedido.produto}</Value>
        </Info>

        <Info>
          <Label>Quantidade:</Label>
          <Value>{pedido.quantidade}</Value>
        </Info>

        <Info>
          <Label>Endereço:</Label>
          <Value>{pedido.endereco}</Value>
        </Info>

        <Info>
          <Label>Status:</Label>
          <Value>{pedido.status}</Value>
        </Info>

        <Link to="/produtos">
          <BackButton>Voltar para Produtos</BackButton>
        </Link>
      </DetailContainer>
    </Container>
  );
}

export default DetalhePedido;