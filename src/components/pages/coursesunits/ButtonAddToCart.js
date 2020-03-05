import Button from "@material-ui/core/Button";
import React, {useContext} from "react";
import {UserContext} from "../../../context/UserContext";
import {ShoppingCartContext} from "../../../context/ShoppingCartContext";
import axios from "axios";

export default function ButtonAddToCart(props) {
    const { cart, setCart } = useContext(ShoppingCartContext);
    const { user, setUser } = useContext(UserContext);

    const addToCart = (title) => {
        let token = user.token;
        let header = {"Authorization": `Bearer ${token}`};
        axios.post(`http://localhost:8080/add`, "title="+title+"&username="+user.username, {headers: header })
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