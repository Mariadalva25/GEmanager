import React, { useState, useEffect } from "react";
import api from "../../services/API";
import { FaPlus, FaTrash } from "react-icons/fa";
import AdicionarPedido from "../../Components/AdicionarPedido";
import { Container, Header, ButtonAdd, Card, Badge, ModalWrapper } from "./style";

export default function Home() {
  const [pedidos, setPedidos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const carregarPedidos = async () => {
    try {
      const res = await api.get("/pedidos");
      setPedidos(res.data);
    } catch (err) {
      console.error("Erro ao carregar pedidos:", err);
    }
  };

  useEffect(() => {
    carregarPedidos();
  }, []);

  const deletarPedido = async (id) => {
    if (window.confirm("Deseja excluir este pedido?")) {
      try {
        await api.delete(`/pedidos/${id}`);
        carregarPedidos();
      } catch (err) {
        alert("Erro ao deletar pedido.");
      }
    }
  };

  return (
    <ModalWrapper>
      <Container>

        <Header>Gerenciador de Estofados</Header>

        <ButtonAdd onClick={() => setModalOpen(true)}>
          <FaPlus /> Adicionar Pedido
        </ButtonAdd>

        {modalOpen && (
          <AdicionarPedido
            onClose={() => setModalOpen(false)}
            carregarTudo={carregarPedidos}
          />
        )}

        {pedidos.length === 0 ? (
          <p>Nenhum pedido encontrado.</p>
        ) : (
          pedidos.map(p => (
            <Card key={p.id}>
              <div>
                <div style={{ fontWeight: '700', fontSize: '18px' }}>
                  {p.cliente_nome}
                </div>

                <div style={{ fontSize: '14px', margin: '4px 0' }}>
                  {p.descricao || "Sem descrição"}
                </div>

                <div style={{ marginTop: '10px' }}>
                  <Badge tipo={p.andamento}>
                    {p.andamento.replace('_', ' ')}
                  </Badge>

                  <Badge tipo={p.prioridade}>
                    {p.prioridade}
                  </Badge>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', marginBottom: '12px' }}>
                  Entrega: {new Date(p.data_entrega).toLocaleDateString()}
                </div>

                <FaTrash
                  style={{ cursor: 'pointer' }}
                  onClick={() => deletarPedido(p.id)}
                />
              </div>
            </Card>
          ))
        )}

      </Container>
    </ModalWrapper>
  );
}