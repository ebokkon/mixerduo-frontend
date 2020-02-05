import Button from "@material-ui/core/Button";
import React, {useContext} from "react";
import {ShoppingCartContext} from "../../../context/ShoppingCartContext";

export default function ButtonAddToCart(props) {
    const { cart, handleCart } = useContext(ShoppingCartContext);

    const addToCart = (title, price) => {
        let x = false;
        for (let i = 0; i < cart.length; i++) {
            for (let [key] of Object.entries(cart[i])) {
                if (key === title) {
                    x = true;
                    cart[i][key] = (parseInt(cart[i][key]) + parseInt(price)).toString();
                    break;
                }
            }
        }

        if (!x) cart.push({ [title]: price });

        handleCart(cart);
    };

    return(
        <Button
        onClick={() => addToCart(props.tier.title, props.tier.price)}
        fullWidth
        variant={props.tier.buttonVariant}
        color="primary"
    >
        {props.tier.buttonText}
    </Button>
    )
}