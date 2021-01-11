import React from "react";

const Formbtn=({title,datatype,value,callback})=>{
    return <>
        <div className="col-3 py-3 pl-4 pr-0">
            <span className="input-group-text" >{title}:</span>
        </div>
        <div className="col-9 py-3 pr-4 pl-0">
            <input 
                type={datatype} 
                className="form-control" 
                placeholder={`Enter ${title}`} 
                value={value}
                onChange={({target})=>{callback(target.value)}} 
                required
            />
        </div>
    </>
}
export default Formbtn;