import React from "react";
import Nav from "../components/nav";
import Spacer from "../components/spacer";
import Service from "../components/service";
import card1 from "../images/card-1.jpg";
import card2 from "../images/card-2.jpeg";
import Footer from "../components/footer";
import Carousel from "../components/Carousel";

const HomeScreen=({history})=>{
    return <>
        <Nav history={history} />
        <Carousel/>
        <Spacer>    
            <Service src={card2} title="Translate" content="This is the feature helping you to translate from Sanskrit to English. "  link="/translate" />
        </Spacer> 
        <Service src={card1} title="Text to speech" content="This is the feature helping you to convert text to speach." link="/texttospeech"/>
        <Footer history={history} />
    </>
}

export default HomeScreen;