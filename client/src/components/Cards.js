import React, {PureComponent} from 'react';
import Card from './Card';
import Test from './Test'
import Radium from 'radium';

class Cards extends PureComponent {
    
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }
    getShuffledIndexArray(){
        var index_array = []
        this.props.alphabets.map((ele,index) => {
            index_array.push(index);
        })
        index_array = this.shuffle(index_array);
        index_array.map((element) => {
            console.log(element);
        })
        return index_array;
    }
    render(){
        const style = {
            backgroundColor: "white",
            color: "black",
            cursor: 'pointer',
            margin : '10px',
            fontSize: '20px',
            border: '1px solid #eee',
            alignItems : 'center',
            boxShadow: '0 2px 3px #ccc',
            width :'92%', height:'93%',
            ':hover': {
              backgroundColor : '#F76540',
              color:"white",
            }
          }
        let test = null;
        let done = null;
        
        if(this.props.alphabets.length > 0)
        {   
            test = (
                <div className = "col-md-4">
                    <div style = {style} className = "card text-center">
                        <div className = "card-body text-dark">
                            <Test alphabets = {this.props.alphabets} indexArray = {this.getShuffledIndexArray()} speak = {this.props.speak} finish = {this.props.finish}  />
                        </div>
                    </div>
                </div>
            )
        }
        else{
            done = (
            <div> 
               
                <h1  style = {{ fontFamily : "FF Tisa Sans", marginTop : "20%", marginLeft : "5%", marginRight:"5%", textAlign:"center"}}>Congratulations! <span aria-label="a rocket blasting off" role="img">🥳🥳</span></h1>
                <h1 style = {{ fontFamily : "FF Tisa Sans", marginTop : "5%", textAlign:"center"}}>You have learnt all the alphabets in Sanskrit.</h1>
           
            </div>
            )
        }
        
        return (
            
            
            <div className = "container-fluid d-flex justify-content-center">
                <div className ="row">
                    {this.props.alphabets.map((ele,index)=>{

                        return (
                            <div className = "col-md-4">
                                 <Card speak = {() => this.props.speak(this.props.alphabets[index].alphabet)} text = {this.props.alphabets[index].alphabet}/>
                            </div>
                        );

                    })}
                  
                    {test}
                    {done}
                </div>
                
            </div>

            
        );

    }


}
export default Radium(Cards);