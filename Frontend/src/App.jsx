import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./Components/GlobalStyle";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home/Home";
import CriarPedido from "./pages/CriarPedido/CriarPedido";
import Pedidos from "./pages/Pedidos/Pedidos";


function App() {
  return (
    <BrowserRouter>

      <GlobalStyle />

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/home" element={<Home />} />

        <Route path="/pedido" element={<CriarPedido />} />

        <Route path="/pedidos" element={<Pedidos />} />



      </Routes>

    </BrowserRouter>
  );
}

export default App;