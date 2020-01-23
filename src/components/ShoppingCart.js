import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import SimpleTable from "./SimpleTable";

export default function ShoppingCart() {
  const { cart, handleCart } = useContext(ShoppingCartContext);

  return cart.length === 0 ? (
    <div>No items in your cart!</div>
  ) : (
    <SimpleTable cart={cart} />
  );
}
