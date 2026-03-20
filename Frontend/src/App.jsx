import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./Components/GlobalStyle";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home/home";
import Pedidos from "./pages/Pedidos/Pedidos";

function App() {
  return (
    <BrowserRouter>

      <GlobalStyle />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* SISTEMA */}
        <Route path="/home" element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;