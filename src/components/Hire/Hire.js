import React from 'react'
import './Hire.css'
import Globe from '../videos/globe.mp4'

export default function Hire() {

    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

  
    return (
      
        <div id="HIRE" className="Hire">

          <div className="container">
            <div className="form">
              <div className="contact-info">
                <h3 className="title">Let's get in touch</h3>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  dolorum adipisci recusandae praesentium dicta!
                </p>
      
                <div className="info">
                  <div className="information">
                    <p>123 Go Fast Drive Rockwood, ON N0B2K0</p>
                  </div>
                  <div className="information">
                    <p>adam-silc@hotmail.com</p>
                  </div>
                  <div className="information">
                    <p>647-378-9888</p>
                  </div>
                </div>
      
                <div className="social-media">
                  <div className="social-icons">
                    <a href="#">
                      <i class="fab fa-facebook-f fa-2x"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-github fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
      
              <div className="contact-form">
                <form action="index.html" autocomplete="off">
                  <h3 className="title">Contact me!</h3>
                  <div className="input-container">
                    <input type="text" name="name" className="input" />
                    <label for="">Username</label>
                    <span>Username</span>
                  </div>
                  <div className="input-container">
                    <input type="email" name="email" className="input" />
                    <label for="">Email</label>
                    <span>Email</span>
                  </div>
                  <div className="input-container">
                    <input type="tel" name="phone" className="input" />
                    <label for="">Phone</label>
                    <span>Phone</span>
                  </div>
                  <div className="input-container textarea">
                    <textarea name="message" className="input"></textarea>
                    <label for="">Message</label>
                    <span>Message</span>
                  </div>
                  <input type="submit" value="Send" className="btn" />
                </form>
              </div>
            </div>
          </div>

          <div className= "Footer">
            <div className="copyright">
              <h1>ADAM SILC  <span className="copy">  &copy;2021</span></h1>
            </div>
          </div>

          <video autoPlay loop muted
            style={{
              width: '100%',
              height: '100vh',
              objectFit: 'cover'
            }}>
              <source src={Globe}
              type='video/mp4'/>  
          </video>
          

          
          
        </div>
    )
}
