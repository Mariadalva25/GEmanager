import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Title,
  Info,
  Label,
  Value,
  DetailsButton,
  TecidoSelect
} from "./style";

function PedidoCard({ pedido, onTecidoChange }) {
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
        <Value>{pedido.andamento}</Value>
      </Info>

      <Info>
        <Label>Prioridade:</Label>
        <Value>{pedido.prioridade}</Value>
      </Info>

      <Info>
        <Label>Tecido:</Label>
        <TecidoSelect
          value={pedido.tecido || ""}
          onChange={(e) => onTecidoChange(pedido.id, e.target.value)}
        >
          <option value="">Selecionar tecido</option>
          <option value="Suede Luxo">Suede Luxo</option>
          <option value="Courinho">Courinho</option>
          <option value="Linho">Linho</option>
        </TecidoSelect>
      </Info>

      <Link to={`/pedido/${pedido.id}`}>
        <DetailsButton>Ver detalhes</DetailsButton>
      </Link>

    </Card>
  );
}

export default PedidoCard;