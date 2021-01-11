import React from "react";

const Navbtn=({title,link})=>{
    return <div className="col-md login">
    <a href={link} style={{textDecoration:"none"}}>
        <button className="btn loginbtn btn-block rounded">
            {title}
        </button>
    </a> 
</div>
}   

export default Navbtn; 