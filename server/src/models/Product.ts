import { timeStamp } from "console";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productId: { type: Number, unique: true, index: true, required: true },
    title: { type: String, required: true },
    price: {
      type: Number,
      required: true,
      min: [0, "price cannot be Negative"],
    },
    category: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: [String], required: false },
    rating: { type: Number, min: 1, max: 5 },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema); //"Product" will be converted to plural like "Products" to make collection name
export default Product;
