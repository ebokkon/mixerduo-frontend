import React from "react";
import ResponsiveFontSizes from "../../ResponsiveFontSizes";


export default function EmptyContainerMessage(props) {
    return (
        <div style={cartMsg}>
            <ResponsiveFontSizes variant={"h3"} text={props.message}/>
        </div>
    )
}
const cartMsg = {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    margin: 50
};