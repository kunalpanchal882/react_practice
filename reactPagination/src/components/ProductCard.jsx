const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">

      {/* Product Image */}
      <div className="h-64 bg-zinc-100">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain p-6"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">

        {/* Brand */}
        <p className="text-sm text-zinc-500">
          {product.brand}
        </p>

        {/* Title */}
        <h2 className="mt-1 text-lg font-semibold text-zinc-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-700">
            ★ {product.rating}
          </span>

          <span className="text-sm text-zinc-500">
            {product.stock} left
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-bold text-zinc-900">
            ${product.price}
          </span>

          <span className="text-sm text-green-600">
            {product.discountPercentage}% OFF
          </span>
        </div>

        {/* Shipping */}
        <p className="mt-2 text-sm text-zinc-500">
          {product.shippingInformation}
        </p>

        {/* Button */}
        <button className="mt-5 w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-zinc-800">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;