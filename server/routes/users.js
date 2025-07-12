const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all users
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    const formatted = results.map(user => ({
      ...user,
      skillsOffered: user.skillsOffered?.split(',') || [],
      skillsWanted: user.skillsWanted?.split(',') || [],
    }));
    res.json(formatted);
  });
});

// GET single user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: 'User not found' });
    const user = results[0];
    user.skillsOffered = user.skillsOffered?.split(',') || [];
    user.skillsWanted = user.skillsWanted?.split(',') || [];
    res.json(user);
  });
});

module.exports = router;
