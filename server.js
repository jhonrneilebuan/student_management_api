require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json()); 
app.use(cors()); 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api', studentRoutes); 
app.get('/', (req, res) => {
    res.redirect('/api/students');
  });

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));



