import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({image, text1,text2}) => {
  return (
    <div className="floating-div">
        <img src={image} alt="" />
        <span>
            
            <br />
            Developer
        </span>
        
    </div>
    
    
    
  )
}

export default FloatingDiv