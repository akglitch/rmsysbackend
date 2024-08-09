const express = require('express');
const incomingRoutes = require('./src/routes/incomingRoutes.js');
const outgoingRoutes = require('./src/routes/outgoingRoutes.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db.js');
const userRoutes = require('./src/routes/userRoutes..js');


connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://rmsys.vercel.app/', // Replace with your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use('/api', incomingRoutes);
app.use('/api', outgoingRoutes);
app.use('/api', userRoutes);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
