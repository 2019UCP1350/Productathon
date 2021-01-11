import React, {Component} from 'react';
import Modal  from 'react-modal';

class Test extends Component{
    constructor(props){
        super(props)
        this.state = {
            popup : false,
            score : 0,
            showScore: false,
            currQuestion:0,
            options : []
            
        }
        this.baseState = this.state;
    }
   
    getModal = (new_State) => {
        if(new_State === false){
            this.setState(this.baseState);
            this.props.finish();
        }
        this.setState( {popup: new_State});
 
    }

    speakQuestion = () => {
        if(this.state.currQuestion < this.props.alphabets.length){
            //console.log(this.state.options.length);
            this.props.speak(this.props.alphabets[this.props.indexArray[this.state.currQuestion]].alphabet);
        }
        
    }
    handleAnswerOptionClick = (index) => {
        //console.log("Option selected");
        
        if(index === this.props.indexArray[this.state.currQuestion]){
            var newScore = this.state.score + 1;
            this.setState({score:newScore});
        }
        var newQues = this.state.currQuestion + 1;
        this.setState({currQuestion: newQues});
        if(this.state.currQuestion >= this.props.alphabets.length - 1){
    
            this.setState({showScore:true});
        }
    }
    
    render(){
        const customStyles = {
            content: {
              top: '35%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              width: '640px',
              height : '30%',
              transform: 'translate(-40%, -10%)',
            },
       
          };
          
          
        let test = null;
        if(this.state.popup){
           test = (
            <Modal 
                style = {customStyles}
                isOpen = {true}
                ariaHideApp={false}
                >
                {this.state.showScore ? 
                    (   
                        <div className = "score-section">
                            
                            {this.updateStars}
                            <h3>You scored {this.state.score} out of {this.props.alphabets.length}</h3>
                            <div>
                                <span style ={{fontSize:'30px', marginRight:"5px"}} className = {this.state.score > 0  ? "fa fa-star checked" :"fa fa-star"}>  </span>
                                <span style ={{fontSize:'30px', marginRight:"5px"}} className = {this.state.score > 1  ? "fa fa-star checked" :"fa fa-star"}>  </span>
                                <span style ={{fontSize:'30px', marginRight:"5px"}} className = {this.state.score > 2  ? "fa fa-star checked" :"fa fa-star"}>  </span>
                                <span style ={{fontSize:'30px', marginRight:"5px"}} className = {this.state.score > 3  ? "fa fa-star checked" :"fa fa-star"}>  </span>
                                <span style ={{fontSize:'30px', marginRight:"5px"}} className = {this.state.score > 4  ? "fa fa-star checked":"fa fa-star"}>  </span>

                                   
                            </div>
                            
                            <button 
                                style = {{
                                fontSize: '18px',
                                color:'white',
                                padding : "7px",
                                marginTop:"40px",
                                width : '150px',
                                borderColor:'#F76540',
                                backgroundColor:'#F76540',
                                
                            }}
                            onClick = {() => this.getModal(false)}>Close</button> 
                        </div>
                    ) :
                    (
                        <div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">    
                                        <div className = "question-section">
                                            <h2 style = {{paddingBottom:"10px"}}>Question {this.state.currQuestion + 1}/{this.props.alphabets.length}</h2>
                                            <p style = {{fontWeight:"bold",marginBottom : "40px"}}>Identify the alphabet from sound: </p>
                                            <button  
                                            
                                                style = {{
                                                    fontSize: '18px',
                                                    color:'white',
                                                    padding : "7px",
                                                    width : '150px',
                                                    borderColor:'#F76540',
                                                    backgroundColor:'#F76540',
                                                    margin : '2px',  
                                                }}
                                                onClick = {() => this.speakQuestion()}>Speak</button>
                                        </div>
                                    </div>
                                 
                                    <div class="col-sm">
                                        <div className = "answer-section">
                                            {this.props.alphabets.map((element,index) => {
                                                return (
                                                    <div>
                                                    <button
                                                        style = {{
                                                            fontSize: '20px',
                                                            color:'white',
                                                            padding : "4px",
                                                            width : '150px',
                                                            borderColor:'#F76540',
                                                            backgroundColor:'#F76540',
                                                            margin : '2px',

                                                        }}
                                                        onClick = {() => this.handleAnswerOptionClick(index)}>{element.alphabet}</button>
                                                    <br>
                                                    </br>
                                                    </div>
                                                )   
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                       

                    )
                }
              
            </Modal>
           )
        }
    
        return(
            <div>
                <p style = {{fontSize: '50px', alignItems : 'center'}} onClick = {() => this.getModal(true)}  > Take Test</p>
                {test}
            </div>
            
        )
    }
}
export default Test;