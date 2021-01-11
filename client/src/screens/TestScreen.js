import React,{useContext,useState} from "react";
import Nav from "../components/nav";
import Level1 from "../components/Level1"
import Speak from "../components/Speak";
import {Context as AuthContent} from "../context/AuthContext";
import Level2 from "../components/Level2";
import Footer from "../components/footer";

const TestScreen=({history})=>{
    const levelbtn = {
        fontSize: '18px',
        color:'white',
        padding : "7px",
        width : '150px',
        margin : '10px',
        borderColor:'#F76540',
        backgroundColor:'#F76540',
      }
      
      const save = {
        fontSize: '18px',
        color:'white',
        padding : "7px",
        width : '150px',
        margin: '10px',
        // marginLeft : '20%',
        borderColor:'#3D9317',
        backgroundColor:'#3D9317',
      }

    const [currentlevel,setCurrentlevel]=useState(1);
    const [err,setErr]=useState("");
    const [success,setSuccess]=useState("");
    const {update,state}=useContext(AuthContent);
    return <>
        <Nav history={history} />
        <div className="text-center">
          <button style = {levelbtn} onClick={()=>{setCurrentlevel(1)}}>Level 1</button>
          <button style = {save} onClick={async()=>{
              try{
                await localStorage.setItem("level",currentlevel);
                if(state.token){ 
                  update({email:state.email,level:currentlevel})
                  setErr("");
                  setSuccess("Progress saved Sucessfully");
                }else{
                    setErr("You must be logged in");
                }
              }catch(err){
                setErr("Something Went Wrong");
              }
            }
            }>Save Progress</button>
          <button style = {levelbtn} onClick={()=>{setCurrentlevel(2)}}>Level 2</button>
        </div>
        {err? <div className="col-12 text-center " style={{color:"red",fontSize:"20px"}}>{err}</div>:null}
        {success? <div className="col-12 text-center" style={{color:"black",fontSize:"20px"}}>{success}</div>:null}
        { currentlevel===1 ?
            <Level1 speak={Speak} />
            :
            <Level2 speak={Speak} />
        }
        <hr />
        <Footer history={history} />
    </>
}

export default TestScreen;