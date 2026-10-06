
import React from "react";
import { useProductCategoryHook } from "../../hooks/useProductHooks";

const ProductFilter = ({ search,setSearch}) => {

const {data,isPending} =  useProductCategoryHook()

console.log("category data",data)

if(isPending) return <h1>category is loading..</h1>

  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:flex-row sm:items-center sm:justify-between">

      {/* ================= SEARCH ================= */}
      <div className="relative w-full sm:max-w-md">

        {/* Search Icon */}
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-zinc-800 bg-black py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-orange-500"
        />

      </div>

      {/* ================= CATEGORY ================= */}
      <div className="w-full sm:w-56">

        <select
          className="w-full cursor-pointer appearance-none rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500"
        >
          <option value="all">All Categories</option>

          {data.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
};

export default ProductFilter;

