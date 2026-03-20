import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/pedidos/ativos")
      .then(res => setPedidos(res.data));
  }, []);

  return (
    <div>
      <h1>Em andamento</h1>

      {pedidos.map(p => (
        <div key={p.id}>
          <h3>{p.nome}</h3>
          <p>{p.andamento}</p>
        </div>
      ))}
    </div>
  );
}