import styled from "styled-components";

export const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0,0,0,0.1);
  width: 250px;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
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
  color: #444;
`;

export const DetailsButton = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 8px;
  border: none;
  background: #2c2c2c;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #444;
  }
`;
