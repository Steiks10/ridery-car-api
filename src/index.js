const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;


const vehiclesRouter = require('./routes/vehicles');

app.use(express.json());

// Swagger setup
const setupSwagger = require('./swagger');
setupSwagger(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/vehicles', vehiclesRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});