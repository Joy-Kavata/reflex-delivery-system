const express = require('express');
const router = express.Router();
const {
  createDelivery,
  getOpenDeliveries,
  assignRider,
  updateStatus
} = require('./deliveryController');

// Clean route paths assuming app.use('/api/v1/deliveries', deliveryRoutes) in server.js
router.post('/', createDelivery);
router.get('/open', getOpenDeliveries);
router.patch('/:id/assign', assignRider);
router.patch('/:id/status', updateStatus);

module.exports = router;