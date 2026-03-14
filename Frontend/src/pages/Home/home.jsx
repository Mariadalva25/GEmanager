import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Header,
  Logo,
  Menu,
  MenuItem,
  Main,
  Title,
  Description,
  ButtonGroup,
  Button
} from "./styles";

function Home() {
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

      <Main>
        <Title>Bem-vindo à nossa loja</Title>

        <Description>
          Aqui você encontra móveis modernos e confortáveis para sua casa.
        </Description>

        <ButtonGroup>
          <Link to="/produtos">
            <Button>Ver Produtos</Button>
          </Link>

          <Link to="/Cadastro">
            <Button>Criar Conta</Button>
          </Link>
        </ButtonGroup>
      </Main>

    </Container>
  );
}

export default Home;
