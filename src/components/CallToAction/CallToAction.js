import React from 'react'
import './CallToAction.css'

function CallToAction() {
    return (
        <div className="Textbox">
          <div className="Text">
            Hello, I'm
            <span className= "Highlight"> Adam Silc</span>
            . <br></br>
            I'm a full-stack web developer.
          </div>
          
            <a className="CallToAction" href={"#ABOUT"} 
            title={<i class="fas fa-arrow-down"></i>}>{<p>View my work</p>} {<i class="fas fa-arrow-down"></i>}
            </a> 
          
        </div>  
    )
}

export default CallToAction;