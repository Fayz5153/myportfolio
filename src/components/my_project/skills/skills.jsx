import React, { Component } from 'react';
import "./skills.css"
import html from "./files/html.svg"
import css from "./files/css.svg"
import sass from "./files/sass.svg"
import reactjs from "./files/react.svg"
import javascript from "./files/javascript.svg"

class Skills extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="skills">
                    <div className="skill">
                        <div className="skill_in">
                            <div>
                                <div className="simg">
                                    <h2>HTML</h2>
                                    <img src={html} alt=""/>
                                </div>
                                <div className="line">
                                    <p className="html"></p>
                                </div>
                            </div>
                            <div>
                                <div className="simg"><h2>CSS</h2>
                                <img src={css} alt=""/></div>
                                
                                <div className="line">
                                    <p className="css"></p>
                                </div>
                            </div>
                        </div>
                        <div className="skill_in">
                            <div>
                                <div className="simg"><h2>SASS</h2>
                                <img src={sass} alt=""/></div>
                                
                                <div className="line"> 
                                    <p className="sass"></p>
                                </div>
                            </div>
                            <div>
                                <div className="simg"><h2>Java Script</h2><img src={javascript} alt=""/></div>
                                <div className="line">
                                    <p className="js"></p>
                                </div>
                            </div>
                        </div>
                        <div className="skill_in">
                            <div>
                                <div className="simg"><h2>React.JS</h2>
                                <img src={reactjs} alt=""/></div>
                                
                                <div className="line">
                                    <p className="react"></p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Skills;