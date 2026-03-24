import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background: #f4f6f9;
  min-height: 100vh;
`;

export const Header = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    background: #2980b9;
    transform: scale(1.03);
  }
`;

export const Card = styled.div`
  background: white;
  padding: 18px;
  margin-top: 15px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.08);
`;

export const Modal = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const ModalContent = styled.div`
  background:white;
  padding:25px;
  border-radius:12px;
  width:420px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.2);
`;

export const FormGroup = styled.div`
  margin-bottom: 12px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #555;
  display: block;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52,152,219,0.4);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52,152,219,0.4);
  }
`;

export const Badge = styled.span`
  padding: 5px 10px;
  border-radius: 6px;
  margin-right: 5px;
  font-size: 12px;
  font-weight: bold;
  color: white;

  background: ${(props) =>
    props.tipo === "prioridade"
      ? props.children === "alta"
        ? "#e74c3c"
        : props.children === "media"
        ? "#f1c40f"
        : "#2ecc71"
      : props.children === "pendente"
      ? "#7f8c8d"
      : props.children === "em_producao"
      ? "#3498db"
      : "#2ecc71"};
`;