import React from "react";
import Nav from "../components/nav";
import LoginContent from "../components/logincontent";

const LoginScreen=({history})=>{
    return <>
        <Nav history={history} />
        <LoginContent history={history} />
    </>
}

export default LoginScreen;