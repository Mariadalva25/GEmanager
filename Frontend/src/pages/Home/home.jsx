import React, { useEffect, useState } from "react";
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
} from "./style";

function Home() {

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {

    const buscarPedidos = async () => {

      try {

        const response = await fetch("http://localhost:3000/pedidos");
        const data = await response.json();

        setPedidos(data);

      } catch (error) {
        console.error("Erro ao buscar pedidos", error);
      }

    };

    buscarPedidos();

  }, []);

  return (
    <Container>

      <Header>
        <Logo>Gerenciador de Pedidos</Logo>

        <Menu>
          <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem><Link to="/produtos">Produtos</Link></MenuItem>

          {usuario ? (
            <MenuItem>Olá {usuario.nome}</MenuItem>
          ) : (
            <MenuItem><Link to="/">Login</Link></MenuItem>
          )}
        </Menu>
      </Header>

      <Main>

        <Title>
          Bem-vindo {usuario ? usuario.nome : ""}
        </Title>

        <Description>
          Pedidos recentes
        </Description>

        {pedidos.slice(0, 3).map((pedido) => (

          <div key={pedido.id}>

            <p><strong>Produto:</strong> {pedido.produto}</p>
            <p><strong>Quantidade:</strong> {pedido.quantidade}</p>
            <p><strong>Status:</strong> {pedido.status}</p>

            <Link to={`/pedido/${pedido.id}`}>
              Ver detalhes
            </Link>

            <hr />

          </div>

        ))}

        <ButtonGroup>

          <Link to="/pedido">
            <Button>Adicionar Pedido</Button>
          </Link>

          <Link to="/pedidos">
            <Button>Ver Todos os Pedidos</Button>
          </Link>

        </ButtonGroup>

      </Main>

    </Container>
  );
}

export default Home;