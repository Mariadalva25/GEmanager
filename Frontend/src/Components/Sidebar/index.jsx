import { useLocation, Link } from "react-router-dom";
import { Container, Logo, Menu, Item } from "./styles";
import { FaHome, FaUsers, FaBox, FaClipboardList } from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();

  return (
    <Container>
      <Logo>Estofados</Logo>

      <Menu>
        <Link to="/home">
          <Item active={location.pathname === "/home"}>
            <FaHome /><span>Home</span>
          </Item>
        </Link>
        <Link to="/clientes">
          <Item active={location.pathname === "/clientes"}>
            <FaUsers /><span>Clientes</span>
          </Item>
        </Link>
        <Link to="/produtos">
          <Item active={location.pathname === "/produtos"}>
            <FaBox /><span>Produtos</span>
          </Item>
        </Link>
        <Link to="/pedidos">
          <Item active={location.pathname === "/pedidos"}>
            <FaClipboardList /><span>Pedidos</span>
          </Item>
        </Link>
      </Menu>
    </Container>
  );
}