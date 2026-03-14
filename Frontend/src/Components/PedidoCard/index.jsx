import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Title,
  Info,
  Label,
  Value,
  DetailsButton
} from "./styles";

function PedidoCard({ pedido }) {

  return (
    <Card>

      <Title>Pedido #{pedido.id}</Title>

      <Info>
        <Label>Produto:</Label>
        <Value>{pedido.produto}</Value>
      </Info>

      <Info>
        <Label>Quantidade:</Label>
        <Value>{pedido.quantidade}</Value>
      </Info>

      <Info>
        <Label>Status:</Label>
        <Value>{pedido.status}</Value>
      </Info>

      <Link to={`/pedido/${pedido.id}`}>
        <DetailsButton>Ver detalhes</DetailsButton>
      </Link>

    </Card>
  );
}

export default PedidoCard;
