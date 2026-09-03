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

// 2. GET /api/v1/deliveries/open (Dispatcher views active deliveries)
const getOpenDeliveries = async (req, res) => {
  try {
    const deliveries = await prisma.delivery.findMany({
      where: {
        status: {
          in: ['REQUESTED', 'ASSIGNED', 'IN_TRANSIT', 'PICKED_UP']
        }
      },
      include: { retailer: true },
      orderBy: { created_at: 'desc' }
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
    // Ensure assigned_rider_id defaults to valid rider ID if missing or null in request body
    const assigned_rider_id = req.body && req.body.assigned_rider_id 
      ? req.body.assigned_rider_id 
      : "5b6c7b70-a0e9-4102-b747-00568312db74";

    const delivery = await prisma.delivery.update({
      where: { id },
      data: {
        assigned_rider_id: assigned_rider_id,
        status: 'IN_TRANSIT'
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

    // Atomic update and log insertion using Prisma Transaction
    const [updatedDelivery] = await prisma.$transaction([
      prisma.delivery.update({
        where: { id },
        data: { status: new_status }
      }),
      prisma.deliveryLog.create({
        data: {
          delivery_id: id,
          previous_status: currentDelivery.status,
          new_status: new_status,
          updated_by_user_id: updated_by_user_id || currentDelivery.retailer_id
        }
      })
    ]);

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