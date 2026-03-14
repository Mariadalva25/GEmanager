import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
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
  font-size: 24px;
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

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 12px 25px;
  border: none;
  background: #2c2c2c;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #444;
  }
`;
