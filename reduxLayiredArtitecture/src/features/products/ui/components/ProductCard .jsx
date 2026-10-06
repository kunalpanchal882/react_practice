import React from "react";

const ProductCard = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10">

      {/* ================= IMAGE ================= */}
      <div className="relative flex h-64 items-center justify-center bg-black p-6">

        {/* Discount */}
        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-black">
          -{product.discountPercentage}%
        </span>

        {/* Stock */}
        <span className="absolute right-4 top-4 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400">
          {product.availabilityStatus}
        </span>

        <img
          src={product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">

        {/* Brand + Category */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-orange-500">
            {product.brand}
          </span>

          <span className="text-xs text-zinc-500">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-1 text-lg font-semibold text-white">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm text-orange-400">
            ★ {product.rating}
          </span>

          <span className="text-xs text-zinc-600">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-orange-500">
            ${discountedPrice.toFixed(2)}
          </span>

          <span className="text-sm text-zinc-600 line-through">
            ${product.price}
          </span>
        </div>

        {/* Add To Cart */}
        <button
          className="mt-5 w-full rounded-xl bg-orange-500 py-3 font-semibold text-black transition hover:bg-orange-400 active:scale-[0.98]"
          onClick={() => console.log("Add to cart:", product.id)}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;

