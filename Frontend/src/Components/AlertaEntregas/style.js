import styled from "styled-components";

export const Container = styled.div`
  background: #fff3cd;
  padding: 20px;
  border-radius: 8px;
`;

export const Item = styled.p`
  color: ${props => props.urgente ? "red" : "orange"};
`;