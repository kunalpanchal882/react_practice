import { Link, useLocation } from "react-router";
import {
  ShoppingCart,
  Package,
  User,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full h-16 bg-black border-b border-zinc-800 px-6 md:px-10 flex items-center justify-between">

      {/* ================= LOGO ================= */}
      <Link
        to="/main"
        className="text-2xl font-bold text-white"
      >
        My<span className="text-orange-500">App</span>
      </Link>


      {/* ================= CENTER LINKS ================= */}
      <div className="hidden md:flex items-center gap-8">

        <Link
          to="/main"
          className={`text-sm font-medium transition ${
            isActive("/main")
              ? "text-orange-500"
              : "text-zinc-400 hover:text-orange-500"
          }`}
        >
          Home
        </Link>

        <Link
          to="/main/product"
          className={`text-sm font-medium transition ${
            isActive("/main/product")
              ? "text-orange-500"
              : "text-zinc-400 hover:text-orange-500"
          }`}
        >
          Products
        </Link>

        <Link
          to="/main/about"
          className={`text-sm font-medium transition ${
            isActive("/main/about")
              ? "text-orange-500"
              : "text-zinc-400 hover:text-orange-500"
          }`}
        >
          About
        </Link>

      </div>


      {/* ================= RIGHT ICONS ================= */}
      <div className="flex items-center gap-2">

        {/* Cart */}
        <Link
          to="/main/card"
          className={`p-2.5 rounded-lg transition ${
            isActive("/main/card")
              ? "text-orange-500 bg-orange-500/10"
              : "text-zinc-400 hover:text-orange-500 hover:bg-orange-500/10"
          }`}
          title="Cart"
        >
          <ShoppingCart size={21} />
        </Link>


        {/* Orders */}
        <Link
          to="/main/order"
          className={`p-2.5 rounded-lg transition ${
            isActive("/main/order")
              ? "text-orange-500 bg-orange-500/10"
              : "text-zinc-400 hover:text-orange-500 hover:bg-orange-500/10"
          }`}
          title="Orders"
        >
          <Package size={21} />
        </Link>


        {/* Profile */}
        <Link
          to="/main/profile"
          className={`p-2.5 rounded-lg transition ${
            isActive("/main/profile")
              ? "text-orange-500 bg-orange-500/10"
              : "text-zinc-400 hover:text-orange-500 hover:bg-orange-500/10"
          }`}
          title="Profile"
        >
          <User size={21} />
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;