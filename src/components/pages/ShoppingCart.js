import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import SimpleTable from "./shoppingcartunits/SimpleTable";
import ShoppingCartMessage from "./shoppingcartunits/ShoppingCartMessage";
import Button from "@material-ui/core/Button";
import {Link as RouterLink} from "react-router-dom";
import Link from "@material-ui/core/Link";

export default function ShoppingCart() {
  const { cart, handleCart } = useContext(ShoppingCartContext);

  return cart.length === 0 ? (
      <React.Fragment>
        <ShoppingCartMessage/>
        <Button variant="outlined" color="primary" component={RouterLink} to="/courses">Checkout our Courses!</Button>
      </React.Fragment>
  ) : (
     <React.Fragment>
       <SimpleTable cart={cart} />
        <Button variant="outlined" color="primary" component={RouterLink} to="/shoppingcart/checkout">Checkout</Button>
     </React.Fragment>
  );
}


