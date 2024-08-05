// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000; // Make sure this is set to 5000

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb+srv://yakupusamea:usame1412@cluster0.hyu1lif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace this with your actual MongoDB connection string

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Profile Schema and Model
const profileSchema = new mongoose.Schema({
  name: String,
  bio: String,
});

const Profile = mongoose.model('Profile', profileSchema);

// Add Profile endpoint
app.post('/api/profiles/addProfile', async (req, res) => {
  const { name, bio } = req.body;

  try {
    const newProfile = new Profile({ name, bio });
    const savedProfile = await newProfile.save(); // Use async/await
    res.status(201).json(savedProfile);
  } catch (err) {
    console.error('Error adding profile:', err);
    res.status(500).json({ error: 'Error adding profile' });
  }
});

// Search endpoint
app.get('/api/profiles/search', async (req, res) => {
  try {
    const searchTerm = req.query.query.toLowerCase();
    const profiles = await Profile.find({ bio: new RegExp(searchTerm, 'i') });

    if (profiles.length === 0) {
      return res.status(404).json({ message: 'No results found' });
    }

    // You can add AI-based ranking here if necessary
    res.json(profiles);
  } catch (error) {
    console.error('Error searching profiles:', error);
    res.status(500).json({ error: 'Error searching profiles' });
  }
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
