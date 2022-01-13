import React from "react";

import {FaLocationArrow } from "react-icons/fa";
import { FaFacebook} from "react-icons/fa";
import { FaInstagramSquare} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import{FaTwitterSquare} from "react-icons/fa";
function Footer(){
    return(
        <div className="footer">
            <div className="Touch">
                <div className="in">
                    <h1>Get in Touch 📧</h1>
                    <a href="https://web.facebook.com/profile.php?id=100072705824315"><FaFacebook/></a>
                    <a><FaInstagramSquare/></a>
                    <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"><FaLinkedin/></a>
                    <a href="https://twitter.com/home"><FaTwitterSquare/></a>
                </div>
                <div>
                    <p>Send Your Email Here</p>
                </div>
                <div className="mail"><img src="/mail.jpg"/></div>
                <a href="">Aboubackrskl@gmail.com</a>
            </div>
            <form className="formulaire">
                <input placeholder="Name"/> <br/>
                <input placeholder="Email"/><br/>
                <input className="Mes" placeholder="Message"/><br/>
                <button className="Send"><a href="">Send <FaLocationArrow/></a></button>
            </form>
        </div>
    )
}


export default Footer