import Button from "@material-ui/core/Button";
import React, {useContext} from "react";
import {UserContext} from "../../../context/UserContext";
import {ShoppingCartContext} from "../../../context/ShoppingCartContext";
import axios from "axios";
import {DialogContext} from "../../../context/DialogContext";
import DialogWindow from "./DialogWindow";

export default function ButtonAddToCart(props) {
    const { cart, setCart } = useContext(ShoppingCartContext);
    const { user, setUser } = useContext(UserContext);
    const { open, setOpen } = useContext(DialogContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const addToCart = (title) => {
        if (user.length === 0){
            handleClickOpen();
        } else {
            let token = user.token;
            let header = {"Authorization": `Bearer ${token}`};
            axios.post(`http://localhost:8080/add`,
                "title="+title+"&username="+user.username,
                {headers: header })
                .then(response => setCart(response.data));
        }
    };

    return(
        <React.Fragment>
        <Button
        onClick={() => addToCart(props.tier.title)}
        fullWidth
        variant={props.tier.buttonVariant}
        color="primary"
    >
        {props.tier.buttonText}
    </Button>
    <DialogWindow/>
    </React.Fragment>
    )
}