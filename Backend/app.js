const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const customerRoutes = require('./routes/customer.routes');
const ordersRoutes = require('./routes/orders.routes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/customer', customerRoutes);
app.use('/orders', ordersRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});