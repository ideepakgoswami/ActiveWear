import dotenv from "dotenv";
import connectDB from "./src/config/db";
import Product from "./src/models/Product";
import productList from "./data/productList";

dotenv.config();

const pushData = async () => {
  try {
    await connectDB();
    await Product.insertMany(productList);
    console.log("Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Products not seeded", error);
    process.exit(1);
  }
};
pushData();
