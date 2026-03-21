import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  height: 100vh;
  background: linear-gradient(180deg, #0d6efd, #0a58ca);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  color: white;

  background: ${(props) => (props.active ? "rgba(255,255,255,0.2)" : "transparent")};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    font-size: 18px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    width: 100%;
  }
`;