import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export default function ShoppingCart() {
  const { cart, handleCart } = useContext(ShoppingCartContext);

  return cart.length === 0 ? (
    <div>No items in your cart!</div>
  ) : (
    <div>
      {" "}
      Ordered Items:
      {cart.map(item => {
        return (
          <div>
            <div>
              {" "}
              {Object.keys(item)[0]} ----
              {item[Object.keys(item)[0]]}
            </div>
          </div>
        );
      })}
    </div>
  );
}
