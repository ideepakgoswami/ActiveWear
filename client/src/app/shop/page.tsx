"use client";
import ProductCard from "@/components/products/ProductCard";
import { getAllProducts } from "@/lib/api/ProductApi";
import { useEffect, useState } from "react";
import Filter from "@/components/filters/Filter";
import { DummyProducts } from "@/constants/DummyProducts";

const Shop = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getAllProducts().then((data) => {
  //     setProducts(data.products);
  //   });
  // }, []);

  return (
    <div className="bg-sand/40 grid grid-cols-1 md:grid-cols-12 gap-2 md:p-4 md:pt-16">
      {/* LEFT */}
      <div className=" filters md:col-span-2 p-4 text-center pt-28">
        {/* FILTERS  */}
        <Filter />
      </div>
      {/* RIGHT */}
      <div className="products md:col-span-10 p-4 text-center">
        {/* PRODUCTS  */}
        <div className="pb-8 md:py-10 text-center">
          <div className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-0">
            <h1 className="font-heading text-3xl md:text-5xl ">All Products</h1>
            <div className="flex items-center gap-5">
              <p> Sort By</p>
              <select
                value={""}
                // onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded">
                <option value="">All</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>

              <input
                className="w-full bg-slate-500 px-3 py-2 border rounded"
                type="text"
                placeholder="Search products..."
              />
            </div>
          </div>
        </div>
        {/* PRODUCT CARD */}
        <div className="grid grid-cols-2 gap-3">
          {DummyProducts.map((p) => {
            return <ProductCard product={p} key={p.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
