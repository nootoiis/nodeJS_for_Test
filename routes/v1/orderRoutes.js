const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/orderController');

// สร้างรายการ
router.post('/orders', orderController.createOrder);

// เรียกดูรายการทั้งหมด
router.get('/orders', orderController.getAllOrders);

// เรียกดูรายการทั้งหมดของ user คนหนึ่ง
router.get('/orders/user/:userId', orderController.getOrdersByUser);

// เรียกดูรายการ
router.get('/orders/:id', orderController.getOrderById);

// อัปเดตรายการ
router.put('/orders/:id', orderController.updateOrder);

// ลบรายการ
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;
