import Button from "@material-ui/core/Button";
import React, {useContext} from "react";
import {ShoppingCartContext} from "../../../context/ShoppingCartContext";
import axios from "axios";

export default function ButtonAddToCart(props) {
    const { cart, setCart } = useContext(ShoppingCartContext);

    const addToCart = (title) => {
        axios.get(`http://localhost:8080/add-to-cart/${title}`)
            .then(response => setCart(response.data));
    };

    return(
        <Button
        onClick={() => addToCart(props.tier.title)}
        fullWidth
        variant={props.tier.buttonVariant}
        color="primary"
    >
        {props.tier.buttonText}
    </Button>
    )
}