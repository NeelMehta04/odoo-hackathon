const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');

// REGISTER
router.post('/register', async (req, res) => {
  const { name, email, password, skillsOffered, skillsWanted, photo } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `INSERT INTO users (name, email, password, skillsOffered, skillsWanted, photo) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(query, [name, email, hashedPassword, skillsOffered, skillsWanted, photo], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User registered successfully' });
  });
});

// LOGIN
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'Invalid email or password' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ message: 'Login successful', user });
  });
});

module.exports = router;
