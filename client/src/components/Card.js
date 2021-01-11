import React from 'react';
import ReactTooltip from 'react-tooltip';
import Radium from 'radium';
// import  './Card.css';
const Card = (props) => {
    const style = {
      backgroundColor: "white",
      color: "black",
      cursor: 'pointer',
      margin : '10px',
      fontSize: '100px',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      ':hover': {
        backgroundColor : '#F76540',
        color:'white',
      }
      
    }
    return (      
        <div style = {style} className = "card text-center">
            <div className = "card-body text-dark">
                <p data-tip = "Speak" onClick = {props.speak} >{props.text}</p>
                <ReactTooltip />
            </div>
        </div>
    );
}
export default Radium(Card);