import React, { Component } from 'react';
import "./footer.css"
import facebook from "./files/facebook.svg";
import github from "./files/github.svg";
import gmail from "./files/gmail.svg";
import telegram from "./files/telegram.svg";
import phone from "./files/phone.svg";
import instagram from "./files/instagram.svg";

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="footer">
                    <div className="footer_chap">
                        <div className="contact"><img src={phone} alt=""/><h4>+998 99 907 5153</h4></div>
                        <div className="contact"><img src={telegram} alt=""/><h4>+998 99 907 5153</h4></div>
                        <div className="contact"><img src={gmail} alt=""/><h4>fayz5153@gmail.com</h4></div>
                    </div>
                    <div className="footer_ong">
                        <a href="https://www.instagram.com/fayzullo_extra/"><img src={instagram} alt=""/></a>
                        <a href="https://www.facebook.com/fayzullo.moydinjonov"><img src={facebook} alt=""/></a>
                        <a href="https://github.com/Fayz5153"><img src={github} alt=""/></a>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;