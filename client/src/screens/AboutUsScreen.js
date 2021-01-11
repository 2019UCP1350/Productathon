import React from "react";
import Nav from "../components/nav";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import Footer from "../components/footer";

const AboutUsScreen=({history})=>{
    return <div style={{backgroundColor:"#f3f3f3",fontSize:"20px"}}>
        <Nav history={history} />
        <div className="container" >
            <div className="row">
                <div className="col-6 p-5">
                    <div className="row">
                        <div className="col-12 m-3">
                            <img src={about1} alt="about us" className="rounded img-thumbnail"  />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 m-3 h-100 w-100">
                            <img src={about2} alt="about us"  className="img-fluid img-thumbnail" />
                        </div>
                    </div>
                </div>
                <div className="col-6 text-justify" style={{display:"flex",alignItems:"center"}}>
                    <p>
                        We are a group of coding aficionados currently pursuing a Bachelor's degree. The website is a result of the hard work and dedication of all group members.
                        We were always fascinated by the idea of doing something to promote the oldest language of the world and Productathon gave us this opportunity. 
                        The main rationale behind the development of this site is to promote Sanskrit language in the country of its origin.
                        Our interactive and user-friendly website enables one to learn the basics of Sanskrit easily. It has two levels(Level1 & Level2). In Level1, 
                        one can learn about the alphabets of Sanskrit. In Level2, one can learn about the common words found in Sankrit Language.
                        In our website, there is also a feature which helps the user to translate words from Sanskrit to English language.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default AboutUsScreen;