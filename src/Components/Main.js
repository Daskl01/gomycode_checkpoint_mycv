import React from "react";
import {FaGithub } from "react-icons/fa";
import {FaChartBar } from "react-icons/fa";
import { FaUserGraduate} from "react-icons/fa";
import { FaDesktop} from "react-icons/fa";
function Main(){
    return(
        <div className="Main">
            <h2>About Me</h2>
            <p>Why Choose Me</p>
        <div className="AboutMe">
            <div className="Contain1">
                <img src="/me.jpeg"/>
            </div>
            <div className="Contain2">
                Développeur Web et mobile fullStack Js <br/>avec une connaissance <br/> de base des piles MERN <br/> avec redux,<br/> 
                ainsi qu'un don <br/> pour construire <br/> des applications avec <br/> la plus grande éfficacité.
            </div>
        </div>
        <div className="Part2">
            <h1>Resume</h1>
            <p>My Formal Bio Details</p>
        </div>
        <div className="Resume">
            <div>
                <h5><FaUserGraduate/> Education</h5>
                    <p className="p">🔴Ecole Supérieure Africaine des Tics (ESATIC) </p>
                    <p>Licence en SIGL</p>
                    <p className="p">🔴GoMyCode</p>
                    <p>Certification FullStack Js</p>
                    <p className="p">🔴High School</p>
                    <p>CSMK and CMD and CNDA</p>
                    <h5><FaChartBar/> Projects</h5>
                <a href="https://github.com/Daskl01?tab=repositories"><FaGithub/></a>
            </div>
                
                <div>
                    <h5><FaDesktop/> Programming Skills</h5>
                Frontend
                <p>🔴 HTML/CSS</p>
                <p>🔴 JavaScript</p>
                <p>🔴 React Js</p>
                Backend
                <p>🔴 Node Js</p>
                <p>🔴 Express Js</p>
                </div>
                
                
                
            </div>
        </div>
        
    )
}

export default Main;