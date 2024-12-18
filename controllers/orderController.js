const Order = require('../schemas/v1/order');

// สร้างรายการใหม่
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// เรียกดูรายการทั้งหมด
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// เรียกดูรายการทั้งหมดของ user คนหนึ่ง
exports.getOrdersByUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const orders = await Order.find({ userId }).populate('products.productId');
      if (!orders.length) {
        return res.status(404).json({ message: 'No orders found for this user' });
      }
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

// เรียกดูรายการ
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// อัปเดตรายการ
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ลบรายการ
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
