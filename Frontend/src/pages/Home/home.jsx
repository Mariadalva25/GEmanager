import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/pedidos/ativos")
      .then(res => setPedidos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Pedidos em andamento</h1>

      {pedidos.map(p => (
        <div key={p.id}>
          <h3>{p.nome}</h3>
          <p>Status: {p.andamento}</p>
          <p>Cliente: {p.cliente_nome}</p>
        </div>
      ))}
    </div>
  );
}