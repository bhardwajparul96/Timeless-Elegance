// backend/routes/watches.js
const express = require('express');
const fs = require('fs');
const router = express.Router();

// GET Men's Watches
router.get('/men', (req, res) => {
  fs.readFile('./data/menWatches.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading men watches data');
    res.json(JSON.parse(data));
  });
});

// ✅ GET Women's Watches
router.get('/women', (req, res) => {
  fs.readFile('./data/womenWatches.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading women watches data');
    res.json(JSON.parse(data));
  });
});

module.exports = router;
