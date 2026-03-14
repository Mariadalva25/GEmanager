import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
`;

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

export const ProductsContainer = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductName = styled.h3`
  margin-top: 15px;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #444;
`;

export const BuyButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background: #2c2c2c;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #444;
  }
`;
