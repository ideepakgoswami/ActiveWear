"use client";
import { createContext, ReactNode, useState } from "react";
import { FilterContextType } from "@/types/Filter";
import { DummyProducts } from "@/constants/DummyProducts";

//create context
export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

//provider
export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<[number, number]>([0, 1000]);
  const [rating, setRating] = useState(0);

  const filtering = (product: {
    category: string;
    price: number;
    rating: number;
  }) => {
    const matchCategory =
      product.category.toLowerCase() === category.toLowerCase();
    const matchPrice = product.price >= price[0] && product.price <= price[1];
    const matchRating = product.rating >= rating;
    return matchCategory && matchPrice && matchRating;
  };

  const filterProducts = DummyProducts.filter(filtering);

  return (
    <FilterContext.Provider
      value={{
        category,
        setCategory,
        price,
        setPrice,
        rating,
        setRating,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
