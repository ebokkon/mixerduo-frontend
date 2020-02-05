import React from "react";
import ResponsiveFontSizes from "../../ResponsiveFontSizes";

export default function ShoppingCartMessage() {
    return (
        <div style={cartMsg}>
            <ResponsiveFontSizes variant={"h3"} text={"There are no items in your cart, yet!"}/>
        </div>
    )
}
const cartMsg = {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    margin: 50
};