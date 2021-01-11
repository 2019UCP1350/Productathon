import React from "react";
import AuthContent from "./authcontent"

const SignupContent=({history})=>{
    return <AuthContent title ="SignUp" text="Already have an account ? Login Instead" history={history} />
}
export default SignupContent;