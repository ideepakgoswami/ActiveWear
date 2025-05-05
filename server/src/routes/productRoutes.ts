import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/productController";

const router = express.Router();

//Get all products route
router.get("/", getAllProducts);

//Get product by ID route
router.get("/:id", getProductById);

export default router;
