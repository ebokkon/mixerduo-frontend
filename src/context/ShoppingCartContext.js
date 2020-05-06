import React, { useState } from "react";


export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = props => {
  const [cart, setCart] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
