import React,{useContext} from "react";
import {GoogleLogin } from "react-google-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {Context as AuthContext} from "../context/AuthContext";

const Right=({text,title,setFlag,history})=>{
    const {Osignup,Osignin,state:{level,errorMessage}}=useContext(AuthContext);

    return <div className="row m-0"  >
        <div className="col-12 py-3 px-4 sign-up">{title}</div>
        <FacebookLogin
            render={ (renderProps)=> (
            <div className="col-12 py-3 px-4">
                <button 
                    className="btn-block border fs bcl rounded py-2"
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled} >
                    {title} with Facebook 
                    <i className="fa fa-facebook-square fsi" ></i> 
                </button>
            </div>
            )}
            appId="enter app Id"
            fields="name,email,picture"
            callback={
                (response)=>{
                    title==="Login"?
                    Osignin({username:response.name,token:response.accessToken,history,email:(response.id).toString()})
                    :
                    Osignup({level,email:(response.id).toString(),username:response.name,token:response.accessToken,history})
                }
            }
        />
        
        <GoogleLogin  render={ (renderProps)=> (
            <div className="col-12 py-3 px-4">
                <button 
                    className="btn-block border fs bcl rounded py-2"
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled} 
                >
                    {title} with Google
                    <i className="fa fa-google fsi" ></i> 
                </button>
            </div>
            )}
            clientId="Enter app id" 
            onSuccess={
                    (response)=>{
                        title==="Login"?
                        Osignin({username:response.profileObj.name,token:response.tokenId,history,email:response.profileObj.email})
                        :
                        Osignup({level,email:response.profileObj.email,username:response.profileObj.name,token:response.tokenId,history})
                    }
                }
        />
        <div className="col pl-4 px-3"><hr className="hrl"/></div>
        <div className="col-1 px-3">or</div>
        <div className="col pr-4 px-3"><hr className="hrl" /></div>
        <div className="col-12 py-3 px-4">
            <button className="btn btn-light btn-block border rounded fs" onClick={()=>{setFlag(1)}}>
                {title} with email
            </button>
        </div>
        {errorMessage? <div className="col-12 py-3 px-4">{errorMessage}</div>:null}
        <div className="col-12 p-3" onClick={()=>history.push(title==="Login"? "/signup": "/login")} >{text}</div>
    </div>
}

export default Right;
