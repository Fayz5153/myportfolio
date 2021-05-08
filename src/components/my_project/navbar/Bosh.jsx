import React, { Component } from 'react';
import "./style.css"
import web from "./web.png"

class Boshsahifa extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <div className="sec_1">
          <div className="about"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1300">
            <p data-aos="zoom-in-down" data-aos-duration="1900">Salom mening ismim</p>
            <h1 data-aos="zoom-out" data-aos-duration="2200">Fayzullo</h1>
            <h2 data-aos="zoom-in-right"
            data-aos-duration="2000">Front-end</h2>
            <h2 data-aos="zoom-out-up"
            data-aos-duration="2000">Web Developer</h2>
          </div>
          <div className="about_2" data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="800">
              <img src={web} alt=""/>
          </div>
        </div>
      </React.Fragment>
     );
  }
}
 
export default Boshsahifa;