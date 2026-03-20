import { useEffect, useState } from "react";
import axios from "axios";

export default function Pedidos() {
  const [dados, setDados] = useState([]);
  const [form, setForm] = useState({});
  const [edit, setEdit] = useState(null);

  const API = "http://localhost:3000/pedidos";

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    const res = await axios.get(API);
    setDados(res.data);
  };

  const salvar = async () => {
    try {
      if (edit) {
        await axios.put(`${API}/${edit}`, form);
      } else {
        await axios.post(API, form);
      }

      setForm({});
      setEdit(null);
      carregarDados();
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar");
    }
  };

  const deletar = async (id) => {
    await axios.delete(`${API}/${id}`);
    carregarDados();
  };

  const editar = (item) => {
    setForm(item);
    setEdit(item.id);
  };

  return (
    <div>
      <h1>Pedidos</h1>

      {/* FORM */}
      <input
        placeholder="Nome"
        value={form.nome || ""}
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
      />

      <input
        type="date"
        value={form.data_entrega || ""}
        onChange={(e) => setForm({ ...form, data_entrega: e.target.value })}
      />

      <button onClick={salvar}>Salvar</button>

      {/* LISTA */}
      {dados.map((d) => (
        <div key={d.id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <p><b>Pedido:</b> {d.nome}</p>
          <p><b>Cliente:</b> {d.cliente_nome}</p>
          <p><b>Produto:</b> {d.produto_nome}</p>
          <p><b>Status:</b> {d.andamento}</p>

          <button onClick={() => editar(d)}>Editar</button>
          <button onClick={() => deletar(d.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}