require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Use middleware
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use routes
app.use('/api', studentRoutes); // Register routes for student API

app.get('/', (req, res) => {
    res.redirect('/api/students');
  });


// Server listening
app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));



