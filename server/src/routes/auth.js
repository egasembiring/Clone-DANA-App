const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock user data (in production, this would be from a database)
const users = [];

// Register endpoint
router.post('/register', [
  body('phone').isMobilePhone().withMessage('Invalid phone number'),
  body('name').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('pin').isLength({ min: 6, max: 6 }).withMessage('PIN must be 6 digits')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array()
    });
  }

  const { phone, name, pin } = req.body;
  
  // Check if user already exists
  const existingUser = users.find(u => u.phone === phone);
  if (existingUser) {
    return res.status(409).json({
      error: 'User already exists',
      message: 'A user with this phone number is already registered'
    });
  }

  // Create new user
  const user = {
    id: users.length + 1,
    phone,
    name,
    pin, // In production, this should be hashed
    balance: 0,
    createdAt: new Date().toISOString()
  };

  users.push(user);

  res.status(201).json({
    message: 'User registered successfully',
    user: {
      id: user.id,
      phone: user.phone,
      name: user.name,
      balance: user.balance
    }
  });
});

// Login endpoint
router.post('/login', [
  body('phone').isMobilePhone().withMessage('Invalid phone number'),
  body('pin').isLength({ min: 6, max: 6 }).withMessage('PIN must be 6 digits')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array()
    });
  }

  const { phone, pin } = req.body;
  
  // Find user
  const user = users.find(u => u.phone === phone && u.pin === pin);
  if (!user) {
    return res.status(401).json({
      error: 'Authentication failed',
      message: 'Invalid phone number or PIN'
    });
  }

  // In production, generate JWT token here
  const token = `mock_token_${user.id}_${Date.now()}`;

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      phone: user.phone,
      name: user.name,
      balance: user.balance
    }
  });
});

// Logout endpoint
router.post('/logout', (req, res) => {
  res.json({
    message: 'Logout successful'
  });
});

// Get all users (for development purposes)
router.get('/users', (req, res) => {
  res.json({
    users: users.map(u => ({
      id: u.id,
      phone: u.phone,
      name: u.name,
      balance: u.balance
    }))
  });
});

module.exports = router;