// backend/routes/routes.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile'); // Ensure the correct path to the Profile model

// Add a new profile
router.post('/addProfile', async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).send(profile);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Search for profiles
router.get('/search', async (req, res) => {
    const { query } = req.query;
    try {
        const profiles = await Profile.find({ bio: { $regex: query, $options: 'i' } });
        res.send(profiles);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
