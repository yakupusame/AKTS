const mongoose = require('mongoose');

// MongoDB URI (make sure this is correct and properly formatted)
const mongoURI = 'mongodb+srv://yakupusamea:usame1412@cluster0.hyu1lif.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for profiles
const profileSchema = new mongoose.Schema({
  name: String,
  bio: String,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = { Profile };
