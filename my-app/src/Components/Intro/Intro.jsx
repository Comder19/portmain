import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Demo from "../../img/boy.png";
import crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";




import FloatingDiv from '../FloatingDiv/FloatingDiv';


const Intro = () => {
  return (
    <div className='Intro'>
        <div className="i-left">
            <div className="i-name">
            {/* yahan change hy darkmode ka */}
            <span >Hy! I Am</span>
            <span>Beyond Badal</span>
            <span>
                Frontend Developer with high level of experience in web designing
                and development, producting the Quality work
            </span>
            </div>
        {/* <Link to="contact" smooth={true} spy={true}> */}
          <button className="button i-button">Hire me</button>
        {/* </Link> */}
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
        <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Demo} alt="" />
        {/* <div className='floating-div' style={{top: '-4%', left:'68%'}}>
            <FloatingDiv image ={crown} />
        </div>
        <div className='floating-div' style={{top:'18rem', left:'0rem'}} >

            <FloatingDiv img={thumbup}  />


        </div> */}
                
        </div>

    </div>
    
  )
}

export default Intro