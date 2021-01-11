import React from "react";
import Nav from "../components/nav";
import SignupContent from "../components/signupcontent";

const SignupScreen=({history})=>{
    return <>
        <Nav history={history} />
        <SignupContent  history={history} />
    </>
}

export default SignupScreen;