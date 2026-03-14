import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home/home';
import Produtos from "./Pages/Produtos";
import CriarPedido from "./Pages/CriarPedido";
import DetalhePedido from "./Pages/DetalhePedido";
import Pedidos from "./Pages/Pedidos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/pedido" element={<CriarPedido />} />
        <Route path="/pedido/:id" element={<DetalhePedido />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;