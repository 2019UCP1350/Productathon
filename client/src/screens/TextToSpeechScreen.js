import Converter from "../components/converter"
import Nav from "../components/nav";
import Footer from "../components/footer";
import Speak from "../components/Speak";
import Carousel from "../components/Carousel";
const TextToSpeech=({history})=>{
    
    return <>
        <Nav history={history} />
        <Carousel/>
        <Converter speak={Speak} />
        <Footer history={history} />
    </>
}

export default TextToSpeech;