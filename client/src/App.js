import React,{Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen"; 
import TextToSpeech from "./screens/TextToSpeechScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import TestScreen from './screens/TestScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import TranslateScreen from "./screens/TranslateScreen";

class App extends Component {
    render() {
      return (      
         <BrowserRouter>
          <div>
            <Switch>
                <Route path="/" component={HomeScreen} exact/>
                <Route path="/texttospeech" component={TextToSpeech} />
                <Route path="/login" component={LoginScreen} />
                <Route path="/signup" component={SignupScreen} />
                <Route path="/test" component={TestScreen} />
                <Route path="/aboutus" component={AboutUsScreen} />
                <Route path="/translate" component={TranslateScreen} />
            </Switch>
          </div> 
        </BrowserRouter>
      );
    }
  }

export default App;