import React from "react";
import { FaUserGraduate} from "react-icons/fa";
import { FaDesktop} from "react-icons/fa";
function Main(){
    return(
        <div className="Main">
            <h2>About Me</h2>
            <p>Why Choose Me</p>
        <div className="AboutMe">
            <div className="Contain">
                <img src="/me.jpeg"/>
            </div>
            <div className="Contain">
                Développeur Web et mobile full stack avec une connaissance de base des piles MERN avec redux,<br/> 
                ainsi qu'un don pour construire des applications avec la plus grande éfficacité.
            </div>
        </div>
        <div className="Part2">
            <h1>Resume</h1>
            <p>My Formal Bio Details</p>
        </div>
        <div className="Resume">
            <div className="Progress">
                <h5><FaUserGraduate/>Education</h5>
                <p></p>
                <h5><FaDesktop/>Programming Skills</h5>
                
                
            </div>
        </div>
        </div>
        
    )
}

export default Main