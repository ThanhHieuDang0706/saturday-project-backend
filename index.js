
const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 3000;
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
const choORoute = require('./routes/choO');
// ----------------- Middlewares -----------------
app.use('/cho-o', choORoute);
// ----------------- Server -----------------
app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`); 
});