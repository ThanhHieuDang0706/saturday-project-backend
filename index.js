import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8443;
const app = express();
app.use(cors());

app.get('/check', (req, res) => {
  res.send('Server is OK');
})

app.get('/', (req, res) => {
  res.json({
    message: 'This is Accommodation Server'
  })
})

// ----------------- Routes -----------------
const authRoutes = require('./routes/auth');


// ----------------- Middlewares -----------------
app.use('/auth', authRoutes);


// ----------------- Server -----------------
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})