import React from "react";
import Form from "./Form";
import Button from "@material-ui/core/Button";

import { Link as RouterLink } from "react-router-dom";

export default function SignIn() {

    const buttonSignUp = "Sign In";

    return (
        <div>
            <Form buttonText={buttonSignUp}/>
            <Button className={`signUpButton`} variant={"outlined"} color="primary" component={RouterLink} to="/sign-up">Sign up</Button>
        </div>
    )

}