const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock transaction data
const transactions = [
  {
    id: 1,
    type: 'transfer',
    amount: 50000,
    description: 'Transfer to John',
    timestamp: '2023-11-20T10:30:00Z',
    status: 'completed'
  },
  {
    id: 2,
    type: 'topup',
    amount: 100000,
    description: 'Top up from Bank BCA',
    timestamp: '2023-11-19T14:20:00Z',
    status: 'completed'
  },
  {
    id: 3,
    type: 'payment',
    amount: 25000,
    description: 'Payment to Merchant ABC',
    timestamp: '2023-11-18T09:15:00Z',
    status: 'completed'
  }
];

// Get transaction history
router.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const type = req.query.type;

  let filteredTransactions = transactions;
  if (type) {
    filteredTransactions = transactions.filter(t => t.type === type);
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);

  res.json({
    transactions: paginatedTransactions,
    pagination: {
      page,
      limit,
      total: filteredTransactions.length,
      pages: Math.ceil(filteredTransactions.length / limit)
    }
  });
});

// Transfer money
router.post('/transfer', [
  body('amount').isNumeric().withMessage('Amount must be numeric'),
  body('recipientPhone').isMobilePhone().withMessage('Invalid recipient phone number'),
  body('description').optional().isLength({ max: 100 }).withMessage('Description too long')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array()
    });
  }

  const { amount, recipientPhone, description } = req.body;

  if (amount <= 0) {
    return res.status(400).json({
      error: 'Invalid amount',
      message: 'Amount must be greater than 0'
    });
  }

  const transaction = {
    id: transactions.length + 1,
    type: 'transfer',
    amount: parseFloat(amount),
    recipientPhone,
    description: description || 'Transfer',
    timestamp: new Date().toISOString(),
    status: 'completed'
  };

  transactions.unshift(transaction);

  res.status(201).json({
    message: 'Transfer successful',
    transaction
  });
});

// Top up balance
router.post('/topup', [
  body('amount').isNumeric().withMessage('Amount must be numeric'),
  body('method').isIn(['bank', 'card', 'ewallet']).withMessage('Invalid top up method')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array()
    });
  }

  const { amount, method } = req.body;

  if (amount <= 0) {
    return res.status(400).json({
      error: 'Invalid amount',
      message: 'Amount must be greater than 0'
    });
  }

  const transaction = {
    id: transactions.length + 1,
    type: 'topup',
    amount: parseFloat(amount),
    method,
    description: `Top up via ${method}`,
    timestamp: new Date().toISOString(),
    status: 'completed'
  };

  transactions.unshift(transaction);

  res.status(201).json({
    message: 'Top up successful',
    transaction
  });
});

// Make payment
router.post('/payment', [
  body('amount').isNumeric().withMessage('Amount must be numeric'),
  body('merchant').notEmpty().withMessage('Merchant is required'),
  body('description').optional().isLength({ max: 100 }).withMessage('Description too long')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array()
    });
  }

  const { amount, merchant, description } = req.body;

  if (amount <= 0) {
    return res.status(400).json({
      error: 'Invalid amount',
      message: 'Amount must be greater than 0'
    });
  }

  const transaction = {
    id: transactions.length + 1,
    type: 'payment',
    amount: parseFloat(amount),
    merchant,
    description: description || `Payment to ${merchant}`,
    timestamp: new Date().toISOString(),
    status: 'completed'
  };

  transactions.unshift(transaction);

  res.status(201).json({
    message: 'Payment successful',
    transaction
  });
});

module.exports = router;