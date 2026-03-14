import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Header,
  Logo,
  Menu,
  MenuItem,
  FormContainer,
  Title,
  InputGroup,
  Label,
  Input,
  Select,
  SubmitButton
} from "./styles";

function CriarPedido() {

  const [pedido, setPedido] = useState({
    produto: "",
    quantidade: 1,
    endereco: ""
  });

  const handleChange = (e) => {
    setPedido({
      ...pedido,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pedido enviado:", pedido);
    alert("Pedido criado com sucesso!");
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

      <FormContainer>

        <Title>Criar Pedido</Title>

        <form onSubmit={handleSubmit}>

          <InputGroup>
            <Label>Produto</Label>
            <Select
              name="produto"
              value={pedido.produto}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um produto</option>
              <option value="Sofá Moderno">Sofá Moderno</option>
              <option value="Poltrona Confortável">Poltrona Confortável</option>
              <option value="Sofá Luxo">Sofá Luxo</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>Quantidade</Label>
            <Input
              type="number"
              name="quantidade"
              min="1"
              value={pedido.quantidade}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>Endereço de entrega</Label>
            <Input
              type="text"
              name="endereco"
              placeholder="Digite seu endereço"
              value={pedido.endereco}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <SubmitButton type="submit">
            Finalizar Pedido
          </SubmitButton>

        </form>

      </FormContainer>

    </Container>
  );
}

export default CriarPedido;
