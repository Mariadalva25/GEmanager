import { useState, useEffect } from "react";

import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import PedidoCard from "../../Components/PedidoCard";
import CriarPedido from "../CriarPedido/CriarPedido";
import CadastroClientes from "../../Components/CadastroClientes/CadastroClientes"; // CORRETO
import AlertaEntregas from "../../Components/AlertaEntregas";

function Home() {
  const [pedidos, setPedidos] = useState([]);
  const [abrirFormPedido, setAbrirFormPedido] = useState(false);
  const [abrirFormCliente, setAbrirFormCliente] = useState(false);

  // Buscar pedidos do backend
  const fetchPedidos = () => {
    fetch("http://localhost:3000/pedidos")
      .then(res => res.json())
      .then(data => setPedidos(data));
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ width: "100%", padding: "20px" }}>
        <Header />

        {/* Botões para abrir formulários */}
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => setAbrirFormPedido(true)}
            style={{
              padding: "10px 15px",
              background: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            + Adicionar Pedido
          </button>

          <button
            onClick={() => setAbrirFormCliente(true)}
            style={{
              padding: "10px 15px",
              background: "#2196F3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            + Adicionar Cliente
          </button>
        </div>

        {/* Formulário de Pedido */}
        {abrirFormPedido && (
          <CriarPedido
            fechar={() => setAbrirFormPedido(false)}
            atualizarLista={fetchPedidos} // atualiza lista após criar pedido
          />
        )}

        {/* Formulário de Cliente */}
        {abrirFormCliente && (
          <CadastroClientes
            fechar={() => setAbrirFormCliente(false)}
          />
        )}

        {/* Lista de pedidos */}
        <h2>Pedidos</h2>
        {pedidos.length === 0 ? (
          <p>Nenhum pedido cadastrado.</p>
        ) : (
          pedidos.map((pedido) => (
            <PedidoCard key={pedido.id} pedido={pedido} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;