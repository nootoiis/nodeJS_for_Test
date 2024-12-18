const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // เชื่อมโยงกับผู้ใช้
      ref: 'User',
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId, // เชื่อมโยงกับสินค้า
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number, // จำนวนสินค้าที่สั่งซื้อ
          required: true,
          min: 1,
        },
      },
    ],
    totalPrice: {
      type: Number, // ราคารวมทั้งหมด
      required: true,
    },
    status: {
      type: String, // สถานะของรายการ
      enum: ['Pending', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
  },
  { timestamps: true } // บันทึก createdAt และ updatedAt อัตโนมัติ
);

module.exports = mongoose.model('Order', orderSchema);
