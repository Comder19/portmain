import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png"
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from './BadalResume.pdf'
const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat  molestias enim quae.
            <br />   
             Architecto saepe doloribus corporis libero nulla qui itaque 
            </span>
            <a href={Resume} download>
            <button className="button s-button">Qt download</button>
            </a>

        </div>
        {/* Right side */}
        <div className="cards">
            <div style={{left:'16rem'}}>
                <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={"Figma,SKetch,Photshop, Adding, Canva"}


                />
            </div>
{/* second card */}

        <div style={{top:"12rem",left:"-6rem"}}>
            <Card
                emoji={Glasses}
                heading={"Developer"}
                detail={"Html,CSS,JavaScript,React"}
            
            />

        </div>

        {/* third card */}

        <div style={{top:"23rem", left:"13rem"}}>
            <Card
                emoji={Humble}
                heading={"UI/UX"}
                detail={"i am very degraded ui/ux designer, u would never fnjsnfw"}
            />

        </div>
        </div>
    </div>
  )
}

export default Services