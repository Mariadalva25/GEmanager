import React, { useState } from "react";

import {
  FormContainer,
  Title,
  InputGroup,
  Label,
  Input,
  TextArea,
  SubmitButton
} from "./styles";

function ProdutoForm() {

  const [produto, setProduto] = useState({
    nome: "",
    preco: "",
    descricao: ""
  });

  const handleChange = (e) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Produto cadastrado:", produto);

    alert("Produto cadastrado com sucesso!");

    setProduto({
      nome: "",
      preco: "",
      descricao: ""
    });
  };

  return (
    <FormContainer>

      <Title>Adicionar Produto</Title>

      <form onSubmit={handleSubmit}>

        <InputGroup>
          <Label>Nome do Produto</Label>
          <Input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input
            type="number"
            name="preco"
            value={produto.preco}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Descrição</Label>
          <TextArea
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <SubmitButton type="submit">
          Cadastrar Produto
        </SubmitButton>

      </form>

    </FormContainer>
  );
}

export default ProdutoForm;
