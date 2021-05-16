import React from 'react'
import './Navbar.css'
import Link from '../Link/Link.js'

export default function Navbar() {
    return (
        <div id="Nav" className="Navbar">
          <div className= "Nav">
                <Link name="HOME" />
                <Link name= "ABOUT" />
                <Link name= "PROJECTS" />
                <Link name= "HIRE" />
            </div>  
        </div>
    )
}
