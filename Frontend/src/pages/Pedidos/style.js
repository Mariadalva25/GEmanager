import styled from "styled-components";

// Container principal da página
export const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

// Cabeçalho da página
export const Header = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
`;

// Botão genérico
export const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    background-color: #2980b9;
  }
`;

// Card para exibir cada pedido
export const Card = styled.div`
  background-color: #f2f2f2;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

// Modal de fundo
export const Modal = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Conteúdo interno do modal
export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

// Input de texto e data
export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

// Select dropdown
export const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
`;