import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    form: {
        position: "relative",
        zIndex: "1",
        background: "#FFFFFF",
        maxWidth: "360px",
        margin: "0 auto 100px",
        padding: "45px",
        textAlign: "center",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)"
    },
    input: {
        fontFamily: "\"Roboto\", sans-serif",
        outline: "0",
        background: "#f2f2f2",
        border: "0",
        margin: "0 0 15px",
        padding: "15px",
        boxSizing: "border-box",
        fontSize: "14px",
    },
    button: {
        fontFamily: "\"Roboto\", sans-serif",
        textTransform: "uppercase",
        outline: "0",
        background: "lightskyblue",
        width: "100%",
        border: "0",
        padding: "15px",
        color: "#FFFFFF",
        fontSize: "14px",
        webkitTransition: "all 0.3 ease",
        transition: "all 0.3 ease",
        cursor: "pointer"
    },
    login: {
        width: "360px",
        padding: "8% 0 0",
        margin: "auto"
    }
});

export default function Form(props) {

    const classes = useStyles();

    return (
        <div className={classes.login}>
                <form className={classes.form}>
                    <input className={`formInput ${classes.input}`} type="text" placeholder="username"/>
                    <input className={`formInput ${classes.input}`} type="password" placeholder="password"/>
                    <button className={classes.button}>{props.buttonText}</button>
                </form>
        </div>

    )
}