const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/orderController');

// สร้างรายการ
router.post('/', orderController.createOrder);

// เรียกดูรายการทั้งหมด
router.get('/', orderController.getAllOrders);

// เรียกดูรายการทั้งหมดของ user คนหนึ่ง
router.get('/user/:userId', orderController.getOrdersByUser);

// เรียกดูรายการ
router.get('/:id', orderController.getOrderById);

// อัปเดตรายการ
router.put('/:id', orderController.updateOrder);

// ลบรายการ
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
