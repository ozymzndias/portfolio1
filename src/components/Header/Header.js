import React from 'react'
import './Header.css'
import CallToAction from '../CallToAction/CallToAction.js'
import Network from '../videos/network.mp4'

export default function Header() {
    
    return (
        <div id="HOME" className= "Header">
            
            
                <div className= "TextCard">
                    <CallToAction name="ABOUT" />
                </div>
            
            <video autoPlay loop muted 
                style={{
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                }}>
                <source src={Network} type='video/mp4'/>
            </video>
            
            
        </div>
        
    )
}
