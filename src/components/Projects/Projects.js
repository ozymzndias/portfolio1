import React from 'react'
import './Projects.css'
import indigo from '../../images/indigo.jpg'
import darktrc from '../../images/darkTraceMockup.jpg'
import crunch from '../../images/Crunchiest.jpg'
import java from '../../images/Java.jpg'
import IsoDesign from '../../images/ISOdesign.jpg'
import IsoHouse from '../../images/ISOhouse.jpg'
import starwars from '../../images/StarWarsMockUpFinal.jpg'

export default function Projects() {
    return (
        <div id="PROJECTS" className="Projects">
            <div className="ProjHeading">
              <h1>PROJECTS</h1>
              <div className="ProjHeadingBar"></div>
            </div>     

            <div className="ProjContainer">

              <div className="Top">
                <div className="Image">
                  <img src={darktrc} width={300}></img>
                </div>
                <div className="Image">
                  <img src={IsoHouse} height={300}></img>
                </div>
                
                <div className="Image">
                  <img src={starwars} width={300}></img>
                </div>
                <div className="Image"> 
                  <img src={indigo} width={300}></img>
                </div>
              </div>
              
              <div className="Bottom">
                <div className="Image">
                  <img src={IsoDesign} width={300}></img>
                </div>
                <div className="Image">
                  <img src={crunch} height={300}></img>
                </div>
                  
                <div className="Image">
                  <img src={java} width={300}></img>
                </div>
              </div>

            
            </div>



        </div>
    )
}
