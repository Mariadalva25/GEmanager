import React from "react";
import PedidoCard from "../../Components/PedidoCard";

function Pedidos() {

  const pedidos = [
    {
      id: 1,
      produto: "Sofá Moderno",
      quantidade: 2,
      status: "Em processamento"
    },
    {
      id: 2,
      produto: "Poltrona Confortável",
      quantidade: 1,
      status: "Enviado"
    }
  ];

  return (
    <div>

      <h1>Meus Pedidos</h1>

      {pedidos.map(p => (
        <PedidoCard key={p.id} pedido={p} />
      ))}

    </div>
  );
}

export default Pedidos;
