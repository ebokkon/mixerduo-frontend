import React, {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "../../../context/UserContext";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";


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
    inputLeft: {
        fontFamily: "\"Roboto\", sans-serif",
        outline: "0",
        background: "#f2f2f2",
        width: "30%",
        border: "0",
        margin: "0 2% 15px 0",
        padding: "15px",
        fontSize: "14px",
    },
    inputRight: {
        fontFamily: "\"Roboto\", sans-serif",
        outline: "0",
        background: "#f2f2f2",
        width: "30%",
        border: "0",
        margin: "0 0 15px 2%",
        padding: "15px",
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
    },
    namesContainer: {
        display: "flex"
    }
});



export default function SignUp() {

    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    const classes = useStyles();

    const checkResponse = (response) => {
        if (response.data.correct) {
            setUser(response.data);
            localStorage.setItem("token", response.data.token)
            redirect();
        } else {
            setMessage(response.data.msg);
        }
    };

    const redirect = () => {
        history.push("/");
    };

    const sendRequest = (event) => {
        event.preventDefault();
        let params = {"username": username, "password": password, "firstname": firstname, "lastname": lastname, "email": email};
        axios.post("http://localhost:8762/auth/sign_up", params).then(response => checkResponse(response))
    };

    return (
        <div className={classes.login}>
            <form className={classes.form} onSubmit={sendRequest}>
                { (message !== "") ?
                    <div className={`message`}>{message}</div> : <div> </div>}
                    <div className={classes.namesContainer}>
                    <input className={`formInput ${classes.inputLeft}`} type="text" placeholder="firstname" onChange={event => setFirstname(event.target.value)}/>
                    <input className={`formInput ${classes.inputRight}`} type="text" placeholder="lastname" onChange={event => setLastname(event.target.value)}/>
                    </div>
                    <input className={`formInput ${classes.input}`} type="text" placeholder="email" onChange={event => setEmail(event.target.value)}/>
                    <input className={`formInput ${classes.input}`} type="text" placeholder="username" onChange={event => setUsername(event.target.value)}/>
                    <input className={`formInput ${classes.input}`} type="password" placeholder="password" onChange={event => setPassword(event.target.value)}/>
                    <input type="submit" value="Sign up" className={classes.button}/>
            </form>
        </div>
    )

}