import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 500px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const Header = styled.div`
  background: #007bff;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

export const Tab = styled.div`
  flex: 1;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;

  background: ${props => props.$active ? "#007bff" : "#f5f5f5"};
  color: ${props => props.$active ? "#fff" : "#333"};

  transition: 0.3s;
`;

export const Form = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #444;
  margin-top: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;