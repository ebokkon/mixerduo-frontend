import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import SimpleTable from "./shoppingcartunits/SimpleTable";

export default function ShoppingCart() {
  const { cart, handleCart } = useContext(ShoppingCartContext);

  return cart.length === 0 ? (
    <div style={cartMsg}>
      There are no items in your cart, yet!
    </div>
  ) : (
    <SimpleTable cart={cart} />
  );
}

const cartMsg = {
    textAlign: "center",
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    margin: 50
};
