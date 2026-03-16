import { Link } from "react-router-dom";

function Sidebar(){

  return(

    <div style={{
      width:"200px",
      height:"100vh",
      background:"#eee",
      padding:"20px"
    }}>

      <h3>Menu</h3>

      <Link to="/">Home</Link>

      <br/><br/>

      <Link to="/pedidos">Pedidos</Link>

      <br/><br/>

      <Link to="/produtos">Produtos</Link>

    </div>

  )

}

export default Sidebar