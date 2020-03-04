import React, {useContext, useState} from "react";
import Form from "./Form";
import axios from "axios";
import {UserContext} from "../../../context/UserContext";
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
            width: "100 %",
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
    loginPage: {
        width: "360px",
            padding: "8% 0 0",
            margin: "auto"
    }
});


export default function SignIn() {

    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const classes = useStyles();

    const sendRequest = (event) => {
        event.preventDefault();
        let params = {"username": username, "password": password};
        axios.post("http://localhost:8080/auth/sign_in", params).then(response => console.log(response))
    };

    return (
        <div className={classes.loginPage}>
            <form className={classes.form} onSubmit={sendRequest}>
                <div className="login-form">
                    <input className={classes.input} type="text" placeholder="username" onChange={event => setUsername(event.target.value)}/>
                    <input className={classes.input} type="password" placeholder="password" onChange={event => setPassword(event.target.value)}/>
                    <input type="submit" value="Sign in" className={classes.button}/>
                </div>
            </form>
        </div>
    )

}