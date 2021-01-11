import React, {Component} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './Cards';
import Modal  from 'react-modal';


class Level2 extends Component{


  state = {
    alphabets : [
      {id:1, alphabet:"कुत्र"},
      {id:2, alphabet:"कदा"},
      {id:3, alphabet:"सर्व"},
      {id:4, alphabet:"ते"},
      {id:5, alphabet:"बहु"},
      {id:6, alphabet:"तत्"},
      // {id:7, alphabet:"ऋ"},
      // {id:8, alphabet:"ॠ"},
      // {id:9, alphabet:"ऌ"},
      {id:10, alphabet:"अत्र"},
      {id:11, alphabet:"तत्र"},
      {id:12, alphabet:"अल्प"},
      {id:13, alphabet:"द्वि"},
      {id:14, alphabet:"एक "},
      {id:15, alphabet:"अन्य"},
      {id:16, alphabet:"त्रि"},
      {id:17, alphabet:"चतुर्"},
      {id:18, alphabet:"दीर्घ "},
      {id:19, alphabet:"उरु "},
      {id:20, alphabet:"घन"},
      {id:21, alphabet:"गुरु "},
      {id:22, alphabet:"अंहु"},
      {id:23, alphabet:"स्त्री"},
      {id:24, alphabet:"तनु "},
      {id:25, alphabet:"मनुष्य"},
      {id:26, alphabet:"पुरुष"},
      {id:28, alphabet:"बाल"},
      {id:30, alphabet:"मानव"},
      {id:31, alphabet:"नर"},
      {id:32, alphabet:"शिशु"},
      {id:33, alphabet:"पत्नी"},
      {id:34, alphabet:"भार्या"},
      {id:35, alphabet:"पति"},
      {id:36, alphabet:"मातृ"},
      {id:37, alphabet:"पितृ"},
      {id:38, alphabet:"पशु "},
      {id:39, alphabet:"मत्स्य"},
      {id:40, alphabet:"वि"},
      {id:41, alphabet:"यूका"},
      {id:42, alphabet:"सर्प"},
      {id:43, alphabet:"कृमि"},
      {id:44, alphabet:"वृक्ष"},
      {id:45, alphabet:"तरु"},
      {id:46, alphabet:"वन"},
      {id:47, alphabet:"दण्ड"},
      {id:48, alphabet:"फल"},
      {id:49, alphabet:"बीज "},
      {id:50, alphabet:"पत्त्र"},

    ],
    curr_alphabets: [
        {id:1, alphabet:"कुत्र", meaning:"I"},
        {id:2, alphabet:"कदा", meaning:"you"},
        {id:3, alphabet:"सर्व ",meaning : "we"},
        {id:4, alphabet:"ते",meaning: "they"},
        {id:5, alphabet:"बहु", meaning:"this"},
    ],
    next_index : 0,
    instructions : true,
    // total_alphabets : 
  }

  updateCurrAlphabets = () => {
    const new_curr_alphabets = this.state.alphabets.slice(this.state.next_index, this.state.next_index + 5);
    var new_index = this.state.next_index + 5;
    this.setState({next_index : new_index, curr_alphabets:new_curr_alphabets});
  }


  render(){
    const customStyles = {
      content: {
        top: '35%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '500px',
        height : '25%',
        transform: 'translate(-40%, -10%)',
        border: '4px solid #eee',
        boxShadow: '0 2px 3px #ccc'
      },
    };

    const getStarted = {
      fontSize: '18px',
      color:'white',
      padding : "7px",
      borderColor:'#F76540',
      backgroundColor:'#F76540',
      marginLeft : '35%',
      borderRadius :'10px' ,      
    }
    return(
      <div>
          <Modal 
                style = {customStyles}
                isOpen = {this.state.instructions}>
                  <h4 style = {{textAlign:'center'}}>Instructions</h4>
            
                  <p>1. Press the word to listen how its pronounced.</p>
  
                  <p>2. Listen carefully and try to imitate the sound.</p>

                  <p>3. Practice and Practice :) </p>

                <button style = {getStarted} onClick = {() => {this.setState({instructions :false})}}> Get Started!</button>

            </Modal>
        <br></br>
   
       

        <hr></hr>
        {/* <TextBox speak = {this.speakOut}/> */}
        <Cards alphabets = {this.state.curr_alphabets} speak = {this.props.speak} finish = {this.updateCurrAlphabets} text = {"You have learnt many common words in Sanskrit."}/>
        {/* <button onClick = {this.updateCurrAlphabets} > Next</button> */}
       
      </div>
    )
  }

}



export default Level2;
