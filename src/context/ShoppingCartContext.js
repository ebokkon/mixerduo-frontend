import React, { useState, useEffect } from "react";
import axios from "axios";

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = props => {
  const [cart, setCart] = useState([]);

  // const handleCart = cart => {
  //   setCart(cart);
  //   window.sessionStorage.setItem("cart", JSON.stringify(cart));
  //   console.log(cart);
  // };
  //
  // useEffect(() => {
  //   const cart = window.sessionStorage.getItem("cart")
  //     ? JSON.parse(window.sessionStorage.getItem("cart"))
  //     : [];
  //   setCart(cart);
  // }, []);


  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
