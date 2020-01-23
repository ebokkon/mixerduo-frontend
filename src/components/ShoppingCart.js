import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export default function ShoppingCart() {
  const { cart, handleCart } = useContext(ShoppingCartContext);
  console.log(cart);

  return !cart ? (
    <div></div>
  ) : (
    <div>
      {" "}
      Ordered Items:
      {/* {cart.map(item => {
        return (
          <div>
            <div>{item}</div>
            <div>{item}</div>
          </div>
        );
      })} */}
    </div>
  );
}
