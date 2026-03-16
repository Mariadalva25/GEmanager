import React from "react";
import { Container, Item } from "./style";

function AlertaEntregas() {
  return (
    <Container>

      <h3>⚠️ Alertas de Entrega</h3>

      <Item urgente>
        Sofá 3 Lugares - Maria Silva → Entrega hoje
      </Item>

      <Item>
        Poltrona - João Mendes → Entrega amanhã
      </Item>

    </Container>
  );
}

export default AlertaEntregas;