import React, { useState, useEffect } from "react";

export const UserContext = React.createContext();

export const UserProvider = props => {
    const [user, setUser] = useState([]);

    useEffect(()=> {
        if (localStorage.getItem("token")){
            let token = localStorage.getItem("token");
            let base64Url = token.split('.')[1];
            let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            let userDetails = JSON.parse(jsonPayload);
            let user = {"username": userDetails.sub, "roles": userDetails.roles, "correct": true, "token": token};
            setUser(user);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};
