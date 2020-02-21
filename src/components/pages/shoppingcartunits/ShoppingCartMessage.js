import React from "react";
import ResponsiveFontSizes from "../../ResponsiveFontSizes";
import {Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function ShoppingCartMessage() {
    return (
        <div style={cartMsg}>
            <ResponsiveFontSizes variant={"h3"} text={"There are no items in your cart, yet!"}/>
            <Button className={`button`} variant="contained" color="primary" component={RouterLink} to="/courses">Checkout our Courses!</Button>
        </div>
    )
}
const cartMsg = {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    margin: 50
};