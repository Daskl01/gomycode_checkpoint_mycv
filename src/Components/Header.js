import { FaFacebook} from "react-icons/fa";
import { FaInstagramSquare} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import{FaTwitterSquare} from "react-icons/fa";
import React from "react";
function Header(){
    return(
        <div className="Header">
            <div className="NavBar">
                <h1>Daskl</h1>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Resume</a>
                <a href="">Testimonials</a>
                <a href="">Contact Me</a>
            </div>
            <div className="Me">
                <div className="icons">
                    <a href="https://web.facebook.com/profile.php?id=100072705824315"><FaFacebook/></a>
                    <FaInstagramSquare/>
                    <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"><FaLinkedin/></a>
                    <a href="https://twitter.com/home"><FaTwitterSquare/></a>
                    <h3>Hello,I'm Diaby<br/> I'm FullStack Developper💻</h3>
                    <h4>Knack of Buildings applications with front and back end operations</h4>
                    <button  className="Button"><a>Get Resume</a></button>
                </div>
                <div className="presentation">
                <img className="Img" src="/pp.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Header;
