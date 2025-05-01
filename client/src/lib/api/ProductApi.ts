import { Product } from "@/types/Product";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products");
    if (!res.ok) throw new Error("Failed to get products from server");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error(); //give error to other function which might be calling getAllProducts, else that function will behave normally even after error
  }
};
