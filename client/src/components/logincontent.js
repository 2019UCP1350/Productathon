import React from "react";
import AuthContent from "./authcontent"

const LoginContent=({history})=>{
    return <AuthContent title ="Login" text="Don't have a account ? Go back to Sign up." history={history} />
}

export default LoginContent;