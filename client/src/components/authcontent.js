import React,{useState,useLayoutEffect} from "react";
import Right from "./right"; 
import Right1 from "./right1";

const AuthContent=({title,text,history})=>{
    const [flag,setFlag]=useState(0);
    const [size, setSize] = useState(0);
    let authstyle={display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"};
    let authcontainer="border-5 border-dark border-top-0 border-bottom-0 border-left-0";
    useLayoutEffect(() => {
        function updateSize() {
          setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
    if(size<720){
        authstyle={}
        authcontainer="border-5 border-dark border-top-0 border-right-0 border-left-0"
    }
    return <div className="container align-middle animated bounceInRight" style={authstyle}>
            <div className="row">
                <div className={`col-md-6 p-5 border text-align-left ${authcontainer}`} >
                    <h1 className="my-4"><strong>Learn Sanskrit By<br/>
                        Self-Studing.</strong>
                    </h1>
                    <p className="text-nowrap">
                        Our user-friendly and interactive website<br/>
                        will make you fall in love with Sanskrit
                    </p>
                </div>
                <div className="col-md-6 pl-5">
                    <div className="bg-white h-100 rounded text-center">
                        {flag? <Right1 title={title} text={text} setFlag={setFlag} history={history} />:<Right title={title} text={text} setFlag={setFlag} history={history} />}
                    </div>
                </div>
            </div>
        </div>
}

export default AuthContent;