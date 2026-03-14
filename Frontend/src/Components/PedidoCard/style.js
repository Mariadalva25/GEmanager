import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0,0,0,0.1);
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Value = styled.span`
  font-weight: normal;
`;

export const TecidoSelect = styled.select`
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const DetailsButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;