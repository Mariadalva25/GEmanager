import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home/home';

import CriarPedido from "./pages/CriarPedido/CriarPedido";
import DetalhePedido from "./pages/DetalhePedido/DetalhePedido";
import Pedidos from "./pages/Pedidos/Pedidos";
import Produtos from "./pages/Produtos/Produtos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
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