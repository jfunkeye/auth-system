const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('../client'));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Serve frontend pages
app.get('/', (req, res) => {
  res.sendFile('login.html', { root: '../client' });
});

app.get('/login', (req, res) => {
  res.sendFile('login.html', { root: '../client' });
});

app.get('/signup', (req, res) => {
  res.sendFile('signup.html', { root: '../client' });
});

app.get('/dashboard', (req, res) => {
  res.sendFile('dashboard.html', { root: '../client' });
});

app.get('/admin', (req, res) => {
  res.sendFile('admin.html', { root: '../client' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});