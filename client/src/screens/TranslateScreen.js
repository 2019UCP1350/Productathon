import Translate from "../components/translate";
import Nav from "../components/nav";
import Footer from "../components/footer";

const TranslateScreen=({history})=>{
    return <>
        <Nav history={history} />
        <Translate/>
        <Footer history={history} />
    </>
}

export default TranslateScreen;