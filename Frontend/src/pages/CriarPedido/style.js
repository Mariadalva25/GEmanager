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

export const FormContainer = styled.div`
  width: 400px;
  margin: 60px auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background: #2c2c2c;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #444;
  }
`;
