import { useEffect, useState } from "react";
import axios from "axios";

export default function Pedidos() {
  const [dados, setDados] = useState([]);
  const [form, setForm] = useState({});
  const [edit, setEdit] = useState(null);

  const API = "http://localhost:3000/pedidos";

  useEffect(() => { fetch(); }, []);

  const fetch = async () => {
    const res = await axios.get(API);
    setDados(res.data);
  };

  const salvar = async () => {
    if (edit) {
      await axios.put(`${API}/${edit}`, form);
    } else {
      await axios.post(API, form);
    }
    setForm({});
    setEdit(null);
    fetch();
  };

  const deletar = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetch();
  };

  const editar = (item) => {
    setForm(item);
    setEdit(item.id);
  };

  return (
    <div>
      <h1>Pedidos</h1>

      <input placeholder="Nome"
        onChange={e => setForm({ ...form, nome: e.target.value })} />

      <button onClick={salvar}>Salvar</button>

      {dados.map(d => (
        <div key={d.id}>
          <p>{d.nome}</p>
          <button onClick={() => editar(d)}>Editar</button>
          <button onClick={() => deletar(d.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}