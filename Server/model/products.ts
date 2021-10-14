import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: Number,
    required: true,
  },
  
  sizes: [
    {
      small: { type: Boolean, required: true },
      quantity: { type: Number, required: true },
    },
    {
      medium: { type: Boolean, required: true },
      quantity: { type: Number, required: true },
    },
    {
      large: { type: Boolean, required: true },
      quantity: { type: Number, required: true },
    },
    {
      XLarge: { type: Boolean, required: true },
      quantity: { type: Number, required: true },
    },
    {
      XXLarge: { type: Boolean, required: true },
      quantity: { type: Number, required: true },
    },
    {
      XXXLarge: { type: Boolean, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const Product = mongoose.model("Product", productsSchema);

export default Product;
