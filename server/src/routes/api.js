const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth');
const userRoutes = require('./users');
const transactionRoutes = require('./transactions');

// Route middleware
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/transactions', transactionRoutes);

// API documentation endpoint
router.get('/docs', (req, res) => {
  res.json({
    message: 'DANAIN API Documentation',
    version: '2.0.0',
    endpoints: {
      auth: {
        'POST /api/auth/register': 'Register new user',
        'POST /api/auth/login': 'User login',
        'POST /api/auth/logout': 'User logout',
        'POST /api/auth/refresh': 'Refresh access token'
      },
      users: {
        'GET /api/users/profile': 'Get user profile',
        'PUT /api/users/profile': 'Update user profile',
        'GET /api/users/balance': 'Get user balance'
      },
      transactions: {
        'GET /api/transactions': 'Get transaction history',
        'POST /api/transactions/transfer': 'Transfer money',
        'POST /api/transactions/topup': 'Top up balance',
        'POST /api/transactions/payment': 'Make payment'
      }
    }
  });
});

// API status endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'DANAIN API is running',
    version: '2.0.0',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;