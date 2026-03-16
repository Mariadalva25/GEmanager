function PedidoCard({ pedido }) {

  function corPrioridade() {

    if (pedido.prioridade === "alta") {
      return "#ff6b6b";
    }

    if (pedido.prioridade === "media") {
      return "#f7b731";
    }

    return "#2ecc71";
  }

  return (

    <div
      style={{
        borderLeft: `6px solid ${corPrioridade()}`,
        background: "#fff",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "6px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
      }}
    >

      <h3>{pedido.produto}</h3>

      <p><strong>Cliente:</strong> {pedido.cliente}</p>

      <p><strong>Endereço:</strong> {pedido.endereco}</p>

      <p><strong>Tecido:</strong> {pedido.tecido}</p>

      <p><strong>Andamento:</strong> {pedido.andamento}</p>

      <p><strong>Entrega:</strong> {pedido.entrega}</p>

      <p><strong>Prioridade:</strong> {pedido.prioridade}</p>

    </div>

  );

}

export default PedidoCard;