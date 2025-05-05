import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
dotenv.config();

// import cors from "cors";
const app = express();

// app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("server running on port 5001");
  connectDB();
});
