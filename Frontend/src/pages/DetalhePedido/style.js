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
  }

  a:hover {
    color: #d4af37;
  }
`;

export const DetailContainer = styled.div`
  width: 450px;
  margin: 60px auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Value = styled.span`
  color: #444;
`;

export const BackButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  border: none;
  background: #2c2c2c;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #444;
  }
`;
