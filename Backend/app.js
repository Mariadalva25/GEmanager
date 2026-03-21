const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROTAS
app.use("/users", require("./routes/user.routes"));
app.use("/pedidos", require("./routes/pedidos.routes"));
app.use("/clientes", require("./routes/clientes.routes"));
app.use("/produtos", require("./routes/produtos.routes"));

// TESTE
app.get("/", (req, res) => {
  res.send("API rodando!");
});

// INICIAR SERVIDOR
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});