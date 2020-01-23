import React, { useState } from "react";

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = props => {
  const intitialState = [{ pro: "1" }];
  const [cart, setCart] = useState(intitialState);
  const handleCart = cart => {
    console.log("set");
    console.log(cart);
    setCart(cart);
  };
  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
