import React, {useContext, useEffect} from "react";
import {ShoppingCartContext} from "../../context/ShoppingCartContext";
import SimpleTable from "./shoppingcartunits/SimpleTable";
import EmptyContainerMessage from "./shoppingcartunits/EmptyContainerMessage";
import Button from "@material-ui/core/Button";
import {Link as RouterLink} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../../context/UserContext";



export default function ShoppingCart() {
    const {cart, setCart} = useContext(ShoppingCartContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
        if (localStorage.getItem("token")){
            let token = localStorage.getItem("token");
            let base64Url = token.split('.')[1];
            let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            let userDetails = JSON.parse(jsonPayload);
            let header = {"Authorization": `Bearer ${token}`};
            axios.post("http://localhost:8762/get-cart", "username="+ userDetails.sub, {headers: header}).then(response => setCart(response.data))
        }
    }, []);


    const page = () => {
        if (user.length === 0) {
            return (<EmptyContainerMessage message={"Sign in for shopping!"}> </EmptyContainerMessage>);
        }
        if (Object.entries(cart).length === 0) {
            return (
                <React.Fragment>
                    <div className={`cartMessageContainer`}>
                        <EmptyContainerMessage message={"There are no items in your cart, yet!"}/>
                        <Button className={`buttonCheckCourses`} variant="contained" color="primary"
                                component={RouterLink} to="/courses">Checkout our Courses!</Button>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                   <SimpleTable cart={cart} className={`simpleTable`}/>
                </React.Fragment>
            )
        }
    };

    return (
        <React.Fragment>
            {page()}
        </React.Fragment>
    )
}


