import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import SimpleTable from "./shoppingcartunits/SimpleTable";
import ShoppingCartMessage from "./shoppingcartunits/ShoppingCartMessage";

export default function ShoppingCart() {
  const { cart, handleCart } = useContext(ShoppingCartContext);

  return cart.length === 0 ? (
    <ShoppingCartMessage/>
  ) : (
    <SimpleTable cart={cart} />
  );
}


