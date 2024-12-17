const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String, // ชื่อสินค้า
      required: true,
      trim: true
    },
    price: {
      type: Number, // ราคาสินค้า
      required: true,
      min: 0
    },
    description: {
      type: String, // คำอธิบายสินค้า
      trim: true
    },
    stock: {
      type: Number, // จำนวนสินค้า
      default: 0,
      min: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
