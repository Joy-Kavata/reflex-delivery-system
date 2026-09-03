const express = require('express');
const cors = require('cors');
require('dotenv').config();

const deliveryRoutes = require('./deliveryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', deliveryRoutes);

app.get('/', (req, res) => {
  res.send('Reflex Delivery API Server Running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});