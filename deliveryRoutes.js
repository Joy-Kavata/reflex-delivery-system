const express = require('express');
const router = express.Router();
const {
  createDelivery,
  getOpenDeliveries,
  assignRider,
  updateStatus
} = require('../controllers/deliveryController');

router.post('/deliveries', createDelivery);
router.get('/deliveries/open', getOpenDeliveries);
router.patch('/deliveries/:id/assign', assignRider);
router.patch('/deliveries/:id/status', updateStatus);

module.exports = router;