import React, {Component} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './Cards';
import Modal  from 'react-modal';


class Level1 extends Component{


  state = {
    alphabets : [
      {id:1, alphabet:"अ"},
      {id:2, alphabet:"आ"},
      {id:3, alphabet:"इ"},
      {id:4, alphabet:"ई"},
      {id:5, alphabet:"उ"},
      {id:6, alphabet:"ऊ"},
      // {id:7, alphabet:"ऋ"},
      // {id:8, alphabet:"ॠ"},
      // {id:9, alphabet:"ऌ"},
      {id:10, alphabet:"ए"},
      {id:11, alphabet:"ऐ"},
      {id:12, alphabet:"ओ"},
      {id:13, alphabet:"औ"},
      {id:14, alphabet:"अं"},
      {id:15, alphabet:"अः"},
      {id:16, alphabet:"क"},
      {id:17, alphabet:"ख"},
      {id:18, alphabet:"ग"},
      {id:19, alphabet:"घ"},
      {id:20, alphabet:"ङ"},
      {id:21, alphabet:"च"},
      {id:22, alphabet:"छ"},
      {id:23, alphabet:"ज"},
      {id:24, alphabet:"झ"},
      {id:25, alphabet:"ञ"},
      {id:26, alphabet:"ट"},
      {id:28, alphabet:"ठ"},
      {id:30, alphabet:"ड"},
      {id:31, alphabet:"ढ"},
      {id:32, alphabet:"ण"},
      {id:33, alphabet:"त"},
      {id:34, alphabet:"थ"},
      {id:35, alphabet:"द"},
      {id:36, alphabet:"ध"},
      {id:37, alphabet:"न"},
      {id:38, alphabet:"प"},
      {id:39, alphabet:"फ"},
      {id:40, alphabet:"भ"},
      {id:41, alphabet:"म"},
      {id:42, alphabet:"य"},
      {id:43, alphabet:"र"},
      {id:44, alphabet:"ल"},
      {id:45, alphabet:"व"},
      {id:46, alphabet:"श"},
      {id:47, alphabet:"ष"},
      {id:48, alphabet:"स"},
      {id:49, alphabet:"ह"},
      {id:50, alphabet:"क्ष"},
      {id:51, alphabet:"त्र"},
      {id:52, alphabet:"ज्ञ"},
    ],
    curr_alphabets: [
      {id:1, alphabet:"अ"},
      {id:2, alphabet:"आ"},
      {id:3, alphabet:"इ"},
      {id:4, alphabet:"ई"},
      {id:5, alphabet:"उ"},
    ],
    next_index : 5,
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
        <Cards alphabets = {this.state.curr_alphabets} speak = {this.props.speak} finish = {this.updateCurrAlphabets}/>
        {/* <button onClick = {this.updateCurrAlphabets} > Next</button> */}
       
      </div>
    )
  }

}



export default Level1;