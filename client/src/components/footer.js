import React from "react";

const Footer=({history})=>{
    return <div id="container" className="animated slideInLeft" style={{position:"relative",bottom:"0"}}>
        <div id="part1">
            <div id="companyinfo"> <h1 id="sitelink" >Svadhaya</h1>
                <p id="title">Best Sanskrit online learning site. </p>
                <p id="detail">We provide you all the necessary resources so that your Svadhaya never stops.</p>
            </div>
            <div id="explore">
                <p id="txt1">Explore</p> <a className="link" href="/">Home</a> <a className="link" href="/aboutus">About</a> <a className="link" href="/login">Login</a> <a className="link" href="/signup">SignUp</a>
            </div>
            <div id="visit">
                <p id="txt2">Visit</p>
                <p className="text">Malaviya National Institute of Technology </p>
                <p className="text">Malaviya  Nagar  </p>
                <p className="text">Jaipur 302017</p>
                <p className="text">Rajasthan India </p>
                <p className="text">PH no. +91 123561676</p>
            </div>
            <div id="legal">
                <p id="txt3">Our Services</p> <a className="link1" href="/texttospeech">Text to Speech</a> <a className="link1" href="/translate">Translate from Sankrit to English</a>
            </div>
            <div id="subscribe">
                <p id="txt4">Team: Bit by Bit</p>
                <p className="text">2019ucp1350@mnit.ac.in</p>
                <p className="text">nandini18056@iiitd.ac.in</p>
                <p className="text">2019ucp1352@mnit.ac.in</p>
                <p className="text">2019ucp1358@mnit.ac.in</p>
                <p id="txt5">Connect With US</p> <i className="fa fa-facebook-square social fa-2x"></i> <i className="fa fa-linkedin social fa-2x"></i> <i className="fa fa-twitter-square social fa-2x"></i>
            </div>
        </div>
        <div id="part2">
            <p id="txt6"><i className="material-icons tiny"></i>copyright 2021 Svadhaya - All right reserved</p>
        </div>
    </div>
}

export default Footer;