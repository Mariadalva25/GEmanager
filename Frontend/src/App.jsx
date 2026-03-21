import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Components/GlobalStyle";
import Sidebar from "./Components/Sidebar";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Clientes from "./pages/Clientes/Clientes";
import Produtos from "./pages/Produtos/Produtos";
import Pedidos from "./pages/Pedidos/Pedidos";
import PrivateRoute from "./Components/PrivateRoute";
import Cadastro from "./pages/Cadastro";

function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/Home" element={
            <PrivateRoute>
              <Layout><Home /></Layout>
            </PrivateRoute>
          } />

          <Route path="/clientes" element={
            <PrivateRoute>
              <Layout><Clientes /></Layout>
            </PrivateRoute>
          } />

          <Route path="/produtos" element={
            <PrivateRoute>
              <Layout><Produtos /></Layout>
            </PrivateRoute>
          } />

          <Route path="/pedidos" element={
            <PrivateRoute>
              <Layout><Pedidos /></Layout>
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;