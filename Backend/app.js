const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/user.routes");

app.use("/users", userRoutes);
app.use("/pedidos", require("./routes/pedidos.routes"));
app.use("/clientes", require("./routes/clientes.routes"));
app.use("/produtos", require("./routes/produtos.routes"));

module.exports = app;