import styled from "styled-components";

export const FormContainer = styled.div`
  width: 400px;
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.1);
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
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
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

  &:hover {
    background: #444;
  }
`;
