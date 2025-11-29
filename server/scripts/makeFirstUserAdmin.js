const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

async function makeFirstUserAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const users = await User.find().sort({ createdAt: 1 }).limit(1);
    
    if (users.length > 0 && users[0].role !== 'admin') {
      users[0].role = 'admin';
      await users[0].save();
      console.log('First user has been made admin');
    }
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

makeFirstUserAdmin();