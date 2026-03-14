import React from "react";
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
} from "./styles";

function DetalhePedido() {

  const { id } = useParams();

  // Simulação de dados (depois virá do backend)
  const pedido = {
    id: id,
    produto: "Sofá Moderno",
    quantidade: 2,
    endereco: "Rua Exemplo, 123",
    status: "Em processamento"
  };

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
