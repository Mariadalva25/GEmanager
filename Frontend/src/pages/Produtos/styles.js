// src/pages/Produtos/styles.js
import styled from "styled-components";

// Container da página
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
`;

// Header
export const Header = styled.header`
  width: 100%;
  height: 70px;
  background: #2c2c2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const Logo = styled.h1`
  color: white;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    color: #d4af37;
  }
`;

// Container dos produtos
export const ProductsContainer = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

// Card de produto
export const ProductCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
`;

// Imagem do produto
export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

// Nome do produto
export const ProductName = styled.h3`
  margin-top: 15px;
  font-size: 18px;
  color: #333;
`;

// Preço do produto
export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #444;
  margin: 10px 0 0 0;
`;

// Destaque de prioridade (novo componente)
export const ProductPriority = styled.span`
  display: inline-block;
  background: #d4af37;
  color: #fff;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 8px;
`;

// Botão de compra
export const BuyButton = styled.button`
  margin-top: 12px;
  padding: 10px 20px;
  border: none;
  background: #2c2c2c;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #444;
  }
`;