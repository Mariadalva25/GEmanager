// src/pages/CriarPedido/style.js
import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(0,0,0,0.1);
  max-width: 500px;
  margin: 20px auto;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  padding: 8px 12px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;