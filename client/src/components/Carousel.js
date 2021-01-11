import React,{useState,useEffect} from "react";

const Carousel=()=>{
    const [i,setI]=useState(0);
    const arr=[()=>{return <div className="text-white col-md-12 text-left">
            <p> Did you know that NASA has said </p>
            <p> that Sanskrit is the most suitable </p>
            <p> language to develop their AI program?</p>
        </div>},()=>{return <div className="text-white col-md-12 text-left">
            <p> Sanskrit alone has 40 million </p>
            <p> manuscripts which are hundred times  </p>
            <p> that of Greek and Latin combined.</p>
        </div>},()=>{return <div className="text-white col-md-12 text-left">
            <p> Sanskrit is growing all over</p>
            <p> the world even Havard University,</p>
            <p> Oxford University are offering Sanskrit programs</p>
        </div>}
    ]
    useEffect(() => {
        const timer = setInterval(()=>{
            document.querySelector("#ani").style.animationName = "none";
            window.requestAnimationFrame(function(time) {
                window.requestAnimationFrame(function(time) {
                    document.querySelector("#ani").style.animationName = "slideInLeft";
            });
            });
            setI((i+1)%3);
            }
        ,4000);
        return () => clearInterval(timer);
      });
      let classtype="container";
      if(document.body.clientWidth<720){
          classtype="container-fluid"
      }
     return <div className="backgrnd animated bounceInRight">
            <div className={`${classtype} animated slideInLeft fstext`} id="ani" style={{position:"absolute",top:"30%",marginLeft:"15%"}}>
                {arr[i]()}
            </div>
            <div className="container text-center bttn-container">
                <a href="/test" style={{textDecoration:"none"}} >
                    <button className="btn btn-lg btn-outline-primary text-white fstext" style={{borderWidth:"5px"}} >
                        Start Learning
                    </button>
                </a>
            </div>
    </div>
}

export default Carousel; 