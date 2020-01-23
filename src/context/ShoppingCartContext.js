import React, { useState, useEffect } from "react";

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = props => {
  const [cart, setCart] = useState([]);

  const handleCart = cart => {
    setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    setCart(cart);
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ cart, handleCart }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
