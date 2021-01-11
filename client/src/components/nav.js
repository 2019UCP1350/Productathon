import React,{useContext,useEffect} from "react";
import Navbtn from "./navbtn";
import {Context as AuthContext} from '../context/AuthContext';
import { OverlayTrigger, Popover} from 'react-bootstrap';
import logo from "../images/logo.png";

const Nav=({history})=>{
    const{state:{token,username,level},signout,tryLocalLogin} =useContext(AuthContext);
    useEffect(()=>{tryLocalLogin()},[tryLocalLogin]);
    const popover = (
        <Popover>
            <Popover.Title >User Info</Popover.Title>
            <Popover.Content>
                <p>
                    Username:{username}
                </p>
                Level:{level}
            </Popover.Content>
        </Popover>
      );
    return <div className="container-fulid  bg-light animated bounceInLeft ">
        <div className="row" style={{margin:"0% 2%",display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
            <div className="col-md-4 pr-0 logo" >
                <img src={logo}  alt="logo" />
            </div>
            <div className="col-md-5" style={{display:"flex",justifyContent:"flex-end",flexDirection:"column"}}>
                <div className="row">
                <div className="col-md home" onClick={()=>{history.push("/")}}>Home</div>
                <div className="col-md aboutus" onClick={()=>{history.push("/aboutus")}}>About Us</div>
                {
                    token?
                        <>
                        <div className="col-md login">
                            <OverlayTrigger trigger="focus" placement="bottom" overlay={popover} >
                                <button className="btn loginbtn btn-block rounded" >Profile</button>
                            </OverlayTrigger>
                        </div>
                        <div className="col-md login">
                                <button className="btn loginbtn btn-block rounded" onClick={()=>{signout(history)}} >
                                    Logout
                                </button>
                        </div>
                        </>
                    :
                    <>
                        <Navbtn title="SignUp"  link="/signup" />
                        <Navbtn title="Login" link="/login" />
                    </>
                }
                </div>
            </div>
        </div>
        <hr />
    </div>
}

export default Nav;