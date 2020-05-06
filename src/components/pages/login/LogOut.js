import React, {useContext} from "react";
import {UserContext} from "../../../context/UserContext";
import {useHistory} from "react-router-dom";

export default function LogOut() {

    const { setUser} = useContext(UserContext);
    const history = useHistory();

    const logout = () => {
        setUser([]);
        localStorage.clear();
        redirect();
    };

    const redirect = () => {
        history.push("/");
    };

    return (<React.Fragment>{logout()}</React.Fragment>);

}