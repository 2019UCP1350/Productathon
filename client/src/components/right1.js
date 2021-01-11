import React,{useState,useContext} from "react";
import Formbtn from "./formbtn";
import {Context as AuthContext} from "../context/AuthContext";

const Right1=({title,text,history})=>{
    const flag=(title==="Login"? 0:1);
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {state:{level,errorMessage},signup,signin}=useContext(AuthContext);
    return <div className="row m-0"  >
        <div className="col-12 py-3 px-4 sign-up">Getting Started </div>
        {flag?<Formbtn title="Username" datatype="text" value={username} callback={setUsername} />:null}
        <Formbtn title="Email" datatype="email" value={email} callback={setEmail} />
        <Formbtn title="Password" datatype="password" value={password} callback={setPassword}/>
        <div className="col-12 py-3 px-4">
            <button className="btn btn-light btn-block border rounded fs" onClick={()=>{flag?signup({username,email,password,level,history}):signin({email,password,history});}} >
                {title} 
            </button>
        </div>
        {errorMessage? <div className="col-12 py-3 px-4">{errorMessage}</div>:null}
        <div className="col-12 p-3">{text}</div>
    </div>
}

export default Right1;