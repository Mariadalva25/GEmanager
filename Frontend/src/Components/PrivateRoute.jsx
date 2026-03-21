// src/Components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const usuario = localStorage.getItem("usuario"); // verifica se usuário está logado
  return usuario ? children : <Navigate to="/" />;
}