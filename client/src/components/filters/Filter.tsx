"use client";

import { useFilter } from "@/hooks/useFilter";

const Filter = () => {
  const { category, setCategory, price, setPrice, rating, setRating } =
    useFilter();

  return (
    <div className="space-y-10">
      <div className="flex flex-row md:flex-col w-full gap-4">
        {/* Category Filter */}
        <div className="flex flex-col w-1/2 md:w-full">
          <h3 className="font-heading font-semibold mb-2">Category</h3>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="font-body  p-2 border rounded">
            <option value="">All</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="flex flex-col w-1/2 md:w-full ">
          <h3 className="font-heading font-semibold mb-2">Rating</h3>
          <select
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            className="font-body w-full p-2 border rounded">
            <option value={0}>All</option>
            <option value={4}>4</option>
            <option value={3}>3★ & above</option>
            <option value={2}>2★ & above</option>
          </select>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <input
          type="range"
          min={0}
          max={1000}
          value={price[1]}
          onChange={(e) => setPrice([0, parseInt(e.target.value)])}
          className="w-4/5"
        />
        <p className="text-sm">₹0 - ₹{price[1]}</p>
      </div>
    </div>
  );
};

export default Filter;
