const express = require('express');
const app = express();

app.use(express.json());

require('./connection/conn');

const reviewRoute = require('./routes/ReviewRoutes');
app.use('/', reviewRoute);

app.listen(3000, () => {
  console.log('Server started successfully');
});
