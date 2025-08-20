const express = require('express');
const router = express.Router();

// Mock user profile endpoint
router.get('/profile', (req, res) => {
  res.json({
    message: 'User profile endpoint',
    user: {
      id: 1,
      name: 'John Doe',
      phone: '+6285725692xxx',
      balance: 150000,
      avatar: null,
      verified: true,
      memberSince: '2023-01-15T00:00:00Z'
    }
  });
});

// Update profile endpoint
router.put('/profile', (req, res) => {
  const { name, avatar } = req.body;
  
  res.json({
    message: 'Profile updated successfully',
    user: {
      id: 1,
      name: name || 'John Doe',
      phone: '+6285725692xxx',
      balance: 150000,
      avatar: avatar || null,
      verified: true,
      updatedAt: new Date().toISOString()
    }
  });
});

// Get balance endpoint
router.get('/balance', (req, res) => {
  res.json({
    balance: 150000,
    currency: 'IDR',
    lastUpdated: new Date().toISOString()
  });
});

module.exports = router;