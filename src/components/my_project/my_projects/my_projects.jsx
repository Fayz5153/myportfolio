import React, { Component } from 'react';
import "./my_projects.css"
import audible from "./projects/audible.png"
import moto from "./projects/moto.png"
import croppo from "./projects/croppo.png"
import food from "./projects/food.png"
import val from "./projects/val.png"
import wood from "./projects/wood.png"
import ana from "./projects/ana.png"
import urban from "./projects/urban.png"
import vpn from "./projects/vpn.png"




class Project extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="projects">
                    <div className="proj_chap">
                        <div data-aos="zoom-out-right"data-aos-duration="1600"><a href="https://fayz5153.github.io/foodframing/"><img src={food} alt=""/></a></div>
                        <div data-aos="zoom-out-up" data-aos-offset="500" data-aos-duration="1500" className="pdiv"><p>The bike comes in all black, with a relatively modern appeal. Chrome accents in just the right places make the bike stand out, while the black-on-black satin text on the bike’s fork-guards helps highlight the company’s branding without being too direct or obvious.</p></div>
                        <div data-aos="zoom-in-right" data-aos-duration="1300"><a href="https://fayz5153.github.io/Valorant/index"><img src={val} alt=""/></a></div>
                        <div data-aos="zoom-out-right" data-aos-offset="500" data-aos-duration="1700" className="pdiv"><p>Monitor your busines on real-time dashboard. Fully customizable to address your needs. Pre-built Dashboard Templates. </p></div>
                        <div data-aos="zoom-in-right" data-aos-duration="1500"><a href="https://fayz5153.github.io/Woodies/"><img src={wood} alt=""/></a></div>
                        <div data-aos="zoom-in-right" data-aos-offset="500" data-aos-duration="1300" className="pdiv"><p>Urban fashion is style born of the street. A ruffian look that emerges from neighborhoods as opposed to fashion dictated by designers and Wall Street. Media and garment associations often merge hip hop and urban fashion partly because they share this same beginning.</p></div>
                        <div data-aos="zoom-out-right" data-aos-duration="1600"><a href="https://fayz5153.github.io/audible/"><img src={audible} alt=""/></a></div>
                        <div data-aos="zoom-out-up" data-aos-offset="500" data-aos-duration="1500" className="pdiv"><p>Want anything to be easy with LaslesVPN.Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us. We Provide Many Features You Can Use. You can explore the features that we provide with fun and have their own functions each feature. Powerfull online protection, Internet without borders, Supercharged VPN, No specific time limits.</p></div>
                        <div data-aos="zoom-out-up"><a href="https://fayz5153.github.io/Crappo/"><img src={croppo} alt=""/></a></div>
                    </div>
                    <div className="proj_ong">
                        <div data-aos="zoom-in-left" data-aos-offset="500" data-aos-duration="1800" className="pdiv"><p>Food Farming is proud of our past and excited about our future. We strive to continue being one of India and New Zealand's great food companies, offering quality fruits and vegetable.</p></div>
                        <div data-aos="zoom-out-left" data-aos-duration="1200"><a href="https://fayz5153.github.io/Montblanc/"><img src={moto} alt=""/></a></div>
                        <div data-aos="zoom-out-down" data-aos-offset="500" data-aos-duration="1500" className="pdiv"><p>In Valorant lore, Jett is an agile agent expert in the art of evasion. She overwhelms enemies and wounds them with a blade without them knowing her position. Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.</p></div>
                        <div data-aos="zoom-out-left" data-aos-duration="1900"><a href="https://fayz5153.github.io/analys/index"><img src={ana} alt=""/></a></div>
                        <div data-aos="zoom-out-down" data-aos-offset="500" data-aos-duration="2000" className="pdiv"><p>Are you looking for woodden furniture for your place? This is the Right Place WOODIES is the home of modern wooden furniture the answer to your need for furniture with shapes, sizes and colors. Customized furniture made just for you. Get it easy to adjust furniture to the shape and size of your dwelling or business.</p></div>
                        <div data-aos="zoom-in-left" data-aos-duration="1800"><a href="https://fayz5153.github.io/urban/"><img src={urban} alt=""/></a></div>
                        <div data-aos="zoom-out-left" data-aos-offset="500" data-aos-duration="1200" className="pdiv"><p>Discover thousands of binge-worthy audiobooks, exclusive content, and genre-bending Audible Originals. Free trial available! ... Why we think it’s a great listen: An all-time Audible favorite that mixes historic fiction, adventure, and romance with one of the most fascinating literary devices: time travel. Outlander introduces an exhilarating world of heroism and breathtaking thrills as one woman is torn between past and present, passion and love.</p></div>
                        <div data-aos="zoom-out-down" data-aos-duration="2000"><a href="https://fayz5153.github.io/vpn/"><img src={vpn} alt=""/></a></div>
                        <div data-aos="zoom-in-left"  data-aos-duration="1600" className="pdiv"><p>Fastest & secure platform to invest in crypto Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions. Why you should choose CRAPPO. Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p></div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Project;