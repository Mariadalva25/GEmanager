import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Header,
  Logo,
  Menu,
  MenuItem,
  ProductsContainer,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  BuyButton
} from "./styles";

import sofa from "../../Components/Img/sofa-unsplash.jpg";

function Produtos() {

  const produtos = [
    {
      id: 1,
      nome: "Sofá Moderno",
      preco: "R$ 2.500",
      imagem: sofa
    },
    {
      id: 2,
      nome: "Poltrona Confortável",
      preco: "R$ 1.200",
      imagem: sofa
    },
    {
      id: 3,
      nome: "Sofá Luxo",
      preco: "R$ 3.800",
      imagem: sofa
    }
  ];

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

      <ProductsContainer>

        {produtos.map((produto) => (
          <ProductCard key={produto.id}>

            <ProductImage src={produto.imagem} />

            <ProductName>{produto.nome}</ProductName>

            <ProductPrice>{produto.preco}</ProductPrice>

            <BuyButton>Comprar</BuyButton>

          </ProductCard>
        ))}

      </ProductsContainer>

    </Container>
  );
}

export default Produtos;
