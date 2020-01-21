import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={navbarStyle}>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/courses">
        Courses
      </Link>
      <Link style={linkStyle} to="/cocktails">
        Browse Cocktails
      </Link>
      <Link style={linkStyle} to="/search">
        Search
      </Link>
      <div>
        <Link style={linkStyle} to="/shoppingcart">
          Shopping cart
        </Link>
      </div>
    </div>
  );
}

const navbarStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 10px"
};
