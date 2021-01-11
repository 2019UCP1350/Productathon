import React from "react";

const Service=({title,content,src,link})=>{
    return <div  className="container animated slideInLeft" >
    <div className="row m-3 bg-light" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.8)"}}>
      <div className="col-5 p-0 border border-dark border-left-0 border-top-0 border-bottom-0" style={{height:"300px"}}>
        <img src={src} className="w-100 h-100" alt=""/>
        </div>
        <div className="col-7 p-3 text-dark" style={{boxShadow:"0 5px 30px 10px rgba(black, 0.4)"}}>
            <h1>{title}</h1>
            <p className="align-justify">
              {content}  
            </p>
            <a href={link} style={{textDecoration:"none"}} ><button className="btn btn-block btn-success text-white" >{title}</button></a>
        </div>
    </div>
    </div>
}

export default Service;