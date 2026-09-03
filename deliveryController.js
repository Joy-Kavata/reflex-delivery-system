const prisma = require('./db');

// 1. POST /api/v1/deliveries (Retailer logs a new delivery request)
const createDelivery = async (req, res) => {
  try {
    const { retailer_id, customer_name, customer_phone, delivery_address, item_description } = req.body;

    const delivery = await prisma.delivery.create({
      data: {
        retailer_id,
        customer_name,
        customer_phone,
        delivery_address,
        item_description,
        status: 'REQUESTED'
      }
    });

    res.status(201).json({ success: true, data: delivery });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 2. GET /api/v1/deliveries/open (Dispatcher views unassigned deliveries)
const getOpenDeliveries = async (req, res) => {
  try {
    const deliveries = await prisma.delivery.findMany({
      where: { status: 'REQUESTED' },
      include: { retailer: true }
    });

    res.status(200).json({ success: true, data: deliveries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 3. PATCH /api/v1/deliveries/:id/assign (Dispatcher assigns a rider)
const assignRider = async (req, res) => {
  try {
    const { id } = req.params;
    const { assigned_rider_id } = req.body;

    const delivery = await prisma.delivery.update({
      where: { id },
      data: {
        assigned_rider_id,
        status: 'ASSIGNED'
      }
    });

    res.status(200).json({ success: true, data: delivery });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 4. PATCH /api/v1/deliveries/:id/status (Rider updates status and inserts audit log)
const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { new_status, updated_by_user_id } = req.body;

    const currentDelivery = await prisma.delivery.findUnique({ where: { id } });

    if (!currentDelivery) {
      return res.status(404).json({ success: false, error: 'Delivery not found' });
    }

    const updatedDelivery = await prisma.delivery.update({
      where: { id },
      data: { status: new_status }
    });

    await prisma.deliveryLog.create({
      data: {
        delivery_id: id,
        previous_status: currentDelivery.status,
        new_status: new_status,
        updated_by_user_id: updated_by_user_id
      }
    });

    res.status(200).json({ success: true, data: updatedDelivery });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createDelivery,
  getOpenDeliveries,
  assignRider,
  updateStatus
};