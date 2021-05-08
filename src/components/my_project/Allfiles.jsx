import React, { Component } from 'react';
import Boshsahifa from "./navbar/Bosh";
import "./style.css";
import modelight from "./files/modelight.svg"
import modedark from "./files/modedark.svg"
import Project from "./my_projects/my_projects"
import Aboutme from "./men/about"
import Skills from "./skills/skills"
import Footer from "./footer/footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


class Allfiles extends Component {
    state = { 
        dark_mode: false,
        modedark: false,
        skills: false,
     }
    handlecalss = () => {
        if (this.state.dark_mode === false) {
            return "light"           
        }
        else {
            return "dark"
        }
    }
    handlecalss1 = () => {
        if (this.state.dark_mode === false) {
            return modelight           
        }
        else {
            return modedark
        }
    }
    handledark_mode= () => {
        this.setState({
            dark_mode: !this.state.dark_mode
        })
    }
    handleskillmode = () => {
        this.setState({
            skills: !this.state.skills
        })
    }
    handleskills = () =>{
        if (this.state.skills === false) {
            return "none"
        }
        else{
            return ""
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className={`asos` + this.handlecalss()}>
                    <div  className="asos1 container">
                        <div className="nav_fix">
                            <div className="logo_div">
                                <h1>My Portfolio</h1>
                                <button className="modebtn" onClick={this.handledark_mode}><img className="modeimg" src={this.handlecalss1()} alt=""/><br/><p className="plight">switch to the dark mode</p><p className="pdark">switch to the light mode</p></button>
                            </div>
                        </div>
                        <div className="boshsahifa">
                            <Boshsahifa/>
                        </div>
                    </div>
                    <div className="aboutme container">
                        <Aboutme/>
                    </div>
                    <div className="container proj_all">
                        <h1 data-aos="zoom-out" 
                        data-aos-offset="300"
                        data-aos-easing="ease-in"
                        data-aos-duration="1500">My projects</h1>
                        <Project/>
                    </div>
                    <div className="skills_1">
                        <a href="#down" onClick={this.handleskillmode}>My Skills</a>
                        <div id="down" className={`s` + this.handleskills()}>
                            <Skills/>
                        </div>
                    </div>
                    <div className="allfooter">
                        <h2>Bog'lanish uchun</h2>
                        <Footer/>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Allfiles;
