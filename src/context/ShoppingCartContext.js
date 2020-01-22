import React, { useState } from "react";

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = props => {
  const intitialState = [{ alma: 2 }];
  const [cart, setCart] = useState(intitialState);
  const handleCart = cart => {
    console.log("set");
    console.log(cart);
    setCart(cart);
  };
  return (
    <ShoppingCartContext.Provider value={{ cart, handleCart }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
