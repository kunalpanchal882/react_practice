import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <nav
      style={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 40px",
        borderBottom: "1px solid #e5e5e5",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      {/* Center Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#18181b",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Home
        </a>

        <a
          href="/about"
          style={{
            textDecoration: "none",
            color: "#18181b",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          About
        </a>

        <a
          href="/products"
          style={{
            textDecoration: "none",
            color: "#18181b",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Products
        </a>
      </div>

      {/* Right Side Create Button */}
      <button
      onClick={() => setToggle(prev=>!prev)}
        style={{
          position: "absolute",
          right: "40px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#18181b",
          color: "#ffffff",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Create
      </button>
    </nav>
  );
};

export default Navbar;