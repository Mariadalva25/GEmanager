import { Link } from "react-router-dom";
import * as S from "./styles";

export default function Sidebar() {
  return (
    <S.Container>
      <h2>Menu</h2>
      <Link to="/">Home</Link>
      <Link to="/pedidos">Pedidos</Link>
      <Link to="/clientes">Clientes</Link>
      <Link to="/produtos">Produtos</Link>
    </S.Container>
  );
}