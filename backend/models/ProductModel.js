const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  productName: String,
  brandName: String,
  category: String,
  productImage: [],
  description: String,
  price: { type: Number, required: true },
  selling: { type: Number, required: true },
}, { 
  timestamps: true,
  toJSON: { virtuals: true },  // Include virtuals in JSON responses
  toObject: { virtuals: true } // Include virtuals when converting to object
});

// Virtual field to calculate the discount percentage
ProductSchema.virtual('discountPercentage').get(function () {
  if (this.price && this.selling) {
    return Math.round(((this.price - this.selling) / this.price) * 100);
  }
  return 0;
});

// Virtual field to calculate the savings
ProductSchema.virtual('savings').get(function () {
  if (this.price && this.selling) {
    return this.price - this.selling;
  }
  return 0;
});

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
