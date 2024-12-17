const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// สร้างสินค้า
router.post('/', productController.createProduct);

// เรียกดูสินค้าทั้งหมด
router.get('/', productController.getAllProducts);

// เรียกดูสินค้า
router.get('/:id', productController.getProductById);

// อัพเดทสินค้า
router.put('/:id', productController.updateProduct);

// ลบสินค้า
router.delete('/:id', productController.deleteProduct);

module.exports = router;
