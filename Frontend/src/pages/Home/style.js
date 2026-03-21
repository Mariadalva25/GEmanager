import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
`;

export const Header = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 8px 15px;
  margin: 5px 0;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #2980b9;
  }
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
`;

export const Badge = styled.span`
  padding: 3px 8px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  background-color: ${props =>
    props.tipo === "status" ? "#27ae60" : props.tipo === "prioridade" ? "#e67e22" : "#95a5a6"};
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
`;

export const SubModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

export const SubModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;